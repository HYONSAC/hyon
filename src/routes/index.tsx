import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cog, Cpu, Building2, Workflow, Sparkles, TrendingUp, CircuitBoard } from "lucide-react";
import heroImg from "@/assets/hero-renewable.jpg";
import sticker from "@/assets/hyon-sticker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HYON — Ingeniería integrada" },
      { name: "description", content: "Consultoría y ejecución de proyectos de ingeniería integrada: civil, eléctrica, electrónica, mecánica, industrial y digital. Una sola firma, todas las disciplinas." },
      { property: "og:title", content: "HYON — Ingeniería integrada" },
      { property: "og:description", content: "Una sola firma para todas las disciplinas de ingeniería de tu proyecto." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Building2, title: "Ingeniería civil", desc: "Estructuras, obras y diseño de infraestructura desde concepto a entrega." },
  { icon: Cog, title: "Ingeniería mecánica", desc: "Diseño de sistemas, equipos industriales y procesos productivos." },
  { icon: Cpu, title: "Ingeniería eléctrica", desc: "Distribución, automatización y control para plantas e instalaciones." },
  { icon: CircuitBoard, title: "Ingeniería electrónica", desc: "Diseño de circuitos, sensores e instrumentación para sistemas embebidos." },
  { icon: Workflow, title: "Ingeniería digital", desc: "BIM, gemelos digitales y software a medida para tus operaciones." },
];

const stats = [
  { value: "10+", label: "Proyectos entregados" },
  { value: "2", label: "Años de trayectoria" },
  { value: "12", label: "Disciplinas integradas" },
  { value: "98%", label: "Clientes recurrentes" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-16 pb-24 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-medium text-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Consultoría & ingeniería integrada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              Una <span className="text-gradient">sola firma</span>,<br />
              todas las disciplinas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              En HYON unimos ingeniería civil, mecánica, eléctrica e industrial bajo un mismo equipo. Diseñamos, construimos y operamos proyectos complejos de principio a fin, con una visión integrada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
              >
                Cotizar proyecto
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold hover:shadow-elegant transition-smooth"
              >
                Ver servicios
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={heroImg} alt="Proyectos de ingeniería integrada HYON" className="w-full h-[480px] object-cover" width={1920} height={1280} />
            </div>
            <motion.img
              src={sticker}
              alt="HYON · Consultoría e ingeniería integrada"
              className="absolute -bottom-8 -left-6 h-28 w-28 md:h-36 md:w-36 rounded-full bg-white p-2 shadow-glow"
              width={500}
              height={500}
              loading="lazy"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="bg-gradient-dark text-primary-foreground rounded-3xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-elegant">
          {stats.map((s) => {
            const isClientes = s.label === "Clientes recurrentes";
            const content = (
              <>
                <div className="font-display text-3xl md:text-4xl font-bold" style={{ color: "oklch(0.78 0.17 155)" }}>{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider opacity-80">
                  {s.label}
                  {isClientes && <span className="ml-1">↗</span>}
                </div>
              </>
            );
            return isClientes ? (
              <Link key={s.label} to="/clientes" className="text-center hover:scale-105 transition-smooth">
                {content}
              </Link>
            ) : (
              <div key={s.label} className="text-center">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">Disciplinas <span className="text-gradient">integradas</span></h2>
          <p className="mt-4 text-muted-foreground">Equipos multidisciplinares trabajando como uno solo, desde el primer plano hasta la puesta en marcha.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <TrendingUp className="h-4 w-4" /> Cómo trabajamos
            </div>
            <h2 className="mt-3 text-4xl font-bold">De la idea a <span className="text-gradient">la entrega</span></h2>
            <p className="mt-4 text-muted-foreground">
              Acompañamos tu proyecto en cada fase: viabilidad, diseño, ejecución y operación. Una sola firma responsable, cero fricciones entre disciplinas.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { n: "01", t: "Diagnóstico & viabilidad", d: "Estudios técnicos, normativos y modelo económico." },
                { n: "02", t: "Ingeniería & diseño", d: "Ingeniería básica y de detalle multidisciplinar." },
                { n: "03", t: "Construcción & puesta en marcha", d: "Gestión EPC, control de calidad y seguridad en obra." },
                { n: "04", t: "Operación & mejora continua", d: "Monitoreo con datos en tiempo real y optimización." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <div className="font-display text-2xl font-bold text-accent shrink-0 w-12">{step.n}</div>
                  <div>
                    <div className="font-semibold">{step.t}</div>
                    <div className="text-sm text-muted-foreground">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-elegant">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "right" }}
            />
            <div className="absolute inset-0 bg-gradient-dark opacity-60" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
              <div className="text-xs uppercase tracking-widest opacity-80">Compromiso</div>
              <div className="mt-2 font-display text-2xl font-bold">Cada detalle cuenta.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 mt-32">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-dark text-primary-foreground p-12 md:p-16 text-center shadow-elegant">
          <Workflow className="h-10 w-10 mx-auto" style={{ color: "oklch(0.78 0.17 155)" }} />
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">¿Listos para integrar tu próximo proyecto?</h2>
          <p className="mt-4 opacity-80 max-w-xl mx-auto">
            Hablemos de tu reto. Te respondemos con un análisis preliminar en 48 horas.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:scale-105 transition-smooth"
            style={{ color: "oklch(0.32 0.06 195)" }}
          >
            Iniciar conversación <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
