import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsDefaultPage() {
  // 최신 기사 3개까지 노출
  const latestPage = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestPage} />
    </>
  );
}
