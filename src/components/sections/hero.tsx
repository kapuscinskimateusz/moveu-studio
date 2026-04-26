"use client";

import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1771270786606-f5a0e57db762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBzdHVkaW8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ4NjgxODh8MA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral')",
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl md:text-7xl">
          Zmien swoje cialo,
          <br />
          Zmien swoje zycie
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 sm:text-xl md:text-2xl">
          Profesjonalne programy treningowe dostosowane do Twoich celow fitness
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Rozpocznij swoja przygode
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
