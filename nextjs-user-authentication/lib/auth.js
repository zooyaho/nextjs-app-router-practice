import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";

// 첫번쨰 인자: 저장할 db, 두번째인자: {user: 사용자 저장할 테이블, session: 세션정보 저장할 테이블}
const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

// 첫번째 인자로 adapter객체가 필요함(세션 id를 어디에 저장할 것인지)
// sessionCookie: 세션ID가 포함된 쿠키를 자동으로 생성됨
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false, // nextjs에서는 false로 설정해야 함(공식문서 참고)
    attributes: {
      secure: process.env.NODE_ENV === "production", // https에서만 작동하도록
    },
  },
});

export async function createAuthSession(userId) {
  // 사용자를 생성하면 세션 테이블에 새 세션을 저장하고 발신요청에 첨부된 쿠키를 설정함
  const session = await lucia.createSession(userId, {}); // 새 세션 객체 반환
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value, // 세션 ID
    sessionCookie.attributes
  ); // 발신요청에 첨부된 쿠키를 설정
}
