import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />

        <section id="offer" className="h-24" aria-hidden="true" />
        <section id="trainers" className="h-24" aria-hidden="true" />
        <section id="reviews" className="h-24" aria-hidden="true" />
        <section id="blog" className="h-24" aria-hidden="true" />
        <section id="contact" className="h-24" aria-hidden="true" />
      </main>
    </>
  );
}
