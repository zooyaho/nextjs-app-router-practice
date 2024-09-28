import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(month))
  ) {
    throw new Error("Invalid filter!");
  }

  return (
    <header className="mb-8" id="archive-header">
      <ul className="flex gap-4 mb-8">
        {links.map((link) => {
          const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

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
  );
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = "기간설정을 하세요.";

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>...loading filter header</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>...loading news</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
