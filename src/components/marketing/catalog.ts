export type ProjectCategory = "Web" | "iOS" | "Developer tools";

export type CatalogProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  format: string;
  description: string;
  href: string;
  domain: string;
  newRelease?: boolean;
  image: string;
  alt: string;
};

// Display order reflects the catalog, not a ranking or an internal maintenance status.
export const catalog: CatalogProject[] = [
  {
    id: "typechinese",
    name: "TypeChinese",
    category: "Web",
    format: "WEB APP",
    description:
      "Chinese typing practice with vocabulary, real passages, and support for Simplified and Traditional Chinese.",
    href: "https://typechinese.io/",
    domain: "typechinese.io",
    image: "/marketing/projects/typechinese-home.webp",
    alt: "TypeChinese’s landing page introducing Chinese typing practice",
  },
  {
    id: "rxrecall",
    name: "RxRecall",
    category: "iOS",
    format: "iOS APP",
    description:
      "An iOS study app for pharmacy students, with drug-name review on the Lock Screen and a searchable drug library.",
    href: "https://rx-recall.com/",
    domain: "rx-recall.com",
    newRelease: true,
    image: "/marketing/projects/rxrecall.webp",
    alt: "RxRecall’s product page showing its Today screen and a Lock Screen widget preview",
  },
  {
    id: "orb-ui",
    name: "Orb UI",
    category: "Developer tools",
    format: "OPEN SOURCE",
    description:
      "An open-source React component library for voice agents, with expressive visuals and provider integrations.",
    href: "https://orb-ui.com/",
    domain: "orb-ui.com",
    image: "/marketing/projects/orb-ui.webp",
    alt: "Orb UI’s live voice demo with an animated cloud orb and theme controls",
  },
  {
    id: "keyboard",
    name: "Keyboard Layout Tester",
    category: "Web",
    format: "WEB TOOL",
    description: "Test and compare keyboard layouts, including Dvorak and Colemak.",
    href: "https://keyboardlayout.app/",
    domain: "keyboardlayout.app",
    image: "/marketing/projects/keyboard-clean.webp",
    alt: "Keyboard Layout Tester with layout choices, typing practice, and an on-screen keyboard",
  },
  {
    id: "flights-currency",
    name: "Flight Currency",
    category: "Web",
    format: "BROWSER EXTENSION",
    description: "Keep Google Flights prices in your preferred currency, wherever you search.",
    href: "https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo",
    domain: "Chrome Web Store",
    image: "/marketing/projects/flights-currency-refresh.webp",
    alt: "Flight Currency for Google Flights with GBP, EUR, and USD boarding passes and the message Prices in your currency, wherever you search",
  },
  {
    id: "badminton",
    name: "badminton.fyi",
    category: "Web",
    format: "DATABASE",
    description:
      "A badminton racket database for comparing specifications, prices, and popularity.",
    href: "https://badminton.fyi/",
    domain: "badminton.fyi",
    image: "/marketing/projects/badminton-detail.webp",
    alt: "A badminton.fyi racket profile with specifications and price information",
  },
];
