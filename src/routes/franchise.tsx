import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

import Footer from "../components/footer";
import Header from "../components/header";

const FranchiseComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    setShowModal(true);
  };

  return (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="font-special text-4xl font-bold uppercase md:text-7xl">
            Franchise
          </h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            veniam, harum deserunt repellat nesciunt natus sequi placeat
            corrupti ipsum itaque. Adipisci ipsam quam inventore, ducimus
            obcaecati quidem optio commodi labore.
          </p>
          <h2 className="font-special text-2xl font-semibold uppercase md:text-5xl">
            Why us?
          </h2>
          <p className="mb-4 lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            doloremque, quidem qui architecto mollitia nemo sint ex magnam
            dolore iusto magni! Sint sequi maiores id quibusdam, quisquam soluta
            molestiae veniam.
          </p>
          <form
            className="flex flex-col gap-4 text-sm sm:text-base"
            ref={formRef}
            onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="rounded-3xl border px-4 py-2"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="rounded-3xl border px-4 py-2"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Your city"
              className="rounded-3xl border px-4 py-2"
              required
            />
            <textarea
              name="intro"
              id="intro"
              placeholder="Please introduce yourself briefly"
              rows={5}
              className="rounded-3xl border px-4 py-2"
              required></textarea>
            <button
              type="submit"
              className="rounded-3xl bg-senary p-2 px-4 py-2 font-special font-bold uppercase text-white transition hover:border-indigo-400 hover:opacity-85">
              Let's go
            </button>
          </form>
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
              Success!
            </h3>
            <p className="mb-2 text-sm md:text-base">
              Your form has been successfully submitted.
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

export const Route = createFileRoute("/franchise")({
  component: FranchiseComponent,
});
