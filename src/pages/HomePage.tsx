import About from "../components/About";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Franchise from "../components/Franchise";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Stores from "../components/Stores";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Stores />
        <Event />
        <About />
        <Franchise />
      </main>
      <Footer />
    </>
  );
}
