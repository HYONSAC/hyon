import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import albaLodge from "@/assets/alba-lodge.jpg";
import fijucy from "@/assets/fijucy.jpg";
import divinoNino from "@/assets/divino-nino.jpg";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — HYON" },
      { name: "description", content: "Clientes que confían en HYON para sus proyectos de ingeniería integrada." },
      { property: "og:title", content: "Clientes — HYON" },
      { property: "og:description", content: "Conoce a los clientes que han trabajado con HYON." },
    ],
  }),
  component: ClientesPage,
});

const clientes = [
  {
    name: "Alba Lodge",
    image: albaLodge,
    href: "https://www.instagram.com/alba.lodge/",
  },
  {
    name: "Industrias Fijucy",
    image: fijucy,
    href: "https://www.fijucy.com/",
  },
  {
    name: "Baterías Divino Niño Jesús",
    image: divinoNino,
    href: "https://www.facebook.com/profile.php?id=100076361670744",
  },
];

function ClientesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          Nuestros <span className="text-gradient">clientes</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Empresas que han confiado en HYON para llevar sus proyectos de principio a fin.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {clientes.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <img
              src={c.image}
              alt={`Logo de ${c.name}`}
              className="h-40 w-auto object-contain group-hover:scale-105 transition-smooth"
              loading="lazy"
            />
            <div className="mt-4 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
              Ver en Instagram →
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
