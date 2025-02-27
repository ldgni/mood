import { Link } from "react-router";

export default function NotFoundRoute() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1>Sorry, the page you are looking for does not exist.</h1>
      <p>
        <Link
          to="/"
          className="font-medium hover:underline hover:underline-offset-4">
          &rarr; Go back to home
        </Link>
      </p>
    </div>
  );
}
