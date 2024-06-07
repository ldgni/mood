import CountUp from "react-countup";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:text-lg">
      <h1 className="font-heading text-5xl font-bold uppercase">About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et repudiandae
        possimus quasi omnis placeat cum modi explicabo quaerat nesciunt illo
        voluptatem ratione blanditiis enim, perferendis mollitia necessitatibus
        at. Nihil, modi.
      </p>
      <h2 className="font-heading text-4xl font-semibold uppercase">
        Who we are
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at sit
        magnam, in, ratione itaque optio, obcaecati voluptas necessitatibus vero
        dolor. Laudantium temporibus nam ad ullam sunt ipsam corrupti facere?
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
          <h3 className="mb-2 font-heading text-5xl text-neutral-100">
            <CountUp end={6} duration={3} />
          </h3>
          <p>locations - and more to come</p>
        </div>
        <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
          <h3 className="mb-2 font-heading text-5xl text-neutral-100">
            <CountUp end={300} duration={4} />
          </h3>
          <p>over 300 employees nationwide</p>
        </div>
        <div className="flex-1 rounded-2xl border bg-indigo-300 p-4 shadow">
          <h3 className="mb-2 font-heading text-5xl text-neutral-100">
            <CountUp end={50000} duration={5} />
          </h3>
          <p>and more followers on socials</p>
        </div>
      </div>
    </div>
  );
}
