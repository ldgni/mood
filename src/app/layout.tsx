import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

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
    <html lang="en">
      <body
        className={`${raleway.className} ${spaceGrotesk.className} bg-amber-50 text-indigo-950`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
