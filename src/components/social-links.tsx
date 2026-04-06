import Link from "next/link";
import { GitCompareArrows, Mail, MessageCircle, Send } from "lucide-react";

const links = [
  {
    href: "mailto:shaxzodsobitaliev9@gmail.com",
    label: "Email",
    icon: Mail,
    bg: "bg-black",
    text: "text-white",
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: GitCompareArrows,
    bg: "bg-black",
    text: "text-white",
  },
  {
    href: "https://wa.me/998974879395",
    label: "WhatsApp",
    icon: MessageCircle,
    bg: "bg-[#25D366]",
    text: "text-white",
  },
  {
  href: "https://t.me/+998974879395",
  label: "Telegram",
  icon: Send,
  bg: "bg-[#229ED9]",
  text: "text-white",
},
];

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 ${item.bg} ${item.text}`}
          >
            <Icon className="h-6 w-6" strokeWidth={2.2} />
          </Link>
        );
      })}
    </div>
  );
};