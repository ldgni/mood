import { Link } from "@tanstack/react-router";

export default function Intro() {
  return (
    <div className="lg:flex lg:flex-row-reverse">
      <video
        className="pointer-events-none h-[50vh] w-full object-cover lg:h-screen lg:w-1/2"
        autoPlay
        loop
        muted
        playsInline>
        <source src="videos/ice-cream.webm" type="video/webm" />
        <source src="videos/ice-cream.mp4" type="video/mp4" />
      </video>
      <div className="container flex max-w-prose flex-col gap-8 py-8 text-center md:py-16 lg:min-h-screen lg:justify-center">
        <h1 className="font-special text-6xl font-bold uppercase md:text-8xl">
          Next Level Ice Creams
        </h1>
        <p className="md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
          totam obcaecati aliquam placeat voluptas incidunt, sunt voluptatem
          impedit vero culpa ipsa aut cupiditate natus. Sunt odio assumenda
          fugit autem?
        </p>
        <Link
          to="/menu"
          className="mx-auto max-w-72 rounded-full bg-secondary px-6 py-4 font-special text-2xl font-semibold uppercase text-accent md:px-8 md:py-6 md:text-3xl">
          Our flavours
        </Link>
      </div>
    </div>
  );
}
