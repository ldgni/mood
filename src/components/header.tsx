import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container fixed left-0 right-0 max-w-screen-md py-4">
      <nav className="flex items-center justify-between rounded-full bg-primary px-6 py-3 font-special font-bold shadow-lg sm:px-8 sm:py-4">
        <Link to="/" className="text-2xl uppercase text-secondary">
          Mood
        </Link>
        <button
          onClick={handleClick}
          className="z-10 sm:hidden"
          aria-label="Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-primary text-3xl uppercase transition duration-500 ease-in-out sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:text-lg sm:opacity-100 md:gap-6 lg:gap-8 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <li>
            <Link
              to="/menu"
              className="transition-colors duration-300 hover:text-secondary">
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/stores"
              className="transition-colors duration-300 hover:text-secondary">
              Stores
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className="transition-colors duration-300 hover:text-secondary">
              Event
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors duration-300 hover:text-secondary">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/franchise"
              className="transition-colors duration-300 hover:text-secondary">
              Franchise
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
