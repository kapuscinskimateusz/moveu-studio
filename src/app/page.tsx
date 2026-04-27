import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { Offer } from "@/components/sections/offer";
import { Trainers } from "@/components/sections/trainers";
import { Reviews } from "@/components/sections/reviews";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
