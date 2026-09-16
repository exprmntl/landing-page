import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Outlier } from "@/components/brand/Outlier";
import { projects } from "../projects";
import {
  ProjectImage,
  SiteFooter,
  SiteHeader,
  SmallExperiments,
  TextLink,
} from "../shared";

export const metadata: Metadata = { title: "02 / The lab — Homepage study" };

export default function LabDirection() {
  return (
    <div className="direction-lab">
      <SiteHeader home="/directions/lab" workLabel="Experiments" />
      <main id="main">
        <section className="lab-intro direction-gutter" aria-labelledby="lab-title">
          <p className="direction-label">
            <span className="direction-dot" /> CURIOSITY, PUT TO WORK
          </p>
          <div className="lab-statement">
            <h1 id="lab-title">
              What happens
              <br />
              if we try?
            </h1>
            <div>
              <p>
                We’re Experimental Software.
                <br />
                An independent lab following interesting questions into tools, products,
                and internet experiments.
              </p>
              <a className="direction-text-link" href="#work">
                See where they lead <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="lab-contact-sheet" aria-label="A look inside our experiments">
            {projects.map((project) => (
              <a href={`#${project.id}`} key={project.id}>
                <ProjectImage
                  project={project}
                  detail
                  priority={project.number === "01"}
                />
                <div>
                  <span className="direction-label">
                    FIG. {project.number} / {project.name}
                  </span>
                  <ArrowDown size={16} aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          className="lab-work direction-gutter"
          id="work"
          aria-labelledby="lab-work-title"
        >
          <div className="lab-section-heading">
            <p className="direction-label">A FEW QUESTIONS WE’VE FOLLOWED</p>
            <h2 id="lab-work-title">One question leads to another.</h2>
          </div>
          {projects.map((project) => (
            <article
              className={`lab-case lab-case-${project.id}`}
              id={project.id}
              key={project.id}
            >
              <div className="lab-case-copy">
                <p className="direction-label">
                  {project.number} / {project.format}
                </p>
                <h3>{project.question}</h3>
                <p>{project.story}</p>
                <TextLink href={project.href}>{project.action}</TextLink>
              </div>
              <a
                className="lab-case-visual"
                href={project.href}
                aria-label={`Visit ${project.name}`}
              >
                <ProjectImage project={project} />
                <div className="direction-screen-caption">
                  <span>{project.name}</span>
                  <span>{project.domain} ↗</span>
                </div>
              </a>
            </article>
          ))}
          <SmallExperiments />
        </section>

        <section
          className="lab-about direction-gutter"
          id="about"
          aria-labelledby="lab-about-title"
        >
          <div className="lab-about-symbol">
            <Outlier />
            <span className="direction-label">EXPERIMENTAL, BY NATURE.</span>
          </div>
          <div>
            <p className="direction-label">THE PERSON BEHIND THE LAB</p>
            <h2 id="lab-about-title">
              A place to follow
              <br />
              an idea through.
            </h2>
            <p>
              Founded and run by Alexander Chen, Experimental Software is a home for
              self-directed work. Some projects become everyday tools. Others stay
              small. Each is a chance to make something and see what comes of it.
            </p>
            <a className="direction-text-link" href="https://x.com/alexanderqchen">
              Follow Alexander <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
