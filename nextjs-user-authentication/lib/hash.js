import crypto from "node:crypto";

export function hashUserPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hashedPassword = crypto.scryptSync(password, salt, 64);
  return hashedPassword.toString("hex") + ":" + salt;
}

export function verifyPassword(storedPassword, suppliedPassword) {
  // 로그인 시 사용자가 입력한 비번을 hash하여 hash하여 db에 저장된 비번과 동일한지 체크하는 함수
  const [hashedPassword, salt] = storedPassword.split(":");
  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}
