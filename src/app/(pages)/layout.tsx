import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Header />
      <main className="mt-24 sm:mt-28">{children}</main>
      <Footer />
    </Container>
  );
}
