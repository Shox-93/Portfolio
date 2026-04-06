import { SocialLinks } from "@/components/social-links";

export const Nav = () => {
  return (
    <header className="mx-auto flex w-full max-w-265 items-start justify-between px-5 pt-8 md:px-6 md:pt-10">
      <div>
        <h1 className="text-[28px] font-bold leading-none tracking-[-0.03em] text-black md:text-[34px]">
          Шахзод Собиталиев
        </h1>
        <p className="mt-2 text-[15px] leading-none text-[#7fb2cf]">
          Frontend / Full Stack Developer
        </p>
      </div>

      <SocialLinks />
    </header>
  );
};