"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, COPY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--light)] via-white to-[var(--secondary)]/30">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[var(--primary)]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full bg-[var(--secondary)]/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 space-y-6"
        >
          <p className="text-sm font-medium tracking-wide text-[var(--dark)]">
            {COPY.heroMicrocopy}
          </p>
          <h1 className="text-4xl leading-tight tracking-tight text-[var(--dark)] md:text-5xl">
            {COPY.heroTitle}
          </h1>
          <p className="max-w-xl text-lg text-[var(--muted-foreground)]">
            {COPY.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/50 px-4 py-2 text-sm font-medium text-[var(--dark)] shadow-sm backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:bg-white/70"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
              {COPY.heroTrustGoogle}
            </a>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/40 px-4 py-2 text-sm font-medium text-[var(--dark)] backdrop-blur-sm">
              {COPY.heroTrustPatients}
            </span>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "h-12 rounded-full bg-[var(--primary)] px-7 text-base font-semibold text-white transition duration-200 hover:scale-105 hover:bg-[var(--dark)]"
            )}
          >
            Agendar consulta
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="flex-1"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/30 shadow-xl shadow-[var(--dark)]/10 ring-1 ring-white/40 backdrop-blur-sm">
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
