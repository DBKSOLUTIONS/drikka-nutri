"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { COPY, TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl text-white md:text-4xl">{COPY.testimonialsTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {COPY.testimonialsDescription}
          </p>
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
              <Card className="relative overflow-hidden rounded-3xl border-2 border-white/10 bg-white shadow-2xl shadow-black/25 ring-1 ring-white/20">
                <span
                  className="pointer-events-none absolute left-4 top-4 font-[family-name:var(--font-heading)] text-7xl leading-none text-[var(--primary)]/20 md:left-6 md:top-6 md:text-8xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <CardContent className="space-y-6 p-8 md:p-10">
                  <blockquote className="relative z-[1] border-l-4 border-[var(--primary)] pl-6 [font-family:var(--font-heading),serif] text-xl leading-relaxed text-[var(--foreground)] md:text-2xl md:leading-snug">
                    {current.text}
                  </blockquote>
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
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
