import { About } from "./_components/About";
import { Feedbacks } from "./_components/Feedbacks";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Marcas } from "./_components/Marcas";
import { Services } from "./_components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Feedbacks />
      <Marcas />
      <Footer />
    </main>
  );
}
