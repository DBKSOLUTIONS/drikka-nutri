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
    <section className="border-t border-[var(--border)] bg-[var(--light)] py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl text-[var(--dark)] md:text-4xl">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.08 }}
              >
                <Card className="h-full rounded-2xl border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--light)] text-[var(--dark)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-2xl text-[var(--dark)]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[var(--muted-foreground)]">
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
