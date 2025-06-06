import Link from "next/link";

export default function LinkButton({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      className={`font-heading rounded-full px-6 py-4 text-2xl font-semibold uppercase shadow duration-300 hover:scale-105 hover:opacity-75 focus:ring-4 focus:ring-pink-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 active:scale-95 sm:px-8 sm:py-6 sm:text-4xl ${className}`}>
      {children}
    </Link>
  );
}
