import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center mb-8 py-[1rem]">
      <div id="logo" className="font-inter text-xl rounded-md">
        <Link
          href="/"
          className="text-[#e1e1d7] no-underline hover:no-underline"
        >
          NextNews
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8 font-bold">
          <li>
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
