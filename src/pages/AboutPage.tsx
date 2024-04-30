import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container flex flex-col items-center pb-4 pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="mb-4 text-7xl font-bold uppercase">About</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aperiam iure veniam eos ducimus molestiae animi voluptatibus
            dignissimos amet quo voluptatem, cumque nihil laboriosam sint quia
            doloremque. Unde, molestias ipsum!
          </p>
        </div>
      </main>
    </>
  );
}
