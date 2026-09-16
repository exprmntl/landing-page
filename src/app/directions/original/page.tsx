import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import { whiteRoomFonts } from "@/styles/brand-fonts";
import "../../marketing.css";

export const metadata: Metadata = { title: "00 / Original — Homepage study" };

const projects = [
  {
    name: "Orb UI",
    category: "INTERFACE TOOLS",
    description:
      "An open-source component library for voice agents. Give conversations an interface.",
    href: "https://orb-ui.com/",
    number: "01",
    note: "OPEN SOURCE",
  },
  {
    name: "TypeChinese",
    category: "LEARNING TOOLS",
    description:
      "A place to practice Chinese typing, build fluency, and find your rhythm.",
    href: "https://typechinese.io",
    number: "02",
    note: "WEB APP",
  },
  {
    name: "badminton.fyi",
    category: "USEFUL INTERNET",
    description:
      "A searchable racket database. Specs, prices, and popularity signals, all in one place.",
    href: "https://badminton.fyi/",
    number: "03",
    note: "DATABASE",
  },
];

export default function Home() {
  return (
    <div className={`${whiteRoomFonts} brand-theme marketing`}>
      <a className="marketing-skip" href="#main">
        Skip to content
      </a>
      <header className="marketing-header">
        <Link
          href="/"
          className="marketing-lockup"
          aria-label="Experimental Software home"
        >
          <Outlier />
          <span>
            experimental
            <br />
            software
          </span>
        </Link>
        <span className="marketing-label marketing-header-note">
          AN INDEPENDENT SOFTWARE LAB
        </span>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:hello@experimental.software">
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="marketing-hero" aria-labelledby="hero-title">
          <div className="marketing-hero-copy">
            <p className="marketing-label marketing-kicker">
              <span /> IDEAS MADE INTO SOFTWARE
            </p>
            <h1 id="hero-title">
              Room to
              <br />
              experiment.
            </h1>
            <div className="marketing-hero-bottom">
              <p>
                We build tools, products, and internet experiments.
                <br className="marketing-desktop-break" /> Some useful. Some unexpected.
                All worth trying.
              </p>
              <a href="#work" className="marketing-text-link">
                Explore the work <ArrowDown size={18} />
              </a>
            </div>
          </div>
          <div className="marketing-specimen" aria-hidden="true">
            <span className="marketing-label marketing-specimen-top">
              FIG. 01 — THE OUTLIER
            </span>
            <Outlier />
            <div className="marketing-specimen-bottom">
              <span>
                START WITH A PATTERN.
                <br />
                THEN TRY SOMETHING ELSE.
              </span>
              <span>↗</span>
            </div>
          </div>
        </section>

        <section className="marketing-work" id="work" aria-labelledby="work-title">
          <div className="marketing-section-heading">
            <div>
              <p className="marketing-label">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Out of the lab.
                <br />
                Into the world.
              </h2>
            </div>
            <p>
              A few things we’ve made.
              <br />
              Follow your curiosity.
            </p>
          </div>
          <div className="marketing-projects">
            {projects.map((project) => (
              <a className="marketing-project" href={project.href} key={project.name}>
                <span className="marketing-label marketing-project-number">
                  {project.number}
                </span>
                <div className="marketing-project-name">
                  <span className="marketing-label">{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <span className="marketing-label marketing-project-note">
                  {project.note}
                </span>
                <ArrowUpRight
                  className="marketing-project-arrow"
                  aria-label="Visit project"
                  size={26}
                />
              </a>
            ))}
          </div>
          <div className="marketing-more">
            <span className="marketing-label">ALSO ON THE WORKBENCH</span>
            <a href="https://keyboard.experimental.software/">
              Keyboard Layout Tester <ArrowUpRight size={16} />
            </a>
            <a href="https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo">
              Google Flights Currency <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="marketing-about" id="about" aria-labelledby="about-title">
          <p className="marketing-label">02 / THE LAB</p>
          <div>
            <h2 id="about-title">
              A little curiosity.
              <br />A lot of making.
            </h2>
            <div className="marketing-about-copy">
              <p>
                Experimental Software is an independent software lab founded and run by
                Alexander Chen.
              </p>
              <p>
                We follow interesting questions into products, developer tools, and
                small internet experiments. The work is self-directed. The next idea is
                an open question.
              </p>
            </div>
            <a className="marketing-text-link" href="https://github.com/exprmntl">
              Follow along on GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <aside className="marketing-code">
          <div>
            <Code2 size={24} aria-hidden="true" />
            <p>This website is an experiment, too.</p>
          </div>
          <Link className="marketing-text-link" href="/code">
            Look inside the code <ArrowUpRight size={18} />
          </Link>
        </aside>

        <section className="marketing-contact" aria-labelledby="contact-title">
          <p className="marketing-label">03 / OPEN A CONVERSATION</p>
          <a href="mailto:hello@experimental.software">
            <h2 id="contact-title">
              What are you
              <br />
              thinking about?
            </h2>
            <ArrowUpRight aria-hidden="true" />
          </a>
          <span>hello@experimental.software</span>
        </section>
      </main>

      <footer className="marketing-footer">
        <span className="marketing-label">
          © {new Date().getFullYear()} EXPERIMENTAL SOFTWARE
        </span>
        <nav aria-label="Footer navigation">
          <Link href="/brand">Brand & assets</Link>
          <a href="https://github.com/exprmntl">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </footer>
    </div>
  );
}
