import { Dumbbell, Heart, Users, Zap } from "lucide-react";
import Image from "next/image";

type Program = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  image: string;
};

const programs: Program[] = [
  {
    icon: Dumbbell,
    title: "Trening silowy",
    description:
      "Buduj mase miesniowa i zwiekszaj sile dzieki naszym spersonalizowanym programom treningowym.",
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NzQ4NDY3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Heart,
    title: "Cardio & Wellness",
    description:
      "Popraw kondycje sercowo-naczyniowa i ogolne samopoczucie dzieki dynamicznym treningom.",
    image:
      "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXF1aXBtZW50JTIwbW9kZXJuJTIwZ3ltfGVufDF8fHx8MTc3NDg2ODE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Zap,
    title: "HIIT i trening funkcjonalny",
    description:
      "Trening interwalowy o wysokiej intensywnosci dla maksymalnych rezultatow w minimalnym czasie.",
    image:
      "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3NDgyMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Users,
    title: "Zajecia grupowe",
    description:
      "Dolacz do naszych energetycznych zajec grupowych i trenuj ze spolecznoscia, ktora Cie motywuje.",
    image:
      "https://images.unsplash.com/photo-1771270786606-f5a0e57db762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBzdHVkaW8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ4NjgxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Offer() {
  return (
    <section id="offer" className="bg-background py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Nasze programy treningowe
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Wybierz sposrod naszej szerokiej gamy programow zaprojektowanych do Twoich unikalnych
            celow fitness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article
                key={program.title}
                className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/35 transition-colors group-hover:bg-primary/50" />
                  <div className="absolute top-4 left-4 rounded-lg bg-white/90 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-primary">{program.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{program.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
