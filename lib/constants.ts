export const CONTACT = {
  whatsapp:
    "https://wa.me/5531986510027?text=Ol%C3%A1%20Adriana,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  phone: "(31) 98651-0027",
  instagram: "@adrianabarrosonutri",
  address: "Rua Célio Cautiero, 15 - Califórnia - Belo Horizonte",
  crn: "CRN 30783/P",
  /** Perfil / compartilhamento Google (avaliações). Link fixo — sem API. */
  googleMapsUrl: "https://share.google/UhvFjt7Ja20LLA66a",
};

export const COPY = {
  heroTitle: "Transforme sua saude com acompanhamento nutricional personalizado",
  heroSubtitle: "Atendimento humanizado para resultados reais e duradouros",
  heroMicrocopy:
    "Nutricionista e Fitoterapeuta | Atendimento individualizado em Belo Horizonte",
  aboutEyebrow: "Sobre",
  aboutTitle: "Adriana Barroso, cuidado nutricional com escuta e estrategia",
  aboutDescription:
    "Com uma abordagem acolhedora e baseada em evidencia, Adriana desenvolve planos alimentares personalizados para respeitar sua rotina, suas preferencias e seu objetivo de saude.",
  servicesTitle: "Servicos para sua jornada de saude",
  servicesDescription:
    "Atendimento individual para resultados consistentes, com foco em equilibrio, bem-estar e mudancas sustentaveis.",
  benefitsTitle: "Por que escolher o acompanhamento da Adriana",
  benefitsDescription:
    "Cada consulta e pensada para promover evolucao continua com estrategias praticas e realistas.",
  testimonialsTitle: "Resultados reais de quem escolheu mudar",
  testimonialsDescription:
    "Relatos de pacientes que encontraram mais leveza, saude e confianca com acompanhamento profissional.",
  finalCtaTitle: "Voce nao precisa passar por isso sozinho(a)",
  finalCtaSubtitle: "Comece hoje sua transformacao",
  forWhoTitle: "Para quem e esse acompanhamento",
  forWhoDescription:
    "Se voce se identifica com alguma dessas situacoes, o proximo passo pode ser conversar com a Adriana pelo WhatsApp.",
  googleReviewsTeaser:
    "Depoimentos e confianca tambem nas avaliacoes do Google.",
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "scale" | "apple" | "leaf" | "heartPulse";
};

export type ForWhoItem = {
  title: string;
  description: string;
  icon: "heart" | "utensils" | "activity" | "zap";
};

export const FOR_WHO: ForWhoItem[] = [
  {
    title: "Quer emagrecer com saúde",
    description:
      "Objetivo de emagrecimento sem radicalismos, com plano alimentar e acompanhamento realista.",
    icon: "heart",
  },
  {
    title: "Tem dificuldade com a dieta",
    description:
      "Rotina apertada, compulsao ou culpa alimentar: estrategias praticas para criar novos habitos.",
    icon: "utensils",
  },
  {
    title: "Problemas intestinais",
    description:
      "Desconforto, inchaço ou digestão irregular com foco em saude intestinal e rotina.",
    icon: "activity",
  },
  {
    title: "Baixa energia",
    description:
      "Cansaco, falta de disposicao ou sono irregular: nutrição alinhada à sua rotina e metas.",
    icon: "zap",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Emagrecimento Saudavel",
    description:
      "Estrategias personalizadas para promover perda de peso com equilibrio e saude.",
    icon: "scale",
  },
  {
    title: "Reeducacao Alimentar",
    description:
      "Mudancas alimentares sustentaveis para melhorar sua rotina e qualidade de vida.",
    icon: "apple",
  },
  {
    title: "Fitoterapia",
    description:
      "Recursos naturais aliados ao plano nutricional para potencializar seu tratamento.",
    icon: "leaf",
  },
  {
    title: "Saude Intestinal",
    description:
      "Cuidado direcionado para restaurar o equilibrio intestinal e reduzir desconfortos.",
    icon: "heartPulse",
  },
];

export const BENEFITS = [
  "Plano alimentar personalizado",
  "Acompanhamento continuo",
  "Abordagem natural",
  "Resultados sustentaveis",
];

export type TestimonialItem = {
  name: string;
  initials: string;
  text: string;
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Marina S.",
    initials: "MS",
    text: "Consegui emagrecer com equilibrio, sem dietas extremas. O acompanhamento foi essencial para manter constancia e resultados.",
  },
  {
    name: "Patricia L.",
    initials: "PL",
    text: "A abordagem foi totalmente personalizada para minha rotina. Hoje tenho mais energia, melhor digestao e uma relacao mais saudavel com a comida.",
  },
  {
    name: "Renata C.",
    initials: "RC",
    text: "Me senti acolhida desde a primeira consulta. Com pequenas mudancas semanais, alcancei progresso real e sustentavel.",
  },
];
