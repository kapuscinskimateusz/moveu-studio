"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Joanna Kowalczyk",
    rating: 5,
    text: "MoveU całkowicie zmieniło moje podejście do fitnessu. Trenerzy są niesamowici, a programy idealnie dopasowane do moich celów. Nigdy nie czułam się silniejsza!",
    date: "Marzec 2026",
  },
  {
    name: "Paweł Nowicki",
    rating: 5,
    text: "Najlepsze studio treningowe w mieście! Atmosfera jest motywująca, sprzęt najwyższej klasy, a rezultaty mówią same za siebie. Gorąco polecam każdemu, kto serio podchodzi do fitnessu.",
    date: "Luty 2026",
  },
  {
    name: "Ewa Lewandowska",
    rating: 5,
    text: "Miałam obawy przed zapisaniem się na siłownię, ale MoveU sprawiło, że od pierwszego dnia czułam się mile widziana. Zajęcia grupowe są zabawne i wymagające, a w zaledwie 3 miesiące zrobiłam niesamowite postępy.",
    date: "Marzec 2026",
  },
  {
    name: "Michał Wiśniewski",
    rating: 5,
    text: "Sesje z trenerem personalnym są warte każdej złotówki. Mój trener naprawdę rozumie moje ciało i popycha mnie do osiągnięcia więcej, niż myślałem, że to możliwe. Pięć gwiazdek!",
    date: "Styczeń 2026",
  },
  {
    name: "Aleksandra Tomczak",
    rating: 5,
    text: "Niesamowite doświadczenie od początku do końca. Obiekt jest nieskazitelny, personel przyjazny, a widziałam niesamowite rezultaty w mojej sile i wytrzymałości.",
    date: "Luty 2026",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Co mówią nasi klienci
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prawdziwe rezultaty od prawdziwych ludzi, którzy zaufali nam swoją przygodę z fitnessem
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden py-4 -my-4 px-4 -mx-4" ref={emblaRef}>
            <div className="flex -ml-6">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_85%] md:flex-[0_0_50%] min-w-0 pl-6">
                  <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow relative">
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-accent/30" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 text-base md:text-lg leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p className="font-bold text-primary">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-accent hover:bg-accent/80 text-accent-foreground p-3 rounded-full shadow-lg transition-all"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-accent hover:bg-accent/80 text-accent-foreground p-3 rounded-full shadow-lg transition-all"
            aria-label="Następna opinia"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
