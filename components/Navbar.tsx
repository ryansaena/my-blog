"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center gap-6 px-6 py-6">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-2xl font-bold transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
            pathname === href
              ? "text-blue-600 dark:text-blue-400"
              : "text-zinc-600 dark:text-zinc-400"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
