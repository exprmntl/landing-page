export type ProjectCategory = "Web" | "iOS" | "Developer tools";

export type CatalogProject = {
  id: string;
  name: string;
  category: ProjectCategory;
  format: string;
  description: string;
  href: string;
  domain: string;
  placement: "main" | "additional";
  newRelease?: boolean;
  image?: string;
  alt?: string;
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
    placement: "main",
    image: "/marketing/projects/typechinese.webp",
    alt: "TypeChinese’s Chinese typing practice screen with vocabulary and pinyin hints",
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
    placement: "main",
    newRelease: true,
    image: "/marketing/projects/rxrecall.webp",
    alt: "RxRecall’s product page showing its Today screen and a Lock Screen widget preview",
  },
  {
    id: "orb-ui",
    name: "Orb UI",
    category: "Developer tools",
    format: "OPEN SOURCE / REACT",
    description:
      "An open-source React component library for voice agents, with expressive visuals and provider integrations.",
    href: "https://orb-ui.com/",
    domain: "orb-ui.com",
    placement: "main",
    image: "/marketing/projects/orb-ui.webp",
    alt: "Orb UI’s live voice demo with an animated cloud orb and theme controls",
  },
  {
    id: "keyboard",
    name: "Keyboard Layout Tester",
    category: "Web",
    format: "WEB TOOL",
    description: "Test and compare keyboard layouts, including Dvorak and Colemak.",
    href: "https://keyboard.experimental.software/",
    domain: "keyboard.experimental.software",
    placement: "additional",
  },
  {
    id: "flights-currency",
    name: "Google Flights Currency",
    category: "Web",
    format: "BROWSER EXTENSION",
    description: "View flight prices in local currency on Google Flights.",
    href: "https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo",
    domain: "Chrome Web Store",
    placement: "additional",
  },
  {
    id: "badminton",
    name: "badminton.fyi",
    category: "Web",
    format: "LEGACY / DATABASE",
    description:
      "A badminton racket database for comparing specifications, prices, and popularity.",
    href: "https://badminton.fyi/",
    domain: "badminton.fyi",
    placement: "additional",
  },
];
