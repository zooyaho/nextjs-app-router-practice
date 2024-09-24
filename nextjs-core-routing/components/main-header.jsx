import Link from "next/link";
import LogoSrc from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href={"/"}>
        <img src={LogoSrc.src} alt="사이트 로고, 접시 위에 담긴 음식" />
        NextLevel food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
