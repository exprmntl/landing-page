import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import { ComponentPlayground } from "@/components/brand/ComponentPlayground";
import "./brand.css";

export const metadata: Metadata = {
  title: "Brand guide",
  description:
    "The Experimental Software identity. Original Outlier, White Room, and the foundations for everything we make.",
  alternates: { canonical: "https://experimental.software/brand" },
  icons: { icon: "/brand/outlier.svg" },
};

const sections = [
  "Identity",
  "Typography",
  "Color",
  "Components",
  "In practice",
  "Assets",
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
    <div className="brand-theme brand-guide" id="top">
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
            <span>Version 1.0 / Sep 2026</span>
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
              <span className="brand-eyebrow">THE BRAND GUIDE / 1.0</span>
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
              description="Helvetica Neue does the speaking. Menlo adds the small, precise details. Hierarchy comes from scale and spacing."
            />
            <div className="brand-type-main">
              <div className="brand-type-heading">
                <span className="brand-eyebrow">PRIMARY / HELVETICA NEUE</span>
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
                  Large type. Tight spacing. Regular weight.
                  <br />
                  Display tracking: −0.065em.
                </p>
              </div>
              <div>
                <span className="brand-eyebrow">BODY / REGULAR</span>
                <p className="brand-type-body">
                  An independent lab building tools, products, and internet experiments.
                  We follow interesting questions and turn them into software you can
                  use.
                </p>
                <p>
                  16px / 1.55 line height. Normal spacing.
                  <br />
                  The wordmark uses Medium (500).
                </p>
              </div>
            </div>
            <div className="brand-mono-specimen">
              <div>
                <span className="brand-eyebrow">SUPPORTING / MENLO REGULAR</span>
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
              Interface labels use 14px; secondary metadata uses 12px. This page uses
              installed Helvetica Neue and Menlo, with Arial and monospace fallbacks. A
              consistent public web release needs licensed webfonts; font files are not
              included.
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
                <a href="https://github.com/alexanderqchen/orb-ui">
                  View Orb UI <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section id="assets" className="brand-section">
            <SectionTitle
              number="06"
              title="Start with the originals."
              description="Use these files as the source of truth. The original mark, the selected palette, and the styling foundation."
            />
            <div className="brand-downloads">
              {[
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
