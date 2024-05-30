import { createFileRoute } from "@tanstack/react-router";
import CountUp from "react-countup";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="font-special text-4xl font-bold uppercase md:text-7xl">
            About
          </h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            repudiandae possimus quasi omnis placeat cum modi explicabo quaerat
            nesciunt illo voluptatem ratione blanditiis enim, perferendis
            mollitia necessitatibus at. Nihil, modi.
          </p>
          <h2 className="font-special text-2xl font-semibold uppercase md:text-5xl">
            Who we are
          </h2>
          <p className="mb-4 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at
            sit magnam, in, ratione itaque optio, obcaecati voluptas
            necessitatibus vero dolor. Laudantium temporibus nam ad ullam sunt
            ipsam corrupti facere?
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="flex-1 rounded-xl bg-secondary p-4">
              <h3 className="mb-2 font-special text-5xl text-neutral-50">
                <CountUp end={6} duration={3} />
              </h3>
              <p className="">locations - and more to come</p>
            </div>
            <div className="flex-1 rounded-xl bg-secondary p-4">
              <h3 className="mb-2 font-special text-5xl text-neutral-50">
                <CountUp end={300} duration={3} />
              </h3>
              <p className="">over 300 employees nationwide</p>
            </div>
            <div className="flex-1 rounded-xl bg-secondary p-4">
              <h3 className="mb-2 font-special text-5xl text-neutral-50">
                <CountUp end={50000} duration={3} />
              </h3>
              <p className="">and more followers on socials</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  ),
});
