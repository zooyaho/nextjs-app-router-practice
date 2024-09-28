import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <article>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            className="w-[7rem] mb-[1rem] rounded-md"
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
