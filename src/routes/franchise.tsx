import { createFileRoute } from "@tanstack/react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createFileRoute("/franchise")({
  component: () => (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-bold uppercase md:text-7xl">
            Franchise
          </h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            veniam, harum deserunt repellat nesciunt natus sequi placeat
            corrupti ipsum itaque. Adipisci ipsam quam inventore, ducimus
            obcaecati quidem optio commodi labore.
          </p>
          <h2 className="text-2xl font-semibold uppercase md:text-5xl">
            Why us?
          </h2>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloremque, quidem qui architecto mollitia nemo sint ex magnam
            dolore iusto magni! Sint sequi maiores id quibusdam, quisquam soluta
            molestiae veniam.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  ),
});
