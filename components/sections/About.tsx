"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { COPY } from "@/lib/constants";

const HIGHLIGHTS = [
  "Nutricionista + Fitoterapeuta",
  "Atendimento individualizado",
  "Experiencia profissional",
  "Cuidado focado em saúde e bem-estar",
];

export function About() {
  return (
    <section className="border-t border-[var(--border)] bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="order-1"
        >
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
            <Image
              src="/images/about/adriana-about.svg"
              alt="Adriana Barroso em atendimento nutricional"
              width={840}
              height={680}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="order-2 space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            {COPY.aboutEyebrow}
          </p>
          <h2 className="text-3xl leading-tight text-[var(--dark)] md:text-4xl">
            {COPY.aboutTitle}
          </h2>
          <p className="text-base leading-7 text-[var(--muted-foreground)]">
            {COPY.aboutDescription}
          </p>
          <ul className="space-y-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.08 }}
                className="flex items-center gap-3 text-[var(--foreground)]"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
