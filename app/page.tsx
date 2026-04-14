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
      <GoogleReviewsStrip />
      <Services />
      <Benefits />
      <Testimonials />
      <CtaFinal />
      <Footer />
    </main>
  );
}
