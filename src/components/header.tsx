"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/menu", label: "Menu" },
  { href: "/stores", label: "Stores" },
  { href: "/event", label: "Event" },
  { href: "/about", label: "About" },
  { href: "/franchise", label: "Franchise" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed right-0 left-0 z-10 mx-auto max-w-screen-md p-4">
      <nav className="font-heading flex items-center justify-between rounded-full border bg-amber-50 px-6 py-3 font-bold shadow sm:px-8 sm:py-4">
        <Link
          href="/"
          className="text-2xl text-pink-300 uppercase focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2">
          Mood
        </Link>
        <button
          onClick={handleClick}
          className="z-10 rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 active:bg-amber-100 sm:hidden"
          aria-label="Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-amber-50 text-3xl uppercase duration-300 sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:text-lg sm:opacity-100 md:gap-6 lg:gap-8 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          {navItems.map((link) => (
            <li key={link.href}>
              <Link
                onClick={handleClick}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "underline decoration-pink-300 decoration-2 underline-offset-4"
                    : "duration-300 hover:text-pink-300 focus:text-pink-300"
                } focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 active:text-pink-400`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
