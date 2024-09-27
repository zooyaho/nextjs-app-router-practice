"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-[#e5e5e1] py-2 px-4 rounded-md no-underline hover:bg-[#bcbcb7] hover:text-[#181817] ${
        path.startsWith(href) ? "bg-[#bcbcb7] text-[#181817]" : ""
      }`}
    >
      {children}
    </Link>
  );
}
