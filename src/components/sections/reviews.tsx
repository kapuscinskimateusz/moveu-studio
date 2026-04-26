"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const reviews = [
  {
    name: "Joanna Kowalczyk",
    rating: 5,
    text: "MoveU calkowicie zmienilo moje podejscie do fitnessu. Trenerzy sa niesamowici, a programy idealnie dopasowane do moich celow. Nigdy nie czulam sie silniejsza!",
    date: "Marzec 2026",
  },
  {
    name: "Pawel Nowicki",
    rating: 5,
    text: "Najlepsze studio treningowe w miescie! Atmosfera jest motywujaca, sprzet najwyzszej klasy, a rezultaty mowia same za siebie. Goraco polecam kazdemu, kto serio podchodzi do fitnessu.",
    date: "Luty 2026",
  },
  {
    name: "Ewa Lewandowska",
    rating: 5,
    text: "Mialam obawy przed zapisaniem sie na silownie, ale MoveU sprawilo, ze od pierwszego dnia czulam sie mile widziana. Zajecia grupowe sa zabawne i wymagajace, a w zaledwie 3 miesiacach zrobilam niesamowite postepy.",
    date: "Marzec 2026",
  },
  {
    name: "Michal Wisniewski",
    rating: 5,
    text: "Sesje z trenerem personalnym sa warte kazdej zlotowki. Moj trener naprawde rozumie moje cialo i popycha mnie do osiagniecia wiecej, niz myslalem, ze to mozliwe. Piec gwiazdek!",
    date: "Styczen 2026",
  },
  {
    name: "Aleksandra Tomczak",
    rating: 5,
    text: "Niesamowite doswiadczenie od poczatku do konca. Obiekt jest nieskazitelny, personel przyjazny, a widzialam niesamowite rezultaty w mojej sile i wytrzymalosci.",
    date: "Luty 2026",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="bg-background py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Co mowia nasi klienci
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Prawdziwe rezultaty od prawdziwych ludzi, ktorzy zaufali nam swoja przygode z fitnessem
          </p>
        </div>

        {/* Karuzela z nakladajacymi sie strzalkami */}
        <div className="flex items-center gap-3">
          {/* Strzalka lewa — tylko desktop */}
          <button
            onClick={scrollPrev}
            aria-label="Poprzednia opinia"
            className="hidden shrink-0 rounded-full bg-accent p-3 text-accent-foreground shadow-lg transition-all hover:bg-accent/80 md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="-mx-2 flex-1 overflow-hidden py-4" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div key={review.name} className="min-w-0 shrink-0 grow-0 basis-[80%] px-2 md:basis-1/2 md:px-4">
                  <article className="relative h-full rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-lg md:p-8">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20 md:top-6 md:right-6 md:h-12 md:w-12" />
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent md:h-5 md:w-5" />
                      ))}
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Strzalka prawa — tylko desktop */}
          <button
            onClick={scrollNext}
            aria-label="Nastepna opinia"
            className="hidden shrink-0 rounded-full bg-accent p-3 text-accent-foreground shadow-lg transition-all hover:bg-accent/80 md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
