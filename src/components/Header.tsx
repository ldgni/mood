import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="container fixed left-0 right-0 max-w-screen-md py-4">
      <nav className="flex items-center justify-between rounded-full bg-primary px-6 py-3 font-special font-bold shadow-lg sm:px-8 sm:py-4">
        <Link to="/" className="text-2xl uppercase text-secondary">
          Mood
        </Link>
        <button onClick={handleClick} className="z-10 sm:hidden">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <ul
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-primary text-3xl uppercase transition duration-500 ease-in-out sm:static sm:translate-x-0 sm:flex-row sm:gap-4 sm:text-base sm:opacity-100 md:gap-6 lg:gap-8 lg:text-lg ${isOpen ? "translate-x-0 text-secondary opacity-100" : "translate-x-full opacity-0"}`}>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/franchise">Franchise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
