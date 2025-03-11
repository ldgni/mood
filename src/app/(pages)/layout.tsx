import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col">
      <Header />
      <main className="mt-28">{children}</main>
      <Footer />
    </div>
  );
}
