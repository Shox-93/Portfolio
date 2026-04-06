import { Mail,  } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      
      {/* Email */}
      <a
        href="mailto:your@email.com"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:opacity-80"
      >
        <Mail size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/998901234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition hover:opacity-80"
      >
        <FaWhatsapp size={20} />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition hover:opacity-80"
      >
        <FaTelegramPlane size={20} />
      </a>

    </div>
  );
};