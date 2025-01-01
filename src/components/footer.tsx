import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center gap-2 p-8">
      <Link
        to="/"
        className="font-heading text-xl font-bold uppercase opacity-75 duration-300 hover:opacity-100 sm:text-2xl">
        Mood
      </Link>
      <p>&copy; 2024 Mood GmbH</p>
    </footer>
  );
}
