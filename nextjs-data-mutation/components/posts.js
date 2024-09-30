"use client";
import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import { togglePostLikeStatus } from "@/actions/posts";
import { useOptimistic } from "react";
import Image from "next/image";

function imageLoader({ src, width, quality }) {
  const urlStart = src.split("upload/")[0];
  const urlEnd = src.split("upload/")[1];
  const transformations = `w_200,q_${quality}`;

  return `${urlStart}upload/${transformations}/${urlEnd}`;
}

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image
          src={post.image}
          alt={post.title}
          width={200}
          height={120}
          quality={50}
          loader={imageLoader}
        />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              {/* 버튼 클릭할 때마다 action호출 */}
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostId
      );

      if (updatedPostIndex === -1) {
        return prevPosts;
      }

      const updatedPost = { ...prevPosts[updatedPostIndex] };
      updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
      updatedPost.isLiked = !updatedPost.isLiked;

      const newPosts = [...prevPosts];
      newPosts[updatedPostIndex] = updatedPost;
      return newPosts;
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
