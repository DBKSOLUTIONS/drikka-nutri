"use client";

import { motion } from "framer-motion";
import { Activity, Heart, UtensilsCrossed, Zap } from "lucide-react";
import type { ComponentType } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COPY, FOR_WHO, type ForWhoItem } from "@/lib/constants";

const iconMap: Record<ForWhoItem["icon"], ComponentType<{ className?: string }>> = {
  heart: Heart,
  utensils: UtensilsCrossed,
  activity: Activity,
  zap: Zap,
};

export function ForWho() {
  return (
    <section
      id="para-quem"
      className="border-y border-[var(--border)] bg-gradient-to-b from-[var(--secondary)]/25 via-white to-[var(--light)]/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl text-[var(--dark)] md:text-4xl">{COPY.forWhoTitle}</h2>
          <p className="mt-4 text-[var(--muted-foreground)]">{COPY.forWhoDescription}</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FOR_WHO.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.06 }}
              >
                <Card className="h-full rounded-2xl border-[var(--border)] bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <CardTitle className="text-xl leading-snug text-[var(--dark)]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[var(--muted-foreground)]">{item.description}</p>
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
