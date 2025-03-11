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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
        perspiciatis, corporis repellendus sapiente minus dolores accusamus
        rerum fugit mollitia totam? Recusandae ipsam ducimus ea quasi assumenda!
        Tenetur repudiandae fuga reiciendis!
      </p>
      <PreorderButton />
    </div>
  );
}
