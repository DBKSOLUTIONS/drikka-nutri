"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CONTACT, COPY, TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FiveStars({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-amber-400 text-amber-400 md:h-6 md:w-6"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = TESTIMONIALS.length;

  useEffect(() => {
    if (len === 0) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 6500);
    return () => clearInterval(t);
  }, [len]);

  const current = TESTIMONIALS[index];

  if (len === 0 || !current) {
    return null;
  }

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + len) % len);
  };

  return (
    <section
      aria-label="Depoimentos"
      className="relative overflow-hidden bg-gradient-to-b from-[#243524] via-[var(--dark)] to-[#1a2e1a] py-20"
    >
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[var(--secondary)]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl tracking-tight text-white md:text-4xl">
            {COPY.testimonialsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {COPY.testimonialsDescription}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-white/95 backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:bg-white/15"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
              {COPY.heroTrustGoogle}
            </a>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white/90 backdrop-blur-sm">
              {COPY.heroTrustPatients}
            </span>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="relative overflow-hidden rounded-3xl border border-white/35 bg-white/90 shadow-2xl shadow-black/30 ring-1 ring-white/25 backdrop-blur-md">
                  <span
                    className="pointer-events-none absolute right-4 top-2 select-none text-7xl font-semibold leading-none text-[var(--primary)]/15 md:right-8 md:top-4 md:text-8xl"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <CardContent className="relative z-[1] space-y-6 p-8 md:p-10">
                    <div className="space-y-4">
                      <FiveStars className="justify-start" />
                      <blockquote className="border-l-4 border-[var(--primary)] pl-6 text-xl font-medium leading-relaxed text-[var(--foreground)] md:text-2xl md:leading-snug">
                        {current.text}
                      </blockquote>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-bold tracking-tight text-[var(--dark)] md:text-xl">
                          {current.name}
                        </p>
                        <p className="text-sm font-medium text-[var(--muted-foreground)]">
                          Paciente do consultorio
                        </p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white shadow-md">
                        {current.initials}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition duration-200 hover:scale-105 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/60"
                  )}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition duration-200 hover:scale-105 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
              aria-label="Proximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
