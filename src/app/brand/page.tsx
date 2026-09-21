import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import { ComponentPlayground } from "@/components/brand/ComponentPlayground";
import { whiteRoomFonts } from "@/styles/brand-fonts";
import { brandCopy, brandTerminology } from "@/lib/brand-copy";
import "./brand.css";

export const metadata: Metadata = {
  title: "Brand guide",
  description:
    "The Experimental Software identity. Original Outlier, White Room, and the foundations for everything we make.",
  alternates: { canonical: "https://experimental.software/brand" },
};

const sections = [
  "Identity",
  "Typography",
  "Color",
  "Components",
  "In practice",
  "Assets",
  "Wallpapers",
  "Language",
];

function SectionTitle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="brand-section-heading">
      <div>
        <span className="brand-eyebrow">{number} / FOUNDATION</span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function BrandPage() {
  return (
    <div className={`${whiteRoomFonts} brand-theme brand-guide`} id="top">
      <a className="brand-skip" href="#brand-content">
        Skip to the guide
      </a>
      <header className="brand-header">
        <Link href="/" className="brand-lockup" aria-label="Experimental Software home">
          <Outlier />
          <span>
            experimental
            <br />
            software
          </span>
        </Link>
        <span className="brand-header-title">IDENTITY & DESIGN SYSTEM</span>
        <a className="brand-header-link" href="#assets">
          Get the assets <ArrowDown size={15} />
        </a>
      </header>
      <div className="brand-layout">
        <aside className="brand-sidebar">
          <span className="brand-eyebrow">THE REFERENCE</span>
          <nav aria-label="Brand guide sections">
            {sections.map((section, index) => (
              <a href={`#${section.toLowerCase().replaceAll(" ", "-")}`} key={section}>
                <span>0{index + 1}</span>
                {section}
              </a>
            ))}
          </nav>
          <div className="brand-sidebar-note">
            <span className="brand-status-dot" />
            WHITE ROOM
            <br />
            <span>Version 1.1 / Sep 2026</span>
          </div>
        </aside>
        <main className="brand-content" id="brand-content">
          <div className="brand-intro">
            <div>
              <div className="brand-eyebrow">
                <span className="brand-status-dot" />
                EXPERIMENTAL SOFTWARE
              </div>
              <h1>
                Room to
                <br />
                experiment.
              </h1>
            </div>
            <div className="brand-intro-copy">
              <span className="brand-eyebrow">THE BRAND GUIDE / 1.1</span>
              <p>
                A clear frame for curious work.
                <br />
                Our identity, the rules behind it, and the pieces we build with.
              </p>
              <a href="#identity">
                Explore the system <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <section id="identity" className="brand-section">
            <SectionTitle
              number="01"
              title="A little out of line."
              description="Three squares establish a pattern. One circle steps outside it. A small departure with a clear point of view."
            />
            <div className="brand-identity-board">
              <div className="brand-symbol-specimen">
                <Outlier />
                <div className="brand-specimen-caption">
                  <span>01.1 / ORIGINAL OUTLIER</span>
                  <span>U0</span>
                </div>
              </div>
              <div className="brand-wordmark-specimen">
                <div className="brand-large-lockup">
                  <Outlier />
                  <span>
                    experimental
                    <br />
                    software
                  </span>
                </div>
                <div className="brand-specimen-caption">
                  <span>01.2 / PRIMARY LOCKUP</span>
                  <span>MEDIUM / 500</span>
                </div>
              </div>
            </div>
            <div className="brand-notes-grid">
              <div>
                <h3>Keep the departure.</h3>
                <p>
                  The circle stays slightly up and to the right. Its position is part of
                  the mark. Always use the original artwork.
                </p>
              </div>
              <div>
                <h3>Give it room.</h3>
                <p>
                  Keep at least half a square’s width clear around the visible mark.
                  Start at 24px for interface use.
                </p>
              </div>
              <div>
                <h3>Keep it simple.</h3>
                <p>
                  Use ink on light surfaces or white on ink. Preserve the proportions.
                  No gradients, extra shapes, or effects.
                </p>
              </div>
            </div>
          </section>

          <section id="typography" className="brand-section">
            <SectionTitle
              number="02"
              title="One voice. Two fonts."
              description="General Sans does the speaking. Meslo LG S adds the small, precise details. Hierarchy comes from scale and spacing."
            />
            <div className="brand-type-main">
              <div className="brand-type-heading">
                <span className="brand-eyebrow">PRIMARY / GENERAL SANS</span>
                <span className="brand-eyebrow">REGULAR 400 · MEDIUM 500</span>
              </div>
              <div className="brand-type-alphabet">Aa Bb Cc</div>
              <p className="brand-type-sentence">Software, under exploration.</p>
            </div>
            <div className="brand-type-roles">
              <div>
                <span className="brand-eyebrow">HEADLINES / REGULAR</span>
                <h3 className="brand-type-headline">
                  Make room
                  <br />
                  for what’s next.
                </h3>
                <p>
                  Large type. Room to breathe. Regular weight.
                  <br />
                  Display tracking: −0.03em.
                </p>
              </div>
              <div>
                <span className="brand-eyebrow">BODY / REGULAR</span>
                <p className="brand-type-body">{brandCopy.introduction}</p>
                <p>
                  16px / 1.55 line height. Normal spacing.
                  <br />
                  The wordmark uses Medium (500), tracking −0.045em.
                </p>
              </div>
            </div>
            <div className="brand-mono-specimen">
              <div>
                <span className="brand-eyebrow">SUPPORTING / MESLO LG S REGULAR</span>
                <p>
                  WORK / NOTES / ABOUT
                  <br />
                  PROTOTYPE · v0.1.0
                  <br />
                  npm install orb-ui
                </p>
              </div>
              <p>
                Labels, navigation, versions, dates, and commands. Use the technical
                voice in small doses.
              </p>
            </div>
            <p className="brand-footnote">
              Interface labels use 14px; secondary metadata uses 12px. This page loads
              General Sans and Meslo LG S as webfonts. Use Regular (400) for body text
              and labels, and Medium (500) for the wordmark. See the{" "}
              <a href="/brand/font-notes.txt">font setup and license notes</a> when
              adopting these fonts in another project.
            </p>
          </section>

          <section id="color" className="brand-section">
            <SectionTitle
              number="03"
              title="White, with a signal."
              description="White makes space. Ink gives structure. Acid yellow marks the one thing that deserves your attention."
            />
            <div className="brand-palette">
              {[
                { name: "Paper", hex: "#FFFFFF", role: "Primary background" },
                { name: "Ink", hex: "#171715", role: "Text & the mark" },
                { name: "Acid", hex: "#D8EF45", role: "Primary action" },
                { name: "Surface", hex: "#F3F5EF", role: "Secondary background" },
                { name: "Muted", hex: "#62665E", role: "Supporting text" },
                { name: "Rule", hex: "#DDE1D7", role: "Dividers" },
              ].map((color) => (
                <div className="brand-swatch" key={color.name}>
                  <div
                    className="brand-swatch-color"
                    style={{ background: color.hex }}
                  />
                  <div>
                    <h3>{color.name}</h3>
                    <code>{color.hex}</code>
                    <p>{color.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="brand-footnote">
              Set ink text on acid yellow. Rules are subtle separators; interactive
              fields use a stronger border. Never use color alone to communicate state.
            </p>
          </section>

          <section id="components" className="brand-section">
            <SectionTitle
              number="04"
              title="Familiar pieces. Our character."
              description="Accessible component behavior, a restrained visual layer, and room for each product to be itself."
            />
            <div className="brand-stack-note">
              <span className="brand-eyebrow">THE FOUNDATION</span>
              <p>shadcn/ui + Base UI + White Room</p>
              <span>
                Square corners, clear focus states, generous spacing, and one accent.
              </span>
            </div>
            <ComponentPlayground />
          </section>

          <section id="in-practice" className="brand-section">
            <SectionTitle
              number="05"
              title="A family, not a uniform."
              description="Experimental Software provides the frame. Named products keep their own name, imagery, and personality."
            />
            <div className="brand-application">
              <div className="brand-project-cover">
                <div className="brand-lockup">
                  <Outlier />
                  <span>experimental software</span>
                </div>
                <span className="brand-eyebrow">DEVELOPER TOOLS</span>
                <h3>orb-ui</h3>
                <p>Voice agent UI that feels alive.</p>
                <div className="brand-cover-footer">
                  <code>npm install orb-ui</code>
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="brand-application-notes">
                <span className="brand-eyebrow">GITHUB / REPOSITORY COVER</span>
                <h3>Lead with the work.</h3>
                <p>
                  Let the product name do the talking. Keep the parent endorsement small
                  and consistent.
                </p>
                <p>
                  Use real software captures and outputs. Describe what it does, how to
                  try it, and how mature it is.
                </p>
                <a href="https://github.com/exprmntl/orb-ui">
                  View Orb UI <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section id="assets" className="brand-section">
            <SectionTitle
              number="06"
              title="Start with the originals."
              description="The complete kit: original symbols, outlined wordmarks, avatars, share images, wallpapers, profile banners, and the styling foundation. Ready to use in light and dark settings."
            />
            <a
              className="brand-kit-download"
              href="/brand/downloads/experimental-software-brand-kit.zip"
              download
            >
              <div>
                <h3>Download the complete brand kit</h3>
                <span className="brand-eyebrow">
                  ZIP · SVG, PNG, TEMPLATES & TOKENS · V1.1
                </span>
              </div>
              <Download size={24} aria-hidden="true" />
            </a>
            <div className="brand-asset-previews" aria-label="Included brand assets">
              <div>
                <Image
                  src="/brand/downloads/logos/stacked-ink.svg"
                  alt="Primary stacked Experimental Software lockup"
                  width={500}
                  height={144}
                />
                <span className="brand-eyebrow">PRIMARY LOCKUP / OUTLINED SVG</span>
              </div>
              <div className="brand-asset-dark">
                <Image
                  src="/brand/downloads/logos/stacked-white.svg"
                  alt="White Experimental Software lockup on ink"
                  width={500}
                  height={144}
                />
                <span className="brand-eyebrow">REVERSE / FOR DARK SURFACES</span>
              </div>
            </div>
            <div className="brand-downloads">
              {[
                {
                  name: "Primary lockup / ink",
                  meta: "SVG · OUTLINED LETTERING",
                  href: "/brand/downloads/logos/stacked-ink.svg",
                },
                {
                  name: "Primary lockup / white",
                  meta: "SVG · TRANSPARENT",
                  href: "/brand/downloads/logos/stacked-white.svg",
                },
                {
                  name: "Horizontal lockup",
                  meta: "SVG · WIDE PLACEMENTS",
                  href: "/brand/downloads/logos/horizontal-ink.svg",
                },
                {
                  name: "Wordmark only",
                  meta: "SVG · GENERAL SANS MEDIUM",
                  href: "/brand/downloads/logos/wordmark-ink.svg",
                },
                {
                  name: "Profile avatar / paper",
                  meta: "PNG · 512 × 512",
                  href: "/brand/downloads/avatars/avatar-paper.png",
                },
                {
                  name: "Profile avatar / ink",
                  meta: "PNG · 512 × 512",
                  href: "/brand/downloads/avatars/avatar-ink.png",
                },
                {
                  name: "Company share image",
                  meta: "PNG · 1200 × 630",
                  href: "/brand/downloads/social/experimental-software.png",
                },
                {
                  name: "Repository cover template",
                  meta: "SVG · 1280 × 640",
                  href: "/brand/downloads/templates/repository-cover.svg",
                },
                {
                  name: "Outlier / vector",
                  meta: "SVG · ORIGINAL GEOMETRY",
                  href: "/brand/outlier.svg",
                },
                {
                  name: "Outlier / transparent",
                  meta: "PNG · 512 × 512",
                  href: "/brand/outlier.png",
                },
                {
                  name: "White Room tokens",
                  meta: "CSS · COLORS, TYPE & UI",
                  href: "/brand/white-room.css",
                },
                {
                  name: "Brand specification",
                  meta: "JSON · IDENTITY TOKENS",
                  href: "/brand/tokens.json",
                },
              ].map((asset) => (
                <a href={asset.href} download key={asset.href}>
                  <div>
                    <h3>{asset.name}</h3>
                    <span className="brand-eyebrow">{asset.meta}</span>
                  </div>
                  <Download size={19} />
                </a>
              ))}
            </div>
            <p className="brand-asset-note">
              The ZIP includes SVG and PNG versions, white artwork for dark surfaces,
              three avatar backgrounds, and usage notes. Wordmarks use vector outlines
              and display without installed fonts. Font files are not included.{" "}
              <a href="/brand/downloads/README.md">Read the asset guide ↗</a>
            </p>
          </section>
          <section id="wallpapers" className="brand-section">
            <SectionTitle
              number="07"
              title="Make yourself at home."
              description="Wallpapers for iPhone and Mac, plus personal profile banners for LinkedIn and X. Every design comes in paper and ink."
            />
            <a
              className="brand-kit-download"
              href="/brand/downloads/wallpapers/experimental-software-wallpapers-and-banners.zip"
              download
            >
              <div>
                <h3>Download wallpapers & banners</h3>
                <span className="brand-eyebrow">8 DESIGNS · PNG & SVG</span>
              </div>
              <Download size={24} aria-hidden="true" />
            </a>
            <div className="brand-wallpaper-collection">
              {[
                {
                  id: "iphone",
                  name: "iPhone",
                  width: 1320,
                  height: 2868,
                  note: "Space for the clock and lock screen controls.",
                },
                {
                  id: "macos",
                  name: "macOS",
                  width: 3840,
                  height: 2400,
                  note: "A quiet desktop, sized for 16:10 displays.",
                },
                {
                  id: "linkedin",
                  name: "LinkedIn",
                  width: 1584,
                  height: 396,
                  note: "For personal profiles, with room for your profile photo.",
                },
                {
                  id: "x",
                  name: "X / Twitter",
                  width: 1500,
                  height: 500,
                  note: "A profile banner with space for your photo.",
                },
              ].map((asset) => (
                <div className="brand-wallpaper-family" key={asset.id}>
                  <div className="brand-wallpaper-heading">
                    <h3>{asset.name}</h3>
                    <span className="brand-eyebrow">
                      {asset.width} × {asset.height}
                    </span>
                  </div>
                  <p>{asset.note}</p>
                  <div
                    className={`brand-wallpaper-pair${asset.id === "iphone" ? " brand-wallpaper-phones" : ""}`}
                  >
                    {["paper", "ink"].map((variant) => {
                      const base = `/brand/downloads/wallpapers`;
                      const name = `${asset.id}-${variant}`;
                      const label = `${asset.name} / ${variant}`;
                      return (
                        <figure key={variant}>
                          <a
                            href={`${base}/png/${name}.png`}
                            aria-label={`View ${label}`}
                          >
                            <Image
                              src={`${base}/svg/${name}.svg`}
                              alt={`Experimental Software ${asset.name} ${variant === "paper" ? "light" : "dark"} design`}
                              width={asset.width}
                              height={asset.height}
                            />
                          </a>
                          <figcaption>
                            <span>{variant === "paper" ? "Paper" : "Ink"}</span>
                            <div>
                              <a
                                href={`${base}/png/${name}.png`}
                                download
                                aria-label={`Download ${label} PNG`}
                              >
                                PNG <ArrowDown size={14} aria-hidden="true" />
                              </a>
                              <a
                                href={`${base}/svg/${name}.svg`}
                                download
                                aria-label={`Download ${label} SVG`}
                              >
                                SVG <ArrowDown size={14} aria-hidden="true" />
                              </a>
                            </div>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <p className="brand-asset-note">
              PNGs are ready to use. SVGs stay sharp at any size and need no installed
              fonts. Device and profile crops may vary. These designs are also included
              in the complete brand kit.
            </p>
          </section>
          <section id="language" className="brand-section">
            <SectionTitle
              number="08"
              title="Experimentation to production."
              description="The company language: direct, deliberate, and ambitious. Shared with the homepage so the reference and the site stay in step."
            />
            <div className="brand-language-example">
              <span className="brand-eyebrow">HOMEPAGE INTRODUCTION</span>
              <h3>{brandCopy.headline}</h3>
              <p>{brandCopy.introduction}</p>
            </div>
            <div className="brand-language-terms">
              {brandTerminology.map(({ term, use }) => (
                <div key={term}>
                  <h3>{term}</h3>
                  <p>{use}</p>
                </div>
              ))}
            </div>
            <div className="brand-language-about">
              <span className="brand-eyebrow">ABOUT THE COMPANY</span>
              <p>{brandCopy.about}</p>
            </div>
            <div className="brand-notes-grid">
              <div>
                <h3>Speak as the company.</h3>
                <p>
                  Use “we” for the lab. Keep the company introduction broad;
                  project-specific categories and capabilities belong with each project.
                </p>
              </div>
              <div>
                <h3>Use precise verbs.</h3>
                <p>
                  Develop, launch, and grow describe the work. Develop and operate
                  describe the company’s ongoing responsibility. Use research when
                  describing exploration.
                </p>
              </div>
              <div>
                <h3>Keep the catalog clear.</h3>
                <p>
                  Projects is the public umbrella term. Use product or experiment when
                  the distinction helps explain the work. Smaller projects and
                  maintained products remain part of the catalog.
                </p>
              </div>
            </div>
          </section>
          <footer className="brand-footer">
            <span>EXPERIMENTAL SOFTWARE / WHITE ROOM</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
