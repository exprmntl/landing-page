import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { projects } from "../projects";
import {
  ProjectImage,
  SiteFooter,
  SiteHeader,
  SmallExperiments,
  TextLink,
} from "../shared";

export const metadata: Metadata = { title: "01 / Products — Homepage study" };

export default function ProductsDirection() {
  const orb = projects[0];
  return (
    <div className="direction-products">
      <SiteHeader home="/directions/products" />
      <main id="main">
        <section
          className="products-intro direction-gutter"
          aria-labelledby="products-title"
        >
          <div>
            <p className="direction-label">
              <span className="direction-dot" /> FROM EXPERIMENTAL SOFTWARE
            </p>
            <h1 id="products-title">
              Useful things,
              <br />
              made here.
            </h1>
          </div>
          <div className="products-intro-aside">
            <p>
              Tools for building, learning, and following your interests. Made by an
              independent software lab.
            </p>
            <a className="direction-text-link" href="#work">
              Find something to try <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="products-work direction-gutter"
          id="work"
          aria-label="Our projects"
        >
          <article className="products-feature">
            <div className="products-feature-copy">
              <p className="direction-label">
                <span className="direction-tag">
                  {orb.number} / {orb.name}
                </span>{" "}
                OPEN SOURCE
              </p>
              <h2>{orb.headline}</h2>
              <p>{orb.description}</p>
              <TextLink href={orb.href}>{orb.action}</TextLink>
              <a
                className="products-source-link"
                href="https://github.com/alexanderqchen/orb-ui"
              >
                View the source ↗
              </a>
            </div>
            <a
              className="products-feature-visual"
              href={orb.href}
              aria-label="Explore Orb UI"
            >
              <div className="direction-screen-caption">
                <span>{orb.domain}</span>
                <span>VOICE INTERFACE COMPONENTS ↗</span>
              </div>
              <ProjectImage project={orb} priority />
            </a>
          </article>

          <div className="products-pair">
            {projects.slice(1).map((project) => (
              <article className="products-card" key={project.id}>
                <a href={project.href} aria-label={`Visit ${project.name}`}>
                  <div className="products-card-visual">
                    <ProjectImage project={project} detail />
                  </div>
                </a>
                <div className="products-card-caption">
                  <span className="direction-label">
                    {project.number} / {project.name}
                  </span>
                  <span className="direction-label">{project.format}</span>
                </div>
                <h2>{project.headline}</h2>
                <p>{project.description}</p>
                <TextLink href={project.href}>{project.action}</TextLink>
              </article>
            ))}
          </div>
          <SmallExperiments />
        </section>

        <section
          className="products-about direction-gutter"
          id="about"
          aria-labelledby="products-about-title"
        >
          <p className="direction-label">THE LAB BEHIND THE WORK</p>
          <div>
            <h2 id="products-about-title">
              Different interests.
              <br />
              The same curiosity.
            </h2>
            <p>
              Experimental Software is an independent software lab founded and run by
              Alexander Chen. We follow interesting questions into products, open-source
              tools, and small internet experiments.
            </p>
            <TextLink href="https://github.com/exprmntl">
              Follow what we’re making
            </TextLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
