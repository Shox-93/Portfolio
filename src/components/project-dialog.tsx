"use client";

import { ExternalLink, GitMerge, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/types/project";

type ProjectDialogProps = {
  project: ProjectItem;
  children: React.ReactNode;
};

export const ProjectDialog = ({ project, children }: ProjectDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[calc(100%-32px)] max-w-215 border-0 bg-white p-0 shadow-none">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        <div className="bg-[#f5f5f5] px-5 py-6 md:px-8 md:py-8">
          <div className="mx-auto max-w-140 h-61.5 md:h-92.5 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="px-5 py-5 md:px-8 md:py-6">
          <h3 className="text-[28px] font-extrabold leading-tight text-black">
            {project.title}
          </h3>

          <p className="mt-3 text-[16px] leading-7 text-[#2f2f2f] md:text-[18px]">
            {project.modalDescription}
          </p>

          <div className="mt-5">
            <p className="text-[16px] font-medium text-black md:text-[18px]">
              Страницы:
            </p>

            <ul className="mt-3 space-y-2 text-[15px] leading-6 text-[#3a82ff] md:text-[17px]">
              {project.pages.map((page) => (
                <li key={page.title}>
                  <a
                    href={page.href }
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    • {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="text-[13px] text-[#8db6d5] md:text-[14px]">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button asChild variant="secondary" className="h-10 rounded-md bg-[#f1f1f1] px-4 text-[#222] hover:bg-[#e8e8e8]">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Смотреть демо
              </a>
            </Button>

            <Button asChild variant="secondary" className="h-10 rounded-md bg-[#f1f1f1] px-4 text-[#222] hover:bg-[#e8e8e8]">
              <a href={project.siteUrl} target="_blank" rel="noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Сайт клиента
              </a>
            </Button>

            <Button asChild variant="secondary" className="h-10 rounded-md bg-[#f1f1f1] px-4 text-[#222] hover:bg-[#e8e8e8]">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <GitMerge className="mr-2 h-4 w-4" />
                GitHub проекта
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};