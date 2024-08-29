import { HoverEffect } from "@/components/ui/card-hover-effect";

export function ContactChoise() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={contact} />
    </div>
  );
}

export const contact = [
  {
    title: "WhatsApp",
    description:
      "Hubungi saya melalui whatsapp untuk mendapatkan respon cepat dari saya",
    link: "https://api.whatsapp.com/send?phone=628983220569",
  },
  {
    title: "Email",
    description:
      "Hubungi saya melalui email",
    link: "mailto:perawitayasa@gmail.com",
  },
  {
    title: "Instagram",
    description:
      "Hubungi saya melalui instagram dan berinteraksi dengan saya melalui instagram",
    link: "https://www.instagram.com/perawita_yasa/",
  },
];
