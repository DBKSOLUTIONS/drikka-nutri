"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, COPY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--light)] via-white to-[var(--secondary)]/30">
      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <p className="text-sm font-medium tracking-wide text-[var(--dark)]">
            {COPY.heroMicrocopy}
          </p>
          <h1 className="text-4xl leading-tight text-[var(--dark)] md:text-5xl">
            {COPY.heroTitle}
          </h1>
          <p className="max-w-xl text-lg text-[var(--muted-foreground)]">
            {COPY.heroSubtitle}
          </p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "h-12 rounded-full bg-[var(--primary)] px-7 text-base font-semibold text-white transition-transform duration-200 hover:scale-105 hover:bg-[var(--dark)]"
            )}
          >
            Agendar consulta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
            <Image
              src="/images/hero/hero-visual.svg"
              alt="Consulta nutricional com foco em saude e bem-estar"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
