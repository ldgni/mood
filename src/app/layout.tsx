import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Container from "@/components/container";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
      <body className={`${inter.className} `}>
        <Container>
          <Header />
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
