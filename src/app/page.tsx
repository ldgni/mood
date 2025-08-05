import Image from "next/image";

import Footer from "@/components/footer";
import Header from "@/components/header";
import LinkButton from "@/components/link-button";

import about from "../../public/images/about.webp";
import event from "../../public/images/event.webp";
import franchise from "../../public/images/franchise.webp";
import stores from "../../public/images/stores.webp";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full">
        <div className="lg:flex lg:w-full lg:flex-row-reverse">
          <video
            className="pointer-events-none h-[50vh] w-full object-cover lg:h-screen lg:w-1/2"
            autoPlay
            loop
            muted
            playsInline>
            <source src="videos/ice-cream.webm" type="video/webm" />
            <source src="videos/ice-cream.mp4" type="video/mp4" />
          </video>
          <div className="mx-auto flex max-w-screen-sm flex-col items-center gap-6 px-4 py-8 text-center sm:text-lg md:gap-8 md:text-xl lg:min-h-screen lg:w-1/2 lg:justify-center">
            <h1 className="font-heading text-6xl font-bold uppercase sm:text-7xl md:text-8xl">
              Next Level Ice Creams
            </h1>
            <p className="max-w-lg">
              Experience artisanal ice cream like never before. We craft every
              scoop with premium ingredients and innovative flavors that will
              transform your mood and elevate your taste buds to new heights.
            </p>
            <LinkButton to="/menu" className="bg-indigo-950 text-amber-200">
              Our flavours
            </LinkButton>
          </div>
        </div>
        <div className="grid w-full">
          <section className="w-full bg-fuchsia-200/85">
            <div className="flex flex-col lg:h-full lg:w-full lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src={stores}
                  alt="Front of an ice cream shop"
                  className="h-[50vh] w-full object-cover lg:h-full"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl lg:w-1/2">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Stores
                </h2>
                <p className="max-w-lg">
                  Visit our beautiful locations across major cities worldwide.
                  Each store offers a unique atmosphere where you can enjoy our
                  handcrafted ice creams in spaces designed to brighten your day
                  and lift your spirits.
                </p>
                <LinkButton to="/stores" className="bg-amber-50">
                  Locations
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="w-full bg-indigo-300/85">
            <div className="flex flex-col lg:h-full lg:w-full lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <Image
                  src={event}
                  alt="Shiny lights at an event"
                  className="h-[50vh] w-full object-cover lg:h-full"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl lg:w-1/2">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Event
                </h2>
                <p className="max-w-lg">
                  Join us for exclusive events and ice cream experiences that
                  celebrate flavor, community, and good vibes. From tasting
                  sessions to seasonal celebrations, there&apos;s always
                  something exciting happening at Mood.
                </p>
                <LinkButton to="/event" className="bg-amber-50">
                  Pump up
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="w-full bg-sky-950/85">
            <div className="flex flex-col lg:h-full lg:w-full lg:flex-row">
              <div className="lg:w-1/2">
                <Image
                  src={about}
                  alt="People drinking coffee"
                  className="h-[50vh] w-full object-cover lg:h-full"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center text-neutral-100 sm:p-12 sm:text-lg md:gap-8 md:text-xl lg:w-1/2">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  About
                </h2>
                <p className="max-w-lg">
                  Discover the story behind our passion for creating
                  extraordinary ice cream. Learn about our commitment to
                  quality, sustainability, and bringing joy to every customer
                  through innovative flavors and exceptional service.
                </p>
                <LinkButton to="/about" className="bg-amber-50 text-indigo-950">
                  Find out more
                </LinkButton>
              </div>
            </div>
          </section>
          <section className="w-full bg-violet-300/85">
            <div className="flex flex-col lg:h-full lg:w-full lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <Image
                  src={franchise}
                  alt="Workers inside a store"
                  className="h-[50vh] w-full object-cover lg:h-full"
                />
              </div>
              <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-8 text-center sm:p-12 sm:text-lg md:gap-8 md:text-xl lg:w-1/2">
                <h2 className="font-heading text-6xl font-bold uppercase sm:text-7xl">
                  Franchise
                </h2>
                <p className="max-w-lg">
                  Ready to bring the Mood experience to your community? Partner
                  with us to open your own ice cream shop and share our unique
                  flavors and positive energy with customers in your area.
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
    </div>
  );
}
