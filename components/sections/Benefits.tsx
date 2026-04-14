"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { BENEFITS, COPY } from "@/lib/constants";

export function Benefits() {
  return (
    <section className="border-y border-[var(--border)] bg-gradient-to-b from-white via-[var(--light)]/35 to-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="text-3xl text-[var(--dark)] md:text-4xl">
            {COPY.benefitsTitle}
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            {COPY.benefitsDescription}
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
              className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-[var(--foreground)]">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
