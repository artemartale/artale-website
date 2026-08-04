import { Mail } from "lucide-react";
import {
  SiTelegram,
  SiWhatsapp,
  SiViber,
} from "react-icons/si";

export const contacts = [
  {
    key: "email",
    href: "mailto:artem.benefis@gmail.com",
    icon: Mail,
  },
  {
    key: "telegram",
    href: "https://t.me/artem_artale",
    icon: SiTelegram,
  },
  {
    key: "whatsapp",
    href: "https://wa.me/380662459065",
    icon: SiWhatsapp,
  },
  {
    key: "viber",
    href: "viber://chat?number=%2B380662459065",
    icon: SiViber,
  },
];