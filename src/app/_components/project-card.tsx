"use client";

import type { ProjectItem } from "@/mock/projects";

type ProjectCardProps = {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
};

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
      >
        <div className="overflow-hidden bg-[#efefef] h-65">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <div className="pt-4">
          <h3 className="text-[18px] font-bold leading-tight text-black md:text-[20px]">
            {project.title}
          </h3>

          <p className="mt-2 text-[17px] leading-7 text-[#343434]">
            {project.shortDescription}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-1 gap-y-1 text-[14px] text-[#8eb7d6]">
            {project.tech.map((item, index) => (
              <span key={item}>
                {item}
                {index !== project.tech.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
};