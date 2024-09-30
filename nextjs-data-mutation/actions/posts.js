"use server";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevFormData, formData) {
  // server action fn
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) errors.push("Title is required");
  if (!content || content.trim().length === 0)
    errors.push("Content is required");
  // !image로만 조건을 설정하면, 이미지를 선택하지 않아도 빈객체이기 때문에 해당 조건문을 않탐
  if (!image || image.size === 0) errors.push("Image is required");

  if (errors.length > 0) return { errors };

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
  // db를 직접 수정하는 작업의 함수 호출 시 server action을 정의 해야 함!
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/peed", "layout");
}
