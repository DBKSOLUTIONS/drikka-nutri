export const CONTACT = {
  whatsapp:
    "https://wa.me/5531986510027?text=Ol%C3%A1%20Adriana,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.",
  phone: "(31) 98651-0027",
  instagram: "@adrianabarrosonutri",
  address: "Rua Célio Cautiero, 15 - Califórnia - Belo Horizonte",
  crn: "CRN 30783/P",
  /** Perfil / compartilhamento Google (avaliações). Link fixo — sem API. */
  googleMapsUrl: "https://share.google/Iz2qcU6SL9UfNwwMQ",
};

/** Nota e total na faixa "Google" — editar manualmente (sem Places API). */
export const GOOGLE_REVIEWS_DISPLAY: {
  rating: number;
  reviewCount: number;
  description: string;
} = {
  rating: 5.0,
  reviewCount: 100,
  description:
    "Pacientes avaliam o atendimento no Google. Veja comentários reais ou fale direto com a Adriana pelo WhatsApp.",
};

export const COPY = {
  heroTitle: "Transforme sua saúde com acompanhamento nutricional personalizado",
  heroSubtitle: "Atendimento humanizado para resultados reais e duradouros",
  heroMicrocopy:
    "Nutricionista e Fitoterapeuta | Atendimento individualizado em Belo Horizonte",
  heroTrustGoogle: "5.0 no Google",
  heroTrustPatients: "+300 pacientes atendidos",
  aboutEyebrow: "Sobre",
  aboutTitle: "Adriana Barroso, cuidado nutricional com escuta e estrategia",
  aboutDescription:
    "Com uma abordagem acolhedora e baseada em evidência, desenvolvo planos alimentares personalizados para respeitar sua rotina, suas preferencias e seu objetivo de saúde.",
  servicesTitle: "Serviços para sua jornada de saúde",
  servicesDescription:
    "Atendimento individual para resultados consistentes, com foco em equilíbrio, bem-estar e mudanças sustentáveis.",
  benefitsTitle: "Por que escolher o acompanhamento da Adriana",
  benefitsDescription:
    "Cada consulta e pensada para promover evolução continua com estratégias praticas e realistas.",
  testimonialsTitle: "Resultados reais de quem escolheu mudar",
  testimonialsDescription:
    "Relatos de pacientes que encontraram mais leveza, saúde e confiança com acompanhamento profissional.",
  finalCtaTitle: "Você não precisa passar por isso sozinho(a)",
  finalCtaSubtitle: "Comece hoje sua transformação",
  forWhoTitle: "Para quem e esse acompanhamento",
  forWhoDescription:
    "Se você se identifica com alguma dessas situações, o próximo passo pode ser conversar com a Adriana pelo WhatsApp.",
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
      "Rotina apertada, compulsão ou culpa alimentar: estratégias praticas para criar novos hábitos.",
    icon: "utensils",
  },
  {
    title: "Problemas intestinais",
    description:
      "Desconforto, inchaço ou digestão irregular com foco em saúde intestinal e rotina.",
    icon: "activity",
  },
  {
    title: "Baixa energia",
    description:
      "Cansaço, falta de disposição ou sono irregular: nutrição alinhada à sua rotina e metas.",
    icon: "zap",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Emagrecimento Saudável",
    description:
      "Estratégias personalizadas para promover perda de peso com equilíbrio e saúde.",
    icon: "scale",
  },
  {
    title: "Reeducação Alimentar",
    description:
      "Mudanças alimentares sustentáveis para melhorar a sua rotina e qualidade de vida.",
    icon: "apple",
  },
  {
    title: "Fitoterapia",
    description:
      "Recursos naturais aliados ao plano nutricional para potencializar seu tratamento.",
    icon: "leaf",
  },
  {
    title: "Saúde Intestinal",
    description:
      "Cuidado direcionado para restaurar o equilíbrio intestinal e reduzir desconfortos.",
    icon: "heartPulse",
  },
];

export type BenefitItem = {
  headline: string;
  line: string;
};

export const BENEFITS: BenefitItem[] = [
  {
    headline: "Plano alimentar personalizado",
    line: "Montado para sua rotina, gostos e metas — sem fórmulas genéricas.",
  },
  {
    headline: "Acompanhamento contínuo",
    line: "Ajustes reais entre as consultas para manter evolução e constância.",
  },
  {
    headline: "Abordagem natural",
    line: "Fitoterapia e hábitos alinhados ao que seu corpo precisa.",
  },
  {
    headline: "Resultados sustentáveis",
    line: "Mudanças que você consegue manter no longo prazo.",
  },
];

export type TestimonialItem = {
  name: string;
  initials: string;
  text: string;
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Kelly S.",
    initials: "KS",
    text: "Adriana Nutri é maravilhosa!!! Sua atenção, explicações sua forma de tratar cada necessidade do paciente e buscar o que vai ser o melhor. Estou encantada com tamanha competência ... E ansiosa pelos resultados 😍",
  },
  {
    name: "Leticia F.",
    initials: "LF",
    text: "Uma excelente profissional, sempre esclarecendo todas minhas dúvidas e ainda fez um planejamento alimentar fácil, prático e bastante nutritivo, adaptado a minha realidade. Comecei a reeducação alimentar a pouco tempo mais já estou sentindo os benefícios, estou super animada e positiva que logo conseguirei com a ajuda da Adriana chegar ao meu peso ideal comendo saudável.",
  },
  {
    name: "Janaina R.",
    initials: "JR",
    text: "Minha consulta foi um momento terapêutico. A nutricionista Adriana foi atenciosa, soube me ouvir e indicou um plano alimentar que se encaixou perfeitamente em minha rotina. Indico de olhos fechados.",
  },
];
