import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
