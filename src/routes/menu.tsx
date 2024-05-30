import { createFileRoute } from "@tanstack/react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createFileRoute("/menu")({
  component: () => (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="font-special text-4xl font-bold uppercase md:text-7xl">
            Menu
          </h1>
          <p className="lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            corrupti, ratione, atque ipsum sunt maxime in magnam fugit
            reprehenderit sequi deleniti fugiat assumenda culpa quaerat debitis
            nihil molestias perferendis distinctio.
          </p>
          <img
            src="images/flavours/flavours-img.webp"
            alt="Different ice cream flavours"
            width={661}
            height={441}
            className="rounded-2xl shadow-xl"
          />
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a
            incidunt eaque iusto, mollitia aliquam necessitatibus porro sequi
            saepe vero? Aspernatur tempora nihil illo doloribus iusto maxime
            architecto inventore perferendis.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  ),
});
