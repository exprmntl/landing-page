import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import type { Project } from "./projects";

export function SiteHeader({
  home,
  workLabel = "Projects",
}: {
  home: string;
  workLabel?: string;
}) {
  return (
    <header className="direction-header">
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
      <span className="direction-label direction-header-note">
        AN INDEPENDENT SOFTWARE LAB
      </span>
      <nav aria-label="Main navigation">
        <a href="#work">{workLabel}</a>
        <a href="#about">About</a>
        <a href="https://github.com/exprmntl">
          GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export function ProjectImage({
  project,
  detail = false,
  priority = false,
  className = "",
}: {
  project: Project;
  detail?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const useDetail = detail && "detailImage" in project;
  return (
    <div className={`direction-image direction-image-${project.id} ${className}`}>
      <Image
        src={useDetail ? project.detailImage : project.image}
        alt={useDetail ? project.detailAlt : project.alt}
        width={1280}
        height={720}
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 70vw, 900px"
        priority={priority}
      />
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="direction-text-link" href={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function SmallExperiments() {
  return (
    <aside className="direction-small-work">
      <span className="direction-label">SMALLER EXPERIMENTS</span>
      <TextLink href="https://keyboardlayout.app/">
        Keyboard Layout Simulator
      </TextLink>
      <TextLink href="https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo">
        Flight Currency
      </TextLink>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="direction-footer">
      <div className="direction-footer-top">
        <p>There’s always another idea.</p>
        <TextLink href="mailto:hello@experimental.software">Say hello</TextLink>
      </div>
      <div className="direction-footer-bottom">
        <span className="direction-label">
          © {new Date().getFullYear()} EXPERIMENTAL SOFTWARE
        </span>
        <nav aria-label="Footer navigation">
          <Link href="/code">
            Inside this website <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/brand">Brand & assets</Link>
          <a href="https://github.com/exprmntl">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
