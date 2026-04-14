import Link from "next/link";

import { CONTACT, GOOGLE_REVIEWS_DISPLAY } from "@/lib/constants";
import { Star } from "lucide-react";

function StarRow({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.round(rating));

  return (
    <div className="flex items-center gap-1" aria-label={`Nota ${rating.toFixed(1)} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < filled ? "fill-amber-400 text-amber-400" : "fill-transparent text-amber-400/35"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function GoogleReviewsStrip() {
  const mapsHref =
    CONTACT.googleMapsUrl?.trim() ||
    "https://www.google.com/search?q=Adriana+Barroso+nutricionista+Belo+Horizonte";

  const { rating, reviewCount, description } = GOOGLE_REVIEWS_DISPLAY;

  return (
    <section className="relative overflow-hidden bg-[var(--dark)] py-12 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--primary) 0, transparent 45%), radial-gradient(circle at 80% 60%, var(--secondary) 0, transparent 42%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Google</p>
          <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {rating.toFixed(1)}{" "}
            <span className="text-lg font-normal text-white/80">
              ({reviewCount} {reviewCount === 1 ? "avaliação" : "avaliações"})
            </span>
          </p>
          <StarRow rating={rating} />
        </div>
        <div className="max-w-md text-sm leading-relaxed text-white/85">
          <p>{description}</p>
          <Link
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark)]"
          >
            Ver no Google
          </Link>
        </div>
      </div>
    </section>
  );
}
