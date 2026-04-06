import Link from "next/link";
import { Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="mt-10 rounded-[10px] bg-[#e9eff3] px-5 py-14 text-center md:px-8 md:py-16">
      <h2 className="mx-auto max-w-155 text-[28px] font-extrabold leading-tight text-black md:text-[52px] md:leading-[1.15]">
        Нужна разработка или есть предложения?
      </h2>

      <p className="mt-4 text-[15px] text-[#565656] md:text-[17px]">
        Напишите мне, обсудим ваш проект
      </p>

      <div className="mt-7">
        <Link
          href="https://t.me/username"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-[16px] font-semibold text-white transition hover:opacity-90 md:px-7 md:text-[18px]"
        >
          <Send className="h-4 w-4 fill-white md:h-5 md:w-5" />
          <span>Telegram</span>
        </Link>
      </div>
    </section>
  );
};