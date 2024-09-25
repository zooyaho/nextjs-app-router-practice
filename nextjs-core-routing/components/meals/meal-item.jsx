import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header className="flex flex-col">
        <div className="relative h-60">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="px-4 py-2">
          <h2 className="text-xl font-montserrat">{title}</h2>
          <p className="text-xs italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="px-4 py-2">{summary}</p>
        <div className="px-4 py-2 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-lg hover:shadow-[rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
