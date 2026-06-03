import { MessageCircle } from "lucide-react";
import { WA_NUMBER } from "../utils/constants";

export default function FloatingWA() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
