import { Suspense } from "react";

import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { ForWho } from "@/components/sections/ForWho";
import { Footer } from "@/components/sections/Footer";
import { GoogleReviewsStrip } from "@/components/sections/GoogleReviewsStrip";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <ForWho />
      <Suspense
        fallback={
          <div
            className="h-28 animate-pulse bg-[var(--dark)]"
            aria-hidden
          />
        }
      >
        <GoogleReviewsStrip />
      </Suspense>
      <Services />
      <Benefits />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </main>
  );
}
