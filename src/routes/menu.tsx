import Marquee from "react-fast-marquee";

import flavours1 from "@/assets/images/flavours/flavours-1.webp";
import flavours2 from "@/assets/images/flavours/flavours-2.webp";

export default function MenuRoute() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Menu
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo corrupti,
        ratione, atque ipsum sunt maxime in magnam fugit reprehenderit sequi
        deleniti fugiat assumenda culpa quaerat debitis nihil molestias
        perferendis distinctio.
      </p>
      <Marquee>
        <img
          src={flavours1}
          alt="Ice cream flavours"
          className="mr-8 rounded-3xl"
        />
        <img
          src={flavours2}
          alt="Ice cream flavours"
          className="mr-8 rounded-3xl"
        />
      </Marquee>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a
        incidunt eaque iusto, mollitia aliquam necessitatibus porro sequi saepe
        vero? Aspernatur tempora nihil illo doloribus iusto maxime architecto
        inventore perferendis.
      </p>
    </div>
  );
}
