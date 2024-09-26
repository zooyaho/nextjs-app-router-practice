import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 지연 동작을 시뮬레이션하기 위한 코드
  // throw new Error("식사 불러오기를 실패 했습니다.");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // 모든 문자 소문자로 변경
  meal.instructions = xss(meal.instructions);

  // 이미지는 db가 아닌 파일 시스템(public폴더 내)에 저장하여 db에는 이미지의 경로를 설정
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("이미지 저장 실패");
  });

  meal.image = `/images/${fileName}`; // public경로로 db에 저장

  // db 저장
  db.prepare(
    "INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)"
  ).run(meal);
}
