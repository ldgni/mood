import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <p>
        <Link
          href="/"
          className="font-medium hover:underline hover:underline-offset-4 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-pink-300">
          &rarr; Go back to home
        </Link>
      </p>
    </div>
  );
}
