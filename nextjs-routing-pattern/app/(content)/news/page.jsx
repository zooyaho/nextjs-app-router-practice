import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  // const res = await fetch("http://localhost:8080/news");

  // if (!res.ok) throw new Error("Failed to fetch news");

  // const news = await res.json();

  const news = await getAllNews(); // db에 직접 접근하여 데이터를 fetching할 수 있음!

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
