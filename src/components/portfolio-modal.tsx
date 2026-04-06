"use client";

import Link from "next/link";
import { ExternalLink, GitCompareArrows, Globe, X } from "lucide-react";
import type { ProjectItem } from "@/mock/projects";

type PortfolioModalProps = {
  project: ProjectItem | null;
  open: boolean;
  onClose: () => void;
};

export const PortfolioModal = ({
  project,
  open,
  onClose,
}: PortfolioModalProps) => {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
      <div className="relative max-h-[90vh] w-full max-w-215 overflow-y-auto bg-white shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-black"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-[#f5f5f5] px-6 py-8 md:px-8 md:py-10">
          <div className="mx-auto max-w-155">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="px-6 py-6 md:px-8 md:py-7">
          <h3 className="text-[28px] font-bold leading-tight text-black">
            {project.title}
          </h3>

          <p className="mt-4 text-[18px] leading-8 text-[#2b2b2b]">
            {project.modalDescription}
          </p>

          <div className="mt-6">
            <p className="text-[18px] font-medium text-black">Страницы:</p>

            <ul className="mt-3 space-y-2 text-[17px] leading-7 text-[#2b70ff]">
              {project.pages.map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <span>•</span>
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="text-[14px] text-[#8fb5d4]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#f1f1f1] px-4 py-3 text-[16px] font-medium text-[#222] transition hover:bg-[#e6e6e6]"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Смотреть демо</span>
            </Link>

            <Link
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#f1f1f1] px-4 py-3 text-[16px] font-medium text-[#222] transition hover:bg-[#e6e6e6]"
            >
              <Globe className="h-4 w-4" />
              <span>Сайт клиента</span>
            </Link>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#f1f1f1] px-4 py-3 text-[16px] font-medium text-[#222] transition hover:bg-[#e6e6e6]"
            >
              <GitCompareArrows className="h-4 w-4" />
              <span>GitHub проекта</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};