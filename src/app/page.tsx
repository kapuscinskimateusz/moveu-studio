import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { Offer } from "@/components/sections/offer";
import { Trainers } from "@/components/sections/trainers";
import { Reviews } from "@/components/sections/reviews";
import { Blog } from "@/components/sections/blog";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <Offer />
        <Trainers />
        <Reviews />
        <Blog />
        <section id="contact" className="h-24" aria-hidden="true" />
      </main>
    </>
  );
}
