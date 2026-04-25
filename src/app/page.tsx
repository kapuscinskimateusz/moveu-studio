import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { Offer } from "@/components/sections/offer";
import { Trainers } from "@/components/sections/trainers";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <Offer />
        <Trainers />
        <section id="reviews" className="h-24" aria-hidden="true" />
        <section id="blog" className="h-24" aria-hidden="true" />
        <section id="contact" className="h-24" aria-hidden="true" />
      </main>
    </>
  );
}
