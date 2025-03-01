import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Level Ice Creams",
  description: "The best ice creams in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body className="bg-amber-50 text-indigo-950">
        <main>{children}</main>
      </body>
    </html>
  );
}
