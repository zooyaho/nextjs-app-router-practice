import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getAvailableNewsMonths(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = "선택된 기간에 대한 뉴스를 찾지 못했습니다.";

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(+selectedMonth))
  ) {
    throw new Error("Invalid filter!");
  }

  return (
    <>
      <header className="mb-8" id="archive-header">
        <ul className="flex gap-4 mb-8">
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;

            return (
              <li key={link}>
                <Link
                  href={href}
                  className="no-underline text-[#b0b0a6] rounded-md font-bold text-xl hover:text-[#e5e5e1] active:text-[#e5e5e1]"
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
      {newsContent}
    </>
  );
}
