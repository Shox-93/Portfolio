export type ProjectPage = {
  title: string;
  href: string;
};

export type ProjectItem = {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  modalDescription: string;
  tech: string[];
  demoUrl: string;
  siteUrl: string;
  githubUrl: string;
  pages: ProjectPage[];
};