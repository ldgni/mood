import { Link } from "react-router-dom";

export default function LinkButton({ to, className, children }) {
  return (
    <Link
      to={to}
      className={`rounded-full px-6 py-4 font-heading text-2xl font-semibold uppercase shadow duration-300 hover:scale-105 hover:opacity-75 sm:px-8 sm:py-6 sm:text-4xl ${className}`}>
      {children}
    </Link>
  );
}
