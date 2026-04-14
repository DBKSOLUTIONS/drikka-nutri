import Image from "next/image";

import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-10 md:px-8">
        <div className="grid gap-6 text-sm text-[var(--muted-foreground)] md:grid-cols-2">
          <div className="space-y-1">
            <p className="text-base font-semibold text-[var(--dark)]">Adriana Barroso</p>
            <p>Nutricionista e Fitoterapeuta</p>
            <p>{CONTACT.crn}</p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center gap-3 text-left transition hover:text-[var(--dark)] md:text-right"
            >
              <Image
                src="/whatsapp.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 opacity-90 transition duration-200 group-hover:scale-105 group-hover:opacity-100"
                aria-hidden
              />
              <span>WhatsApp: {CONTACT.phone}</span>
            </a>
            <a
              href="https://www.instagram.com/adrianabarrosonutri"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex max-w-full items-center gap-3 text-left transition hover:text-[var(--dark)] md:text-right"
            >
              <Image
                src="/instagram.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 opacity-90 transition duration-200 group-hover:scale-105 group-hover:opacity-100"
                aria-hidden
              />
              <span>Instagram: {CONTACT.instagram}</span>
            </a>
            <p className="md:text-right">{CONTACT.address}</p>
          </div>
        </div>

        <p className="mt-10 border-t border-[var(--border)] pt-4 text-center text-xs text-[var(--muted-foreground)]">
          © 2026 Adriana Barroso • Desenvolvido por DKSolutions
        </p>
      </div>
    </footer>
  );
}
