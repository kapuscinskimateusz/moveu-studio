import { Award } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

type Trainer = {
  name: string;
  role: string;
  image: string;
  certifications: string;
  experience: string;
};

const trainers: Trainer[] = [
  {
    name: "Anna Kowalska",
    role: "Trenerka silowa i kondycyjna",
    image:
      "https://images.unsplash.com/photo-1761034278072-baa90a7d28d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDg2ODE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    certifications: "NASM-CPT, CSCS",
    experience: "8 lat",
  },
  {
    name: "Marek Nowak",
    role: "Specjalista HIIT i treningu funkcjonalnego",
    image:
      "https://images.unsplash.com/photo-1704223523232-526f6fab30a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcGVyc29uYWwlMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODY4MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    certifications: "ACE-CPT, TRX Certified",
    experience: "6 lat",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="bg-muted py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Poznaj naszych trenerow ekspertow
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Certyfikowani profesjonaliscie oddani pomocy w osiagnieciu szczytowej formy
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image src={trainer.image} alt={trainer.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-1 text-2xl font-bold">{trainer.name}</h3>
                  <p className="text-white/90">{trainer.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">{trainer.certifications}</span>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  {trainer.experience} doswiadczenia
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-lg bg-muted p-2 text-foreground transition-colors hover:bg-accent"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="rounded-lg bg-muted p-2 text-foreground transition-colors hover:bg-accent"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
