import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center gap-2 p-8">
      <Link
        href="/"
        className="font-heading text-xl font-bold uppercase opacity-75 duration-300 hover:opacity-100 focus:outline-none focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 sm:text-2xl">
        Mood
      </Link>
      <p>&copy; 2024 Mood GmbH</p>
    </footer>
  );
}
