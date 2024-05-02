import { createFileRoute } from "@tanstack/react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/ui/Card";

export const Route = createFileRoute("/stores")({
  component: () => (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex grow flex-col items-center pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="text-4xl font-bold uppercase md:text-7xl">Stores</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aperiam iure veniam eos ducimus molestiae animi voluptatibus
            dignissimos amet quo voluptatem, cumque nihil laboriosam sint quia
            doloremque. Unde, molestias ipsum!
          </p>
          <h2 className="text-3xl font-semibold uppercase md:text-6xl">
            Stay tuned!
          </h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            reprehenderit facilis quos quaerat nesciunt itaque temporibus
            adipisci delectus corporis illum deleniti nulla, qui aliquid, aut
            exercitationem. Qui atque impedit accusantium.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
          <Card
            image="/images/stores/store-paris-img.webp"
            title="Paris"
            address="123 Paris Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="paris@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
          <Card
            image="/images/stores/store-london-img.webp"
            title="London"
            address="123 London Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="london@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
          <Card
            image="/images/stores/store-luxembourg-img.webp"
            title="Luxembourg"
            address="123 Luxembourg Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="luxembourg@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
          <Card
            image="/images/stores/store-la-img.webp"
            title="Los Angeles"
            address="123 Los Angeles Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="la@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
          <Card
            image="/images/stores/store-berlin-img.webp"
            title="Berlin"
            address="123 Berlin Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="berlin@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
          <Card
            image="/images/stores/store-brussels-img.webp"
            title="Brussels"
            address="123 Brussels Street"
            openingHours="Mon - Fri: 9am - 5pm"
            email="brussels@mood.com"
            socials={[
              { name: "facebook", url: "#" },
              { name: "instagram", url: "#" },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  ),
});
