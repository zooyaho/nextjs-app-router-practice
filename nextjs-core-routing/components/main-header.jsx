import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center p-8 md:px-[10%]">
      <Link
        href="/"
        className="flex items-center gap-8 text-[#ddd6cb] font-bold uppercase tracking-wide text-2xl"
      >
        <Image
          src={logoImg}
          alt="사이트 로고, 접시 위에 담긴 음식"
          className="w-20 h-20 object-contain drop-shadow-lg"
          priority
        />
        NextLevel Food
      </Link>

      <nav className="nav">
        <ul className="flex list-none m-0 p-0 gap-6 text-xl">
          <li>
            <Link
              href="/meals"
              className="text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow active:bg-clip-text active:text-transparent active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331]"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow active:bg-clip-text active:text-transparent active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331]"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
