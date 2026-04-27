import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MoveU</h3>
            <p className="text-primary-foreground/80">
              Zmień swoje ciało i umysł dzięki naszym profesjonalnym programom treningowym.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="/#hero" className="hover:text-accent transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/#offer" className="hover:text-accent transition-colors">
                  Programy
                </Link>
              </li>
              <li>
                <Link href="/#trainers" className="hover:text-accent transition-colors">
                  Trenerzy
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>ul. Fitness 123</li>
              <li>Warszawa, 00-001</li>
              <li>+48 123 456 789</li>
              <li>kontakt@moveu.pl</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Śledź nas</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:kontakt@moveu.pl"
                aria-label="Email"
                className="p-2 bg-primary-foreground/10 hover:bg-accent rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2026 MoveU Studio Treningowe. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
