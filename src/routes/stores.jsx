import StoresList from "../components/stores-list";

export default function Stores() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Stores
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
        excepturi iste! Magnam corporis porro saepe sequi at autem dolorem,
        perspiciatis itaque quam eum cum modi. Amet itaque ratione veritatis?
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Stay tuned!
      </h2>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
        beatae. Recusandae ad eaque quaerat sequi dicta iure sit sunt deleniti,
        labore, neque consequuntur molestiae tenetur nam tempore quam natus
        accusamus.
      </p>
      <StoresList />
    </div>
  );
}
