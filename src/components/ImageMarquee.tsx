import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-renewable.jpg";
import hero2 from "@/assets/hero-tech.jpg";
import iso from "@/assets/hyon-iso.jpg";
import vertical from "@/assets/hyon-vertical.jpg";
import horizontal from "@/assets/hyon-horizontal.jpg";

const slides = [
  {
    src: hero1,
    eyebrow: "Ingeniería integrada",
    title: "Una sola firma, todas las disciplinas",
    subtitle: "Civil · Mecánica · Eléctrica · Electrónica · Digital",
  },
  {
    src: hero2,
    eyebrow: "Tecnología aplicada",
    title: "Diseño con visión multidisciplinar",
    subtitle: "Del concepto al puesta en marcha",
  },
  {
    src: horizontal,
    eyebrow: "HYON",
    title: "Proyectos sin silos, equipos en sintonía",
    subtitle: "Coordinación total entre especialidades",
  },
  {
    src: iso,
    eyebrow: "Identidad",
    title: "Calidad y rigor en cada detalle",
    subtitle: "Estándares internacionales de ingeniería",
  },
  {
    src: vertical,
    eyebrow: "Compromiso",
    title: "Acompañamos cada fase del proyecto",
    subtitle: "Diagnóstico, diseño, ejecución y operación",
  },
];

export function ImageMarquee() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const current = slides[active];

  return (
    <div className="w-full bg-gradient-dark border-b border-border">
      {/* Main slide */}
      <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <img
              src={s.src}
              alt={s.title}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.18 0.05 195 / 0.85) 0%, oklch(0.18 0.05 195 / 0.4) 55%, transparent 100%)",
              }}
            />
          </div>
        ))}

        {/* Text overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div key={active} className="max-w-xl text-primary-foreground animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-80">
              {current.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight italic">
              {current.title}
            </h2>
            <p className="mt-3 text-sm md:text-base opacity-85 italic">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-4 right-6 md:right-10 z-10 font-display text-primary-foreground">
          <span className="text-2xl md:text-3xl font-bold" style={{ color: "oklch(0.78 0.17 155)" }}>
            {String(active + 1).padStart(1, "0")}
          </span>
          <span className="text-sm opacity-70">/{total}</span>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur hover:bg-black/50 transition-smooth"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur hover:bg-black/50 transition-smooth"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="grid grid-cols-5 gap-1 md:gap-2 py-2 md:py-3">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative h-14 md:h-20 overflow-hidden rounded-md transition-smooth"
              aria-label={`Ir al slide ${i + 1}`}
            >
              <img src={s.src} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div
                className="absolute inset-0 transition-smooth"
                style={{
                  background:
                    i === active
                      ? "linear-gradient(180deg, oklch(0.72 0.17 155 / 0.45), oklch(0.32 0.06 195 / 0.45))"
                      : "oklch(0.18 0.05 195 / 0.55)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-1 md:p-2">
                <span
                  className={`text-[10px] md:text-xs font-semibold leading-tight text-left line-clamp-2 ${
                    i === active ? "text-white" : "text-white/70"
                  }`}
                >
                  {s.eyebrow}
                </span>
              </div>
              {i === active && (
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: "oklch(0.78 0.17 155)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
