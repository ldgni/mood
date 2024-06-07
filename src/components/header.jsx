import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    href: "/menu",
    label: "Menu",
  },
  {
    href: "/stores",
    label: "Stores",
  },
  {
    href: "/event",
    label: "Event",
  },
  {
    href: "about",
    label: "About",
  },
  {
    href: "franchise",
    label: "Franchise",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 right-0 z-10 mx-auto max-w-screen-md p-4">
      <nav className="flex items-center justify-between rounded-full border bg-amber-50 px-6 py-3 font-heading font-bold shadow sm:px-8 sm:py-4">
        <Link to="/" className="text-2xl uppercase text-pink-300">
          Mood
        </Link>
        <button
          onClick={handleClick}
          className="z-10 sm:hidden"
          aria-label="Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-amber-50 text-3xl uppercase duration-300 sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:text-lg sm:opacity-100 md:gap-6 lg:gap-8 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                onClick={handleClick}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-pink-300 decoration-2 underline-offset-4"
                    : "duration-300 hover:text-pink-300"
                }>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
