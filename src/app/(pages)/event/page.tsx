import { Metadata } from "next";

import PreorderButton from "@/components/preorder-button";

export const metadata: Metadata = {
  title: "Event",
};

export default function EventPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Event
      </h1>
      <p className="max-w-2xl">
        Join us for exclusive ice cream events that celebrate flavor, community,
        and creativity. From seasonal flavor launches to interactive tasting
        experiences, our events are designed to bring people together and create
        unforgettable moments around exceptional ice cream.
      </p>
      <PreorderButton />
    </div>
  );
}
