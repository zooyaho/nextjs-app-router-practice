"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-[#ddd6cb] font-bold py-2 px-4 rounded-md hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-shadow ${
        path.startsWith(href)
          ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff8a05] to-[#f9b331] text-shadow"
          : ""
      }`}
    >
      {children}
    </Link>
  );
}
