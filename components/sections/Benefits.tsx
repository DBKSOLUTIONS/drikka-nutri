"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { BENEFITS, COPY } from "@/lib/constants";

export function Benefits() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-gradient-to-b from-white via-[var(--light)]/40 to-white py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-[var(--secondary)]/20 to-transparent blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl tracking-tight text-[var(--dark)] md:text-4xl md:leading-tight">
            {COPY.benefitsTitle}
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">{COPY.benefitsDescription}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.06,
              }}
              className="rounded-3xl border border-white/50 bg-white/55 p-8 shadow-lg shadow-[var(--dark)]/5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/70 hover:bg-white/70 hover:shadow-xl"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/15 text-[var(--dark)] ring-1 ring-[var(--primary)]/20">
                  <Check className="h-7 w-7 stroke-[2.5]" aria-hidden />
                </div>
                <div className="min-w-0 space-y-2">
                  <p className="text-lg font-semibold tracking-tight text-[var(--dark)] md:text-xl">
                    {benefit.headline}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
                    {benefit.line}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
