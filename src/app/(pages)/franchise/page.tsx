import FranchiseForm from "@/components/franchise-form";

export default function FranchisePage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        Franchise
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae veniam,
        harum deserunt repellat nesciunt natus sequi placeat corrupti ipsum
        itaque. Adipisci ipsam quam inventore, ducimus obcaecati quidem optio
        commodi labore.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Why us?
      </h2>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        doloremque, quidem qui architecto mollitia nemo sint ex magnam dolore
        iusto magni! Sint sequi maiores id quibusdam, quisquam soluta molestiae
        veniam.
      </p>
      <FranchiseForm />
    </div>
  );
}
