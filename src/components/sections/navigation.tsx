"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "hero", label: "Strona główna" },
  { id: "offer", label: "Nasze programy" },
  { id: "trainers", label: "Trenerzy" },
  { id: "reviews", label: "Opinie" },
  { id: "blog", label: "Blog" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold tracking-tight text-primary"
          aria-label="Przejdź do sekcji głównej"
        >
          MoveU Studio
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Nawigacja główna">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kontakt
          </button>
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-md px-2 py-2 text-left text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 rounded-lg bg-primary px-4 py-2.5 text-left text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Kontakt
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
