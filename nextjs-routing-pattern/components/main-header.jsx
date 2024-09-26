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
            <Link
              href="/news"
              className="text-[#e5e5e1] py-2 px-4 rounded-md no-underline hover:bg-[#bcbcb7] hover:text-[#181817]"
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
