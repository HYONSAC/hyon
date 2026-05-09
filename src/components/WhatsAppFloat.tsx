import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phone = "51943775111";
  const msg = encodeURIComponent("Hola HYON, me gustaría más información sobre sus servicios.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-glow transition-smooth hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="sr-only">WhatsApp +51 943 775 111</span>
    </a>
  );
}
