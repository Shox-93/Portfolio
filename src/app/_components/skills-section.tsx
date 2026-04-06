import { skills, skillTags } from "@/mock/skills";

export const SkillsSection = () => {
  return (
    <section className="min-h-62.5 bg-[#eaf3f7] px-6 py-6 md:px-8 md:py-7">
      <h2 className="text-[28px] font-bold leading-none text-black md:text-[30px]">
        Навыки
      </h2>

      <div className="mt-5 flex flex-wrap gap-2">
        {skillTags.map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center px-2.5 py-1 text-[13px] font-bold uppercase leading-none text-white ${tag.className}`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-3 pl-5 text-[17px] leading-7 text-[#2f2f2f] marker:text-black list-disc">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};