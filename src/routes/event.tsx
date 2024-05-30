import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const EventComponent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-bold uppercase md:text-7xl">Event</h1>
          <p className="lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            perspiciatis, corporis repellendus sapiente minus dolores accusamus
            rerum fugit mollitia totam? Recusandae ipsam ducimus ea quasi
            assumenda! Tenetur repudiandae fuga reiciendis!
          </p>
          <button
            className="mx-auto rounded-full bg-slate-600 px-6 py-4 font-special text-2xl font-semibold uppercase text-neutral-300 shadow-lg transition duration-300 hover:scale-105 hover:opacity-80 md:px-8 md:py-6 md:text-3xl"
            onClick={() => setShowModal(true)}>
            Preorder now
          </button>
        </div>
      </main>
      <Footer />

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 p-4"
          role="dialog"
          aria-modal="true">
          <div className="rounded-2xl bg-slate-600 p-4 text-center text-neutral-300">
            <h3 className="mb-2 text-2xl font-semibold leading-none md:text-4xl">
              Watch out!
            </h3>
            <p className="mb-2 text-sm md:text-base">
              Our ordering system is still under construction.
            </p>
            <button
              className="rounded-full bg-quinary px-4 py-2 text-sm text-primary transition duration-300 hover:bg-opacity-50 md:text-base"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Route = createFileRoute("/event")({
  component: EventComponent,
});
