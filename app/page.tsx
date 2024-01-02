
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section>
        <MainBody />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
