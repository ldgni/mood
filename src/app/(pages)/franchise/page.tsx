import { Metadata } from "next";

import FranchiseForm from "@/components/franchise-form";

export const metadata: Metadata = {
  title: "Franchise",
};

export default function FranchisePage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Franchise
      </h1>
      <p className="max-w-2xl">
        Partner with us and bring our exceptional ice cream experience to your
        community. We&apos;re seeking passionate business owners who share our
        dedication to quality, innovation, and creating memorable experiences
        through artisanal ice cream craftsmanship.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Why choose us?
      </h2>
      <p className="max-w-2xl">
        As our franchise partner, you&apos;ll benefit from extensive training
        programs, continuous support, and access to our time-tested business
        framework. We equip you with everything needed for success, including
        our exclusive recipes and proven marketing approaches that foster
        lasting community relationships.
      </p>
      <FranchiseForm />
    </div>
  );
}
