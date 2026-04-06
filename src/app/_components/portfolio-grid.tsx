import { ProjectDialog } from "@/components/project-dialog";
import { projects } from "@/mockdata/projects";

export const PortfolioGrid = () => {
  return (
    <section className="pt-9 md:pt-11">
      <h2 className="text-[32px] font-extrabold leading-none text-black md:text-[42px]">
        Портфолио
      </h2>

      <div className="mt-6 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectDialog key={project.id} project={project}>
            <button type="button" className="block w-full text-left">
              <div className="overflow-hidden bg-[#efefef] h-52.5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-[18px] font-extrabold leading-tight text-black md:text-[20px]">
                  {project.title}
                </h3>

                <p className="mt-2 text-[15px] leading-7 text-[#343434] md:text-[16px] overflow-hidden line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="mt-2 flex flex-wrap gap-x-1 gap-y-1 text-[13px] text-[#8eb7d6]">
                  {project.tech.map((item, index) => (
                    <span key={item}>
                      {item}
                      {index !== project.tech.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          </ProjectDialog>
        ))}
      </div>
    </section>
  );
};