"use server";
// 이 파일에 모든 함수는 server action이 됨

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  // 브라우저 기본 동작인 자동으로 요청을 보내고 새로고침되는 동작 비활성화됨!
  // submit 요청 후 server에서 해당 메서드가 실행 > 아래 데이터 db에 저장
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
};
