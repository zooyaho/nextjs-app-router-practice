import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link
              href={`/news/${news.slug}`}
              className="flex flex-col items-center gap-6 text-[#e5e5e1] no-underline rounded-md text-lg py-4 hover:bg-[#2d2d2b]"
            >
              {/* <Image */}
              <img
                src={`/images/news/${news.image}`}
                alt={news.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
