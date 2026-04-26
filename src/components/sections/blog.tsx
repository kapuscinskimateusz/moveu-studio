import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blogPosts";

const featuredPosts = blogPosts.slice(0, 3);

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Najnowsze wpisy na blogu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eksperckie spostrzeżenia, porady treningowe i wskazówki dotyczące zdrowego stylu życia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block"
          >
            Zobacz wszystkie artykuły
          </Link>
        </div>
      </div>
    </section>
  );
}
