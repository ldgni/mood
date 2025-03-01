import StatsCounter from "@/components/stats-counter";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg md:text-xl">
      <h1 className="font-heading text-5xl font-bold uppercase sm:text-6xl md:text-7xl">
        About
      </h1>
      <p className="max-w-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repudiandae
        possimus quasi omnis placeat cum modi explicabo quaerat nesciunt illo
        voluptatem ratione blanditiis enim, perferendis mollitia necessitatibus
        at. Nihil, modi.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase sm:text-5xl md:text-6xl">
        Who we are
      </h2>
      <p className="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at sit
        magnam, in, ratione itaque optio, obcaecati voluptas necessitatibus vero
        dolor. Laudantium temporibus nam ad ullam sunt ipsam corrupti facere?
      </p>
      <StatsCounter />
    </div>
  );
}
