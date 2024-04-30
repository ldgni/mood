import About from "../components/About";
import Event from "../components/Event";
import Franchise from "../components/Franchise";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Stores from "../components/Stores";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Stores />
        <Event />
        <About />
        <Franchise />
      </main>
    </>
  );
}
