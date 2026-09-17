import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import { brandCopy } from "@/lib/brand-copy";
import { ProjectCatalog } from "./ProjectCatalog";
import "./gallery-home.css";

export function GalleryHome({ home = "/" }: { home?: string }) {
  return (
    <div className="direction-gallery catalog-home">
      <header className="direction-header">
        <div className="catalog-sidebar-content">
          <Link
            href={home}
            className="direction-lockup"
            aria-label="Experimental Software home"
          >
            <Outlier />
            <span>
              experimental
              <br />
              software
            </span>
          </Link>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section
          className="gallery-intro direction-gutter"
          aria-labelledby="gallery-title"
        >
          <p className="direction-label catalog-eyebrow">EXPERIMENTAL SOFTWARE</p>
          <h1 id="gallery-title">{brandCopy.headline}</h1>
          <p className="catalog-introduction">{brandCopy.introduction}</p>
        </section>
        <section
          className="gallery-work direction-gutter"
          id="projects"
          aria-labelledby="projects-title"
        >
          <ProjectCatalog />
        </section>
        <section
          className="gallery-about direction-gutter"
          id="about"
          aria-labelledby="gallery-about-title"
        >
          <p className="direction-label">ABOUT</p>
          <h2 id="gallery-about-title">About the lab.</h2>
          <div>
            <p>{brandCopy.about}</p>
            <a
              className="direction-text-link"
              href="https://github.com/exprmntl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore our work on GitHub <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="direction-footer">
        <div className="direction-footer-top" id="contact">
          <span className="direction-label">CONTACT</span>
          <p>Get in touch.</p>
          <a
            className="direction-text-link"
            href="mailto:hello@experimental.software"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@experimental.software <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="direction-footer-bottom">
          <span className="direction-label">
            © {new Date().getFullYear()} EXPERIMENTAL SOFTWARE
          </span>
          <nav aria-label="Footer navigation">
            <Link href="/code" target="_blank" rel="noopener noreferrer">
              Code <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <a
              href="https://github.com/exprmntl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
