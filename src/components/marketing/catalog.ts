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
    id: "wavelength",
    name: "Wavelength",
    category: "Web",
    format: "WEB GAME",
    description:
      "Give Jev five clues and find out whether you’re on the same wavelength as AI.",
    href: "https://experimental.software/wavelength",
    domain: "experimental.software",
    newRelease: true,
    image: "/marketing/projects/wavelength.webp",
    alt: "Wavelength’s colorful dial alongside the question: Are you on the same wavelength as AI?",
  },
  {
    id: "keyboard",
    name: "Keyboard Layout Tester",
    category: "Web",
    format: "WEB TOOL",
    description: "Try QWERTY, Dvorak and Colemak with free typing practice. No downloads or keyboard settings to change.",
    href: "https://keyboardlayout.app/",
    domain: "keyboardlayout.app",
    image: "/marketing/projects/keyboard-social.webp",
    alt: "Try a different way to type: QWERTY, Dvorak and Colemak, with ivory, charcoal and orange Q, D and C keycaps",
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
  {
    id: "codex-updater",
    name: "Codex Updater",
    category: "Developer tools",
    format: "macOS UTILITY",
    description:
      "Keep Codex up to date overnight, with scheduled restarts that wait until your tasks are finished.",
    href: "https://github.com/exprmntl/codex-updater",
    domain: "GitHub",
    image: "/marketing/projects/codex-updater-schedule.webp",
    alt: "Codex Updater with its mint crescent and update-arrow logo and a timeline highlighting the 2–3 a.m. update window",
  },
];
