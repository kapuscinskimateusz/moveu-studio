export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 kluczowych ćwiczeń na wzmocnienie mięśni brzucha",
    excerpt:
      "Odkryj najskuteczniejsze ćwiczenia na mięśnie brzucha, które odmienią Twoją rutynę treningową i poprawią ogólną kondycję.",
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NzQ4NDY3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "28 marca 2026",
    readTime: "5 min czytania",
    category: "Trening siłowy",
    author: "Anna Kowalska",
  },
  {
    id: "2",
    title: "Nauka stojąca za HIIT: Dlaczego to działa",
    excerpt:
      "Poznaj fizjologiczne korzyści treningu interwałowego o wysokiej intensywności i jak może maksymalizować Twoje rezultaty.",
    image:
      "https://images.unsplash.com/photo-1765728617805-b9f22d64e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXF1aXBtZW50JTIwbW9kZXJuJTIwZ3ltfGVufDF8fHx8MTc3NDg2ODE4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "25 marca 2026",
    readTime: "7 min czytania",
    category: "Nauka treningu",
    author: "Dr Piotr Nowak",
  },
  {
    id: "3",
    title: "Porady żywieniowe dla optymalnej wydajności",
    excerpt:
      "To, co jesz, ma znaczenie. Odkryj nasz ekspercki przewodnik po żywieniu ciała dla lepszych treningów i szybszej regeneracji.",
    image:
      "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3NDgyMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "22 marca 2026",
    readTime: "6 min czytania",
    category: "Żywienie",
    author: "Ewa Lewandowska",
  },
  {
    id: "4",
    title: "Rozciąganie - klucz do lepszej mobilności",
    excerpt:
      "Dowiedz się, dlaczego rozciąganie jest tak ważne i jak prawidłowo je wykonywać, aby zwiększyć swoją gibkość i zapobiec kontuzjom.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJldGNoaW5nJTIweW9nYSUyMGZsZXhpYmlsaXR5fGVufDB8fHx8MTczNTIzNzQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "20 marca 2026",
    readTime: "5 min czytania",
    category: "Regeneracja",
    author: "Michał Wiśniewski",
  },
  {
    id: "5",
    title: "Trening siłowy dla początkujących",
    excerpt:
      "Kompletny przewodnik po rozpoczęciu przygody z treningiem siłowym - od podstaw po pierwszy plan treningowy.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3ZWlnaHRzJTIwYmVnaW5uZXJ8ZW58MHx8fHwxNzM1MjM3NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "18 marca 2026",
    readTime: "8 min czytania",
    category: "Trening siłowy",
    author: "Tomasz Zieliński",
  },
  {
    id: "6",
    title: "Regeneracja - tajemnica długotrwałych wyników",
    excerpt:
      "Poznaj najskuteczniejsze metody regeneracji, które pozwolą Ci trenować efektywniej i unikać przetrenowania.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvdmVyeSUyMHNwb3J0c3xlbnwwfHx8fDE3MzUyMzc0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "15 marca 2026",
    readTime: "6 min czytania",
    category: "Regeneracja",
    author: "Anna Kowalska",
  },
];
