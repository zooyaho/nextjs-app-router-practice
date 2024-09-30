import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

/* 정적 metadata설정 방법 */
// export const metadata = {
//   title: "Browse all our X posts.",
//   description: "Browse all our posts.",
// };

/* 동적 metadata설정 방법 */
export async function generateMetadata(config) {
  // config객체에는 params프로퍼티를 담고 있음
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: "Browse all our posts.",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
