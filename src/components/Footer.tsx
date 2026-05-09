import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import iso from "@/assets/hyon-iso.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.5a8.16 8.16 0 0 0 4.77 1.52V6.57a4.85 4.85 0 0 1-1.84-.18z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 bg-gradient-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={iso} alt="HYON S.A.C." className="h-12 w-12 rounded-lg bg-white p-1" width={500} height={500} loading="lazy" />
            <div>
              <div className="font-display text-xl font-bold">HYON S.A.C.</div>
              <div className="text-xs opacity-70">Ingeniería integrada & consultoría</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm opacity-80 leading-relaxed">
            Empresa dedicada a la ingeniería integrada y consultoría. Nuestro personal está capacitado para detallar, resolver, gestionar y dar solución a las necesidades de quienes confían en nosotros.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contacto</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Miraflores — Arequipa, Perú</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <a href="tel:+51943775111" className="hover:opacity-100 transition-smooth">+51 943 775 111</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> <a href="mailto:contacto@hyon.pe" className="hover:opacity-100 transition-smooth">contacto@hyon.pe</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Empresa</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/nosotros" className="hover:opacity-100 transition-smooth">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:opacity-100 transition-smooth">Servicios</Link></li>
            <li><Link to="/contacto" className="hover:opacity-100 transition-smooth">Contacto</Link></li>
          </ul>

          <h4 className="text-sm font-semibold mt-6 mb-3">Síguenos</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.facebook.com/profile.php?id=61589278491402" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/hyon.sac" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.tiktok.com/@hyonsac?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"><TikTokIcon className="h-4 w-4" /></a>
            <a href="https://www.youtube.com/channel/UCRrKL1fMkcLDyGLnw3tdp7g" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"><Youtube className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/company/hyon-s-a-c/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-smooth"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-70">
        © {new Date().getFullYear()} HYON S.A.C. · Ingeniería integrada — Miraflores, Arequipa
      </div>
    </footer>
  );
}
