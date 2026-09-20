export type ProjectCategory = "Web" | "iOS" | "Developer tools";

export type CatalogProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  format: string;
  description: string;
  image: string;
  alt: string;
} & (
  | { comingSoon: true; href?: never; domain?: never; newRelease?: never }
  | { comingSoon?: false; href: string; domain: string; newRelease?: boolean }
);

// Display order reflects the catalog, not a ranking or an internal maintenance status.
export const catalog: CatalogProject[] = [
  {
    id: "epsilon",
    name: "Project Epsilon",
    category: "Developer tools",
    format: "API",
    description: "A new API from Experimental Software. Details to come.",
    comingSoon: true,
    image: "/marketing/projects/project-epsilon/cover.webp",
    alt: "Project Epsilon in black type beside a geometric epsilon symbol, with a small acid-yellow accent on white",
  },
  {
    id: "typechinese",
    name: "TypeChinese",
    category: "Web",
    format: "WEB APP",
    description:
      "Build Chinese typing speed with vocabulary and real passages, in Simplified or Traditional Chinese.",
    href: "https://typechinese.io/",
    domain: "typechinese.io",
    image: "/marketing/projects/typechinese-artwork/social/social.png",
    alt: "Type Chinese faster. Build speed. Learn as you go. Ivory keycaps marked 中 and 文 beside a red return key",
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
    image: "/marketing/projects/rxrecall-social.jpg",
    alt: "RxRecall: Top 200 drugs. On your Lock Screen. With Today and Lock Screen previews",
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
    image: "/marketing/projects/orb-ui-artwork/homepage-social.png",
    alt: "Voice agent UI that feels alive: React components for voice agents, beside Orb UI’s cloud orb",
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
    name: "Keyboard Layout Simulator",
    category: "Web",
    format: "WEB TOOL",
    description: "Try QWERTY, Dvorak and Colemak in your browser, with typing practice and optional key hints.",
    href: "https://keyboardlayout.app/",
    domain: "keyboardlayout.app",
    image: "/marketing/projects/keyboard-social.png",
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
    image: "/marketing/extension-artwork/google-flights-currency/social.webp",
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
    image: "/marketing/projects/badminton-artwork/editorial-social.png",
    alt: "Find your next racket: a black-and-white badminton racket close-up beside the message Compare specs. Find your fit.",
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
    image: "/marketing/projects/codex-updater-social.png",
    alt: "Codex Updater with its mint crescent and update-arrow logo and a timeline highlighting the 2–3 a.m. update window",
  },
];
