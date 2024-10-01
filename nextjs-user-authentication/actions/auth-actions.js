"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/users";
import { redirect } from "next/navigation";

export async function signup(prevData, formState) {
  const email = formState.get("email");
  const password = formState.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "올바른 이메일 입력하세요.";
  }

  if (password.trim().length < 8) {
    errors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
  }

  if (Object.keys(errors).length > 0) return { errors };

  // 비밀번호 hash변형 작업
  const hashedPassword = hashUserPassword(password);
  try {
    const userId = createUser(email, hashedPassword);
    await createAuthSession(userId);
    redirect("/training");
  } catch (error) {
    // if (error.code === "SQLITE_CONSTRAIANT_UNIQUE") {
    if (error.message.includes("UNIQUE constraint failed")) {
      // 유저 생성 시 이메일 중복일 경우 해당 에러가 반환됨
      return {
        errors: {
          email: "이미 등록된 이메일 입니다. 다른 이메일을 입력해주세요.",
        },
      };
    }
    throw error; // 자세한 에러 문구를 전달하기 위해 가장 가까운 error페이지에서 처리
  }
}
