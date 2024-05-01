import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="container flex flex-col items-center pb-8 pt-28 text-center md:pb-16">
        <div className="flex max-w-prose flex-col gap-4 lg:gap-8">
          <h1 className="mb-4 text-7xl font-bold uppercase">Menu</h1>
          <p className="lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aperiam iure veniam eos ducimus molestiae animi voluptatibus
            dignissimos amet quo voluptatem, cumque nihil laboriosam sint quia
            doloremque. Unde, molestias ipsum!
          </p>
          <img
            src="images/flavours/flavours-img.webp"
            alt="Different ice cream flavours"
            className="w-full max-w-2xl rounded-2xl shadow-xl"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem ipsam tempore ducimus dolorum inventore temporibus
            mollitia molestiae laborum repellat hic facere reprehenderit natus,
            possimus unde ipsum ipsa eius. Ipsam, saepe?
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
