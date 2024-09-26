import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();
  return (
    <header className="mb-8" id="archive-header">
      <ul className="flex gap-4 mb-8">
        {links.map((link) => (
          <li>
            <Link
              href={`/archive/${link}`}
              className="no-underline text-[#b0b0a6] rounded-md font-bold text-xl hover:text-[#e5e5e1] active:text-[#e5e5e1]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
