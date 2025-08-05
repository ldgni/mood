import { Metadata } from "next";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import flavours1 from "../../../../public/images/flavours/flavours-1.webp";
import flavours2 from "../../../../public/images/flavours/flavours-2.webp";

export const metadata: Metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Menu
      </h1>
      <p className="max-w-2xl">
        Explore our carefully curated selection of artisanal ice cream flavors,
        each one crafted with premium ingredients and designed to create the
        perfect mood-boosting experience. From classic favorites to innovative
        seasonal creations, every scoop tells a delicious story.
      </p>
      <Marquee>
        <Image
          src={flavours1}
          alt="Ice cream flavours"
          className="mr-8 rounded-3xl"
        />
        <Image
          src={flavours2}
          alt="Ice cream flavours"
          className="mr-8 rounded-3xl"
        />
      </Marquee>
      <p className="max-w-2xl">
        Our master ice cream makers use only the finest natural ingredients,
        sourced responsibly to ensure both exceptional taste and quality. We
        constantly innovate our flavors to surprise and delight, making every
        visit a new adventure for your taste buds.
      </p>
    </div>
  );
}
