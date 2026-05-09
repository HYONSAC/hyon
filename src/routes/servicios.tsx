import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Cpu, Building2, Calculator, FileSearch, Sun } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — HYON S.A.C." },
      { name: "description", content: "Consultorías, tecnología, civil y contabilidad. HYON S.A.C. integra ingeniería electrónica, telecomunicaciones, eléctrica, mecánica y civil bajo una sola firma." },
      { property: "og:title", content: "Servicios — HYON S.A.C." },
      { property: "og:description", content: "Consultorías, tecnología, obra civil y contabilidad para sector público y privado." },
    ],
  }),
  component: Servicios,
});

const areas = [
  {
    icon: FileSearch,
    title: "Consultorías",
    desc: "Consultorías y expedientes técnicos para el sector público y privado, integrando todas las ingenierías:",
    features: [
      "Ingeniería Electrónica",
      "Ingeniería de Telecomunicaciones",
      "Ingeniería Eléctrica",
      "Ingeniería Mecánica",
      "Ingeniería Civil",
      "Integración multidisciplinar",
    ],
  },
  {
    icon: Cpu,
    title: "Tecnología",
    desc: "Dentro del área, se impulsa una visión estratégica orientada a la integración y aprovechamiento continuo de tecnologías emergentes del mercado, con el propósito de optimizar, innovar y elevar la calidad en el diseño de proyectos y expedientes.",
    desc2: "Nos posicionamos como aliados estratégicos del sector público y privado, ofreciendo un portafolio integral de soluciones en equipos eléctricos y electrónicos, alineado a las exigencias y dinámicas del mercado actual: laptops, computadores, sistemas biométricos entre otros equipos que se requieran en el mercado.",
    features: [
      "Sistemas de seguridad",
      "Circuitos de cámaras (CCTV)",
      "Semaforización inteligente",
      "Automatización de sistemas mecánicos",
      "Cercos eléctricos",
      "Pozos a tierra",
      "Domótica — automatización de edificios",
      "Sistemas e instalaciones eléctricas",
      "Sistemas de luminarias",
      "Redes alámbricas e inalámbricas",
      "Redes de fibra óptica",
      "Desarrollo de software",
      "Desarrollo de hardware",
      "Mantenimiento general y preventivo",
    ],
  },
  {
    icon: Sun,
    title: "Sistemas de energías renovables",
    desc: "Como parte de nuestro portafolio de servicios, desarrollamos e implementamos soluciones en energía solar fotovoltaica, que incluyen el análisis de viabilidad técnica, diseño personalizado, suministro de equipos, instalación, integración con sistemas existentes y mantenimiento. Este servicio está orientado a optimizar el consumo energético, reducir costos operativos y contribuir a la sostenibilidad ambiental de nuestros clientes del sector público y privado.",
    features: [
      "Análisis de viabilidad técnica",
      "Diseño personalizado",
      "Suministro de equipos",
      "Instalación e integración",
      "Mantenimiento",
      "Energía solar fotovoltaica",
    ],
  },
  {
    icon: Building2,
    title: "Civil",
    desc: "Especialistas para el sector público y privado en proyectos, expedientes, levantamientos, implementación y mantenimiento.",
    features: [
      "Mantenimiento de jardines y áreas verdes",
      "Pintura y reparación de carpintería en madera",
      "Pintura de espacios físicos",
      "Acabados en general",
      "Limpieza de fachadas",
      "Reparaciones menores",
      "Trabajos de aluminio y vidrios",
      "Trabajos de mampostería",
      "Trabajos de ornamentación",
      "Trabajos hidráulicos y sanitarios",
      "Diseño estructural en concreto, acero y madera",
      "Evaluación y reforzamiento estructural",
      "Construcción de estructuras en concreto y metálicas",
      "Diseño de instalaciones sanitarias y eléctricas",
      "Levantamientos topográficos",
      "Revestimientos y acabados",
      "Habilitación de estructuras metálicas",
      "Elaboración de expedientes y fichas técnicas",
    ],
  },
  {
    icon: Calculator,
    title: "Contabilidad",
    desc: "Servicio integral de asesoría contable, tributaria y laboral para empresas y profesionales.",
    features: [
      "Asesoría y consultoría contable y tributaria",
      "Declaraciones a SUNAT (PDT, PLAME, PLE, entre otros)",
      "Análisis de procesos contables",
      "Elaboración de estados financieros",
      "Asesoría laboral y cálculo de planilla mensual",
      "Cálculo de beneficios sociales",
      "Atención de notificaciones SUNAFIL",
      "Balances contables",
    ],
  },
];

function Servicios() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold">Nuestros <span className="text-gradient">servicios</span></h1>
        <p className="mt-5 text-muted-foreground text-lg">
          En HYON S.A.C. integramos consultoría, tecnología, ingeniería civil y contabilidad. Nuestros profesionales también capacitan en el uso adecuado de los equipos implementados y supervisan los proyectos.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {areas.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-smooth"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">{s.title}</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {"desc2" in s && s.desc2 && (
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc2}</p>
            )}
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
        >
          Solicitar propuesta <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
