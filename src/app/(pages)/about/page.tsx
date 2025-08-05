import { Metadata } from "next";

import StatsCounter from "@/components/stats-counter";

export const metadata: Metadata = {
  title: "Results",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        About
      </h1>
      <p className="max-w-2xl">
        At Mood, we believe that great ice cream has the power to transform
        moments and create lasting memories. Founded on a passion for
        exceptional quality and innovative flavors, we&apos;ve dedicated
        ourselves to crafting ice cream experiences that go beyond the ordinary.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Who we are
      </h2>
      <p className="max-w-2xl">
        We&apos;re a team of passionate artisans, flavor innovators, and ice
        cream enthusiasts who believe in the magic of perfectly crafted
        desserts. Our commitment to sustainability, quality ingredients, and
        community connection drives everything we do.
      </p>
      <StatsCounter />
    </div>
  );
}
