import { Metadata } from "next";

import StoresList from "@/components/stores-list";

export const metadata: Metadata = {
  title: "Stores",
};

export default function StoresPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Stores
      </h1>
      <p className="max-w-2xl">
        Discover your nearest location and immerse yourself in a world of
        exceptional ice cream experiences. Each of our stores is thoughtfully
        designed as a welcoming space where premium flavors meet inviting
        atmosphere, creating the perfect setting to enjoy our handcrafted
        creations.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Stay tuned!
      </h2>
      <p className="max-w-2xl">
        We&apos;re constantly expanding to bring our exceptional ice cream
        experience to new communities around the world. Follow us for updates on
        upcoming locations and be the first to know when we&apos;re opening near
        you.
      </p>
      <StoresList />
    </div>
  );
}
