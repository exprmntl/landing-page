export const projects = [
  {
    id: "orb-ui",
    number: "01",
    name: "Orb UI",
    category: "Developer tools",
    format: "OPEN SOURCE / REACT",
    headline: "Give your voice agent a face.",
    description:
      "Expressive components for voice agents. Connect your provider and give every conversation a visible presence.",
    shortDescription: "An interface for the other side of a conversation.",
    question: "What should a conversation look like?",
    story:
      "Voice agents need an interface, too. Orb UI brings listening, thinking, and speaking into view through a set of expressive React components.",
    href: "https://orb-ui.com/",
    action: "Explore Orb UI",
    image: "/marketing/projects/orb-ui.webp",
    alt: "Orb UI’s live demo with a blue cloud orb and voice theme controls",
    domain: "orb-ui.com",
  },
  {
    id: "typechinese",
    number: "02",
    name: "TypeChinese",
    category: "Everyday tools",
    format: "LEARNING / WEB APP",
    headline: "Make Chinese part of your everyday.",
    description:
      "Practice Chinese typing with real passages, vocabulary, and character lists. Find your rhythm, one character at a time.",
    shortDescription: "A little practice. One character at a time.",
    question: "Can a small daily practice take you further?",
    story:
      "TypeChinese turns Chinese typing into a practice you can return to. Choose your level and script, type a passage, and learn from the characters that slow you down.",
    href: "https://typechinese.io/",
    action: "Try TypeChinese",
    image: "/marketing/projects/typechinese.webp",
    alt: "TypeChinese’s HSK vocabulary practice with Chinese characters, pinyin hints, and a typing field",
    domain: "typechinese.io",
  },
  {
    id: "badminton",
    number: "03",
    name: "badminton.fyi",
    category: "Everyday tools",
    format: "SPORT / DATABASE",
    headline: "Less searching. More playing.",
    description:
      "Find your way through the world of badminton rackets. Compare specs, prices, and popularity in one searchable place.",
    shortDescription: "Find the racket that makes sense for you.",
    question: "What if finding a racket were easier?",
    story:
      "An equipment rabbit hole, made easier to navigate. badminton.fyi brings racket specs, prices, and popularity together so players can make their own comparisons.",
    href: "https://badminton.fyi/",
    action: "Find a racket",
    image: "/marketing/projects/badminton.webp",
    detailImage: "/marketing/projects/badminton-detail.webp",
    alt: "badminton.fyi’s searchable racket table with price, weight, balance, and stiffness filters",
    detailAlt:
      "A badminton.fyi racket profile showing the Yonex ASTROX 100ZZ and its specifications",
    domain: "badminton.fyi",
  },
] as const;

export type Project = (typeof projects)[number];
