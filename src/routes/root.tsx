import { Outlet, ScrollRestoration } from "react-router";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Root() {
  return (
    <Container>
      <Header />
      <main className="mt-24 sm:mt-28">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </Container>
  );
}
