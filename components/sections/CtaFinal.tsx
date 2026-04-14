"use client";

import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { CONTACT, COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CtaFinal() {
  return (
    <section className="bg-[var(--dark)] py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-6 text-center md:px-8"
      >
        <h2 className="text-3xl text-white md:text-4xl">{COPY.finalCtaTitle}</h2>
        <p className="mt-4 text-lg text-white/80">{COPY.finalCtaSubtitle}</p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "mt-8 inline-flex h-12 rounded-full bg-white px-7 text-base font-semibold text-[var(--dark)] transition-transform duration-200 hover:scale-105 hover:bg-[var(--light)]"
          )}
        >
          Agendar consulta pelo WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
