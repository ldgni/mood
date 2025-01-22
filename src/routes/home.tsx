import { ScrollRestoration } from "react-router";

import about from "@/assets/images/about.webp";
import event from "@/assets/images/event.webp";
import franchise from "@/assets/images/franchise.webp";
import stores from "@/assets/images/stores.webp";
import IceCreamMp4 from "@/assets/videos/ice-cream.mp4";
import IceCreamWebm from "@/assets/videos/ice-cream.webm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LinkButton from "@/components/link-button";

export default function HomeRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <div className="lg:flex lg:flex-row-reverse">
          <video
            className="pointer-events-none h-[50vh] w-full object-cover lg:h-screen lg:w-1/2"
            autoPlay
            loop
            muted
            playsInline>
            <source src={IceCreamWebm} type="video/webm" />
            <source src={IceCreamMp4} type="video/mp4" />
          </video>
          <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-6 px-4 py-8 text-center sm:text-lg md:gap-8 md:text-xl lg:min-h-screen lg:justify-center">
            <h1 className="font-heading text-6xl font-bold uppercase sm:text-7xl md:text-8xl">
              Next Level Ice Creams
            </h1>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
              totam obcaecati aliquam placeat voluptas incidunt, sunt voluptatem
              impedit vero culpa ipsa aut cupiditate natus. Sunt odio assumenda
              fugit autem?
            </p>
            <LinkButton to="/menu" className="bg-indigo-950 text-amber-200">
              Our flavours
            </LinkButton>
          </div>
        </div>
        <div className="grid lg:grid-rows-4">
          <section className="bg-fuchsia-200/85">
            <div className="flex flex-col lg:h-full lg:flex-row">
              <img
                src={stores}
                alt="Front of an ice cream shop"
                className="h-[50vh] object-cover lg:h-full lg:w-1/2"
                loading="lazy"
              />
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Stores
                </h2>
                <p className="max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque, aliquam aut sequi nobis consectetur voluptates
                  possimus nesciunt voluptatum esse tenetur harum! Sed totam,
                  officiis ipsum aliquam ad tenetur recusandae fugit?
                </p>
                <LinkButton to="/stores" className="bg-amber-50">
                  Locations
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="bg-indigo-300/85">
            <div className="flex flex-col lg:h-full lg:flex-row-reverse">
              <img
                src={event}
                alt="Shiny lights at an event"
                className="h-[50vh] object-cover lg:h-full lg:w-1/2"
                loading="lazy"
              />
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Event
                </h2>
                <p className="max-w-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsam neque aperiam fugiat! Cupiditate, dolore odio
                  sapiente asperiores laudantium alias ut ratione ipsam, iste
                  assumenda dolorem iure quaerat eveniet facilis.
                </p>
                <LinkButton to="/event" className="bg-amber-50">
                  Pump up
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="bg-sky-950/85">
            <div className="flex flex-col lg:h-full lg:flex-row">
              <img
                src={about}
                alt="People drinking coffee"
                className="h-[50vh] object-cover lg:h-full lg:w-1/2"
                loading="lazy"
              />
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center text-neutral-100 sm:p-12 sm:text-lg md:gap-8 md:text-xl">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  About
                </h2>
                <p className="max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  vitae impedit soluta tenetur saepe, voluptas magnam voluptate
                  distinctio reprehenderit, atque, harum modi fugiat porro ad
                  vel natus facilis veritatis minima.
                </p>
                <LinkButton to="/about" className="bg-amber-50 text-indigo-950">
                  Find out more
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="bg-violet-300/85">
            <div className="flex flex-col lg:h-full lg:flex-row-reverse">
              <img
                src={franchise}
                alt="Workers inside a store"
                className="h-[50vh] object-cover lg:h-full lg:w-1/2"
                loading="lazy"
              />
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Franchise
                </h2>
                <p className="max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae doloribus, voluptatem quibusdam similique
                  repellendus dolor a veniam ad consectetur temporibus minima
                  cumque, quae suscipit eveniet debitis quo incidunt asperiores
                  dicta.
                </p>
                <LinkButton to="/franchise" className="bg-amber-50">
                  Become a partner
                </LinkButton>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
