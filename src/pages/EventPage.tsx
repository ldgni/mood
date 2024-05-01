import Footer from "../components/Footer";
import Header from "../components/Header";

export default function EventPage() {
  return (
    <div className="container flex min-h-screen flex-col items-center">
      <Header />
      <main className="grow pt-28 text-center">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="mb-4 text-4xl font-bold uppercase md:text-7xl">
            Event
          </h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aperiam iure veniam eos ducimus molestiae animi voluptatibus
            dignissimos amet quo voluptatem, cumque nihil laboriosam sint quia
            doloremque. Unde, molestias ipsum!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
