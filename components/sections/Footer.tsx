import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 text-sm text-[var(--muted-foreground)] md:grid-cols-2 md:px-8">
        <div className="space-y-1">
          <p className="text-base font-semibold text-[var(--dark)]">Adriana Barroso</p>
          <p>Nutricionista e Fitoterapeuta</p>
          <p>{CONTACT.crn}</p>
        </div>

        <div className="space-y-1 md:text-right">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-[var(--dark)]"
          >
            WhatsApp: {CONTACT.phone}
          </a>
          <a
            href="https://www.instagram.com/adrianabarrosonutri"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-[var(--dark)]"
          >
            Instagram: {CONTACT.instagram}
          </a>
          <p>{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  );
}
