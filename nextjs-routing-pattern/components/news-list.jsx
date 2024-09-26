import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link
            href={`/news/${newsItem.slug}`}
            className="flex flex-col items-center gap-6 text-[#e5e5e1] no-underline rounded-md text-lg py-4 hover:bg-[#2d2d2b]"
          >
            {/* <Image */}
            <img
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              className="w-full h-56 object-cover rounded-md"
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
