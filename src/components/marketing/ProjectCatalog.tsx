"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { catalog, type CatalogProject, type ProjectCategory } from "./catalog";

const filters = ["All projects", "Web", "iOS", "Developer tools"] as const;
type Filter = "All projects" | ProjectCategory;

function ProjectCard({
  project,
  priority,
}: {
  project: CatalogProject;
  priority: boolean;
}) {
  const content = (
    <>
      <div className="gallery-project-visual">
        <div className="gallery-project-topline">
          <span className="direction-label">{project.domain ?? "IN THE LAB"}</span>
          {project.newRelease && <span className="catalog-new">NEW</span>}
          {project.comingSoon ? (
            <span className="catalog-coming-soon">COMING SOON</span>
          ) : (
            <ArrowUpRight size={20} aria-hidden="true" />
          )}
        </div>
        <div className={`direction-image direction-image-${project.id}`}>
          <Image
            src={project.image}
            alt={project.alt}
            width={1200}
            height={630}
            sizes="(max-width: 760px) calc(100vw - 80px), (max-width: 1279px) 34vw, 25vw"
            priority={priority}
          />
        </div>
      </div>
      <div className="gallery-project-copy">
        <p className="direction-label">{project.format}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {!project.comingSoon && (
          <span className="gallery-visit">
            Explore {project.name} <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  return (
    <article
      id={`project-${project.id}`}
      className={`gallery-project gallery-project-${project.id}`}
    >
      {project.comingSoon ? (
        <div className="gallery-project-content">{content}</div>
      ) : (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-project-link"
          aria-label={`Explore ${project.name} (opens in a new tab)`}
        >
          {content}
        </a>
      )}
    </article>
  );
}

export function ProjectCatalog() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const visible = catalog.filter(
    (project) => filter === "All projects" || project.category === filter,
  );

  return (
    <>
      <div className="catalog-heading">
        <h2 id="projects-title">Projects</h2>
        <span className="direction-label" role="status">
          {String(visible.length).padStart(2, "0")}{" "}
          {visible.length === 1 ? "PROJECT" : "PROJECTS"}
        </span>
      </div>
      <div className="gallery-toolbar catalog-toolbar">
        <div role="group" aria-label="Filter projects">
          {filters.map((option) => (
            <button
              type="button"
              key={option}
              aria-pressed={filter === option}
              aria-controls="project-results"
              onClick={() => setFilter(option)}
            >
              {option}
              <span>
                {
                  catalog.filter(
                    (project) =>
                      option === "All projects" || project.category === option,
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
      </div>
      <div id="project-results">
        <div className="gallery-grid">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </>
  );
}
