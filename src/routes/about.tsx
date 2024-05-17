import { createFileRoute } from "@tanstack/react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-bold uppercase md:text-7xl">About</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            repudiandae possimus quasi omnis placeat cum modi explicabo quaerat
            nesciunt illo voluptatem ratione blanditiis enim, perferendis
            mollitia necessitatibus at. Nihil, modi.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  ),
});
