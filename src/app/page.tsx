import { Navigation } from "@/components/sections/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section
          id="hero"
          className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-background px-4"
        >
          <p className="text-center text-lg text-muted-foreground">MoveU Studio - w budowie</p>
        </section>

        <section id="offer" className="h-24" aria-hidden="true" />
        <section id="trainers" className="h-24" aria-hidden="true" />
        <section id="reviews" className="h-24" aria-hidden="true" />
        <section id="blog" className="h-24" aria-hidden="true" />
        <section id="contact" className="h-24" aria-hidden="true" />
      </main>
    </>
  );
}
