"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Imię i nazwisko jest wymagane")
    .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
  email: z.string().trim().min(1, "Adres email jest wymagany").email("Podaj poprawny adres email"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?[\d\s\-]{9,15})?$/, "Podaj poprawny numer telefonu")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Wiadomość jest wymagana")
    .min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    label: "Lokalizacja",
    value: (
      <>
        ul. Fitness 123, Centrum
        <br />
        Warszawa, 00-001
      </>
    ),
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@moveu.pl",
  },
];

const openingHours = [
  { days: "Poniedziałek - Piątek", hours: "6:00 - 22:00" },
  { days: "Sobota", hours: "8:00 - 20:00" },
  { days: "Niedziela", hours: "9:00 - 18:00" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // TODO: Podpiac wysylke do backendu lub uslugi email.
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skontaktuj sie z nami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gotowy, aby rozpoczac swoja przygode z fitnessem? Skontaktuj sie z nami juz dzis, aby
            umowic sie na bezplatna konsultacje.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-card p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Informacje kontaktowe</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">{label}</p>
                      <p className="text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/20 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Godziny otwarcia studia</h3>
              <div className="space-y-2 text-muted-foreground">
                {openingHours.map(({ days, hours }) => (
                  <div key={days} className="flex justify-between">
                    <span>{days}</span>
                    <span className="font-bold text-foreground">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-6">Wyslij nam wiadomosc</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <p className="text-xl font-bold text-primary">Dziekujemy za wiadomosc!</p>
                <p className="text-muted-foreground">Wkrotce sie z Toba skontaktujemy.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-muted-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Wyslij kolejna wiadomosc
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2 text-sm font-medium">
                    Imie i nazwisko
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jan Kowalski"
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2 text-sm font-medium">
                    Adres email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jan@example.com"
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2 text-sm font-medium">
                    Numer telefonu
                    <span className="text-muted-foreground font-normal"> (opcjonalnie)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-foreground mb-2 text-sm font-medium"
                  >
                    Wiadomosc
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Opowiedz nam o swoich celach fitness..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  Wyslij wiadomosc
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
