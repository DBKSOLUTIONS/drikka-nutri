"use client";

import { motion } from "framer-motion";
import { Apple, HeartPulse, Leaf, Scale } from "lucide-react";
import type { ComponentType } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COPY, SERVICES, type ServiceItem } from "@/lib/constants";

const iconMap: Record<ServiceItem["icon"], ComponentType<{ className?: string }>> =
  {
    scale: Scale,
    apple: Apple,
    leaf: Leaf,
    heartPulse: HeartPulse,
  };

export function Services() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--light)] py-20">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[var(--primary)]/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl tracking-tight text-[var(--dark)] md:text-4xl md:leading-tight">
            {COPY.servicesTitle}
          </h2>
          <p className="mt-4 text-[var(--muted-foreground)]">
            {COPY.servicesDescription}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.07,
                }}
              >
                <Card
                  className="group h-full rounded-2xl border border-white/40 bg-white/60 shadow-md shadow-[var(--dark)]/5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/60 hover:bg-white/75 hover:shadow-xl hover:shadow-[var(--dark)]/10"
                >
                  <CardHeader className="space-y-5">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/90 to-[var(--light)]/80 text-[var(--dark)] shadow-inner ring-1 ring-white/50 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-10 w-10 stroke-[1.5]" aria-hidden />
                    </div>
                    <CardTitle className="text-xl font-semibold tracking-tight text-[var(--dark)] md:text-2xl md:leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-[var(--muted-foreground)]">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
