import Link from "next/link";

import { CONTACT, COPY } from "@/lib/constants";
import { getGooglePlaceReviews } from "@/lib/google-reviews";
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

export async function GoogleReviewsStrip() {
  const data = await getGooglePlaceReviews();
  const mapsHref =
    CONTACT.googleMapsUrl?.trim() ||
    "https://www.google.com/search?q=Adriana+Barroso+nutricionista+Belo+Horizonte";

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
        {data ? (
          <>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Google
              </p>
              <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {data.rating.toFixed(1)}{" "}
                <span className="text-lg font-normal text-white/80">
                  ({data.userRatingsTotal}{" "}
                  {data.userRatingsTotal === 1 ? "avaliacao" : "avaliacoes"})
                </span>
              </p>
              <StarRow rating={data.rating} />
            </div>
            <div className="max-w-md text-sm leading-relaxed text-white/85">
              <p>
                Pacientes avaliam o atendimento no Google. Veja comentarios reais ou fale direto com
                a Adriana pelo WhatsApp.
              </p>
              <Link
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver no Google
              </Link>
            </div>
          </>
        ) : (
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Prova social
              </p>
              <p className="mt-2 max-w-xl text-lg text-white/90">{COPY.googleReviewsTeaser}</p>
            </div>
            <Link
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver no Google
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
