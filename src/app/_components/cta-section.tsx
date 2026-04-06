import Link from "next/link";
import { Send } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="mt-10 bg-[#e9eff3] px-6 py-14 text-center md:px-8 md:py-16">
      <h2 className="text-[34px] font-bold leading-tight text-black md:text-[40px]">
        Нужна верстка или есть предложения?
      </h2>

      <p className="mt-4 text-[18px] text-[#565656]">
        Напишите мне, обсудим ваш проект
      </p>

      <div className="mt-8">
        <Link
          href="https://t.me/+998974879395"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-7 py-4 text-[18px] font-semibold text-white transition hover:opacity-90"
        >
          <Send className="h-5 w-5 fill-white" />
          <span>Telegram</span>
        </Link>
      </div>
    </section>
  );
};