import { createFileRoute } from "@tanstack/react-router";

import About from "../components/about";
import Event from "../components/event";
import Footer from "../components/footer";
import Franchise from "../components/franchise";
import Header from "../components/header";
import Intro from "../components/intro";
import Stores from "../components/stores";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Header />
      <main>
        <Intro />
        <Stores />
        <Event />
        <About />
        <Franchise />
      </main>
      <Footer />
    </>
  ),
});
