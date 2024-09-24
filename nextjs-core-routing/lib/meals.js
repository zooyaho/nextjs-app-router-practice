import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 지연 동작을 시뮬레이션하기 위한 코드
  return db.prepare("SELECT * FROM meals").all();
}
