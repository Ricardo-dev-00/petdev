import { About } from "./_components/About";
import { Feedbacks } from "./_components/Feedbacks";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Feedbacks />
    </main>
  );
}
