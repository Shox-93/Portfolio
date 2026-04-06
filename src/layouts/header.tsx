import { SocialLinks } from "@/components/social-links";

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-308 items-start justify-between gap-4 px-4 pt-6 md:pt-8">
      <div>
        <h1 className="text-[24px] font-extrabold leading-none tracking-[-0.03em] text-black md:text-[33px]">
          Шахзод Собиталиев
        </h1>
        <p className="mt-2 text-[13px] leading-none text-[#8eb5d1] md:text-[15px]">
          Web Developer, frontend / full stack разработчик
        </p>
      </div>

      <SocialLinks />
    </header>
  );
};