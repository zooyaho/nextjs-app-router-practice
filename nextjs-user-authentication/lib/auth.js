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

export async function varifyAuth() {
  // 인증된 유저의 요청인지 확인 > 유효한 쿠키인지 확인
  const sessionCookie = cookies().get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return { user: null, session: null };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return { user: null, session: null };
  }

  // 유효한 세션인지 검증
  const result = await lucia.validateSession(sessionId); // 데이터베이스에서 해당 id를 가진 세션을 찾아 그 결과를 반환

  try {
    // 새로고침을 통해 세션을 잃지 않고 유지하기 위한 갱신 처리 === 쿠키 연장
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value, // 세션 ID
        sessionCookie.attributes
      );
    }

    if (!result.session) {
      // 유효한 세션쿠키가 아닐 경우 기존 쿠키 삭제!
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value, // 세션 ID
        sessionCookie.attributes
      );
    }
  } catch {
    // 페이지 렌더링할 때 세션쿠키 연장 시 에러가 발생하는데, 에러가 나도 아무 처리하지 않게 빈 catch문 설정
  }
  return result;
}
