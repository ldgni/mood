import StoresList from "../components/stores-list";

export default function Stores() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg">
      <h1 className="font-heading text-5xl font-bold uppercase">Stores</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
        excepturi iste! Magnam corporis porro saepe sequi at autem dolorem,
        perspiciatis itaque quam eum cum modi. Amet itaque ratione veritatis?
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase">
        Stay tuned!
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
        beatae. Recusandae ad eaque quaerat sequi dicta iure sit sunt deleniti,
        labore, neque consequuntur molestiae tenetur nam tempore quam natus
        accusamus.
      </p>
      <StoresList />
    </div>
  );
}
