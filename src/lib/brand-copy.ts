// Shared company language for the homepage, metadata, and brand guide.
export const brandCopy = {
  category: "Software lab",
  headline: "From experimentation to production.",
  introduction:
    "We’re a software lab developing, launching, and growing software products, with experimentation shaping what we build and how we build it.",
  about:
    "Experimental Software develops and operates a portfolio of software products. We take projects from early experimentation through development and launch, then continue improving and growing them in production. Experimentation shapes both the new projects we pursue and the development of what we’ve already released.",
  description:
    "A software lab developing, launching, and growing its own software products. Explore projects from Experimental Software.",
} as const;

export const brandTerminology = [
  { term: "Software lab", use: "The company category." },
  { term: "Projects", use: "The umbrella term for the catalog and its navigation." },
  { term: "Products", use: "Projects released for ongoing use." },
  { term: "Experiments", use: "Projects exploring or testing an idea." },
  { term: "Develop, launch, and grow", use: "The primary description of what we do." },
  {
    term: "Develop and operate",
    use: "A more formal description of ownership and ongoing responsibility.",
  },
] as const;
