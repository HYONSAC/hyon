import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Heart, Sprout, MapPin, Phone, User } from "lucide-react";
import vertical from "@/assets/hyon-vertical.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — HYON S.A.C." },
      { name: "description", content: "HYON S.A.C. es una empresa peruana de ingeniería integrada y consultoría con sede en Miraflores, Arequipa. Personal capacitado para resolver y gestionar las necesidades de nuestros clientes." },
      { property: "og:title", content: "Nosotros — HYON S.A.C." },
      { property: "og:description", content: "Conoce a HYON S.A.C., empresa de ingeniería integrada en Arequipa, Perú." },
    ],
  }),
  component: Nosotros,
});

const values = [
  { icon: Sprout, title: "Integración", desc: "Todas las disciplinas de ingeniería conversando bajo un mismo equipo." },
  { icon: Heart, title: "Compromiso", desc: "Trabajamos como una extensión de tu equipo hasta entregar resultados." },
  { icon: Target, title: "Excelencia", desc: "Rigor técnico, capacitación constante y mejora continua." },
];

function Nosotros() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 md:grid-cols-[1fr_auto] items-center"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-medium">
            HYON S.A.C. — Miraflores, Arequipa
          </div>
          <h1 className="mt-5 text-5xl md:text-6xl font-bold">
            Ingeniería con <span className="text-gradient">visión integrada</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Somos una empresa dedicada al rubro de la ingeniería integrada y consultoría que va de la mano con el mercado. Nuestro personal está capacitado para desenvolverse de manera rápida en el área asignada, detallando, resolviendo, gestionando y dando solución a las necesidades de los clientes que confían en nosotros.
          </p>
        </div>
        <img src={vertical} alt="HYON S.A.C." className="h-48 w-auto mx-auto" width={500} height={500} loading="lazy" />
      </motion.div>

      <div className="mt-20 grid gap-10 md:grid-cols-2 items-stretch">
        <div className="rounded-3xl border border-border bg-card p-10">
          <h2 className="text-3xl font-bold">Nuestra misión</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Acompañar a empresas e instituciones del sector público y privado en cada paso de sus proyectos: desde el primer estudio de viabilidad hasta la implementación, capacitación y mantenimiento, con una visión 360° de la ingeniería.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nuestros profesionales también realizan capacitaciones para el uso adecuado de los equipos e implementaciones, además de la supervisión integral de proyectos.
          </p>
        </div>
        <div className="bg-gradient-dark text-primary-foreground rounded-3xl p-10 shadow-elegant">
          <h3 className="text-xl font-semibold mb-6">Datos de la empresa</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <User className="h-5 w-5 mt-0.5" style={{ color: "oklch(0.78 0.17 155)" }} />
              <div>
                <div className="opacity-70 text-xs uppercase tracking-wider">Gerente general</div>
                <div className="font-medium mt-1">Gerencia HYON S.A.C.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5" style={{ color: "oklch(0.78 0.17 155)" }} />
              <div>
                <div className="opacity-70 text-xs uppercase tracking-wider">Sede</div>
                <div className="font-medium mt-1">Miraflores — Arequipa, Perú</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5" style={{ color: "oklch(0.78 0.17 155)" }} />
              <div>
                <div className="opacity-70 text-xs uppercase tracking-wider">Contacto</div>
                <a href="tel:+51943775111" className="font-medium mt-1 block hover:underline">+51 943 775 111</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center">Nuestros <span className="text-gradient">valores</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7 text-center hover:shadow-elegant transition-smooth"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
