import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  // 이 프로젝트에서는 해당 파일은 삭제해도 됨
  // 최신 기사 3개까지 노출
  const latestPage = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestPage} />
    </>
  );
}
