"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft, Search } from "lucide-react";
import { blogPosts } from "@/lib/data/blogPosts";
import { Footer } from "@/components/sections/footer";

const categories = ["Wszystkie", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Wszystkie" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-100 bg-linear-to-r from-primary/90 to-primary/70 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1625834317364-b32c140fd360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYmxvZyUyMGhlYWRlciUyMGJhbm5lcnxlbnwxfHx8fDE3NzU1NjU2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080)",
          }}
        />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do strony głównej
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Blog MoveU</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Eksperckie porady, treningi i wszystko, co musisz wiedzieć o fitness
          </p>
        </div>
      </section>

      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nie znaleziono artykułów pasujących do wyszukiwania
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                      >
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
