"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { title } from "process";
import React, { useEffect } from "react";
import { FaBug } from "react-icons/fa";

interface List {
  title: string;
  href: Url;
}
const Navbar = () => {
  const pathName = usePathname();

  console.log(pathName);
  const list: List[] = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex border-b items-center space-x-7 px-4 h-12 border-zinc-400 ">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex items-center space-x-7 px-2">
        {list.map((item) => (
          <Link
            key={item.title}
            className={`hover:text-zinc-700 ${
              pathName === item.href ? "text-zinc-900" : "text-zinc-500"
            }`}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
