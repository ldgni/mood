import Marquee from "react-fast-marquee";

export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg">
      <h1 className="font-heading text-5xl font-bold uppercase">Menu</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo corrupti,
        ratione, atque ipsum sunt maxime in magnam fugit reprehenderit sequi
        deleniti fugiat assumenda culpa quaerat debitis nihil molestias
        perferendis distinctio.
      </p>
      <Marquee>
        <img
          src="/images/flavours/flavours-img-1.webp"
          alt="Ice cream flavours"
          width={500}
          height={333}
          className="mr-8 rounded shadow"
        />
        <img
          src="/images/flavours/flavours-img-2.webp"
          alt="Ice cream flavours"
          width={500}
          height={333}
          className="mr-8 rounded shadow"
        />
      </Marquee>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a
        incidunt eaque iusto, mollitia aliquam necessitatibus porro sequi saepe
        vero? Aspernatur tempora nihil illo doloribus iusto maxime architecto
        inventore perferendis.
      </p>
    </div>
  );
}
