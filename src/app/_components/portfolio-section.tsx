"use client";

import { useState } from "react";
import { PortfolioModal } from "@/components/portfolio-modal";
import { projects, type ProjectItem } from "@/mock/projects";
import { ProjectCard } from "./project-card";

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="pt-12 md:pt-14">
        <h2 className="text-[38px] font-bold leading-none text-black md:text-[44px]">
          Портфолио
        </h2>

        <div className="mt-7 grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={openModal}
            />
          ))}
        </div>
      </section>

      <PortfolioModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={closeModal}
      />
    </>
  );
};