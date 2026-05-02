import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  icons: {
    icon: [{ url: "/ico.png", type: "image/png" }],
    apple: [{ url: "/ico.png", type: "image/png" }],
  },
  title: "Adriana Barroso | Nutricionista e Fitoterapeuta em BH",
  description:
    "Acompanhamento nutricional personalizado com foco em saúde, emagrecimento saudável, reeducação alimentar e fitoterapia em Belo Horizonte.",
  keywords: [
    "nutricionista BH",
    "nutricionista em Belo Horizonte",
    "emagrecimento saudável",
    "reeducação alimentar",
    "fitoterapia",
    "saúde intestinal",
    "acompanhamento nutricional personalizado",
  ],
  openGraph: {
    title: "Adriana Barroso | Nutricionista e Fitoterapeuta em BH",
    description:
      "Atendimento humanizado para resultados reais e duradouros com foco em saúde, equilíbrio e bem-estar.",
    images: ["/images/og/og-image.svg"],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriana Barroso | Nutricionista e Fitoterapeuta em BH",
    description:
      "Acompanhamento nutricional personalizado em Belo Horizonte para emagrecimento saudável e reeducação alimentar.",
    images: ["/images/og/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
