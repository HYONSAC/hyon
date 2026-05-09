import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContact } from "./contacto.server";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — HYON" },
      {
        name: "description",
        content:
          "Hablemos de tu próximo proyecto de ingeniería. Respondemos en menos de 48 horas.",
      },
      { property: "og:title", content: "Contacto — HYON" },
      {
        property: "og:description",
        content:
          "Contáctanos para iniciar tu proyecto de ingeniería integrada.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [status, setStatus] =
    useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hablemos de tu{" "}
          <span className="text-gradient">proyecto</span>
        </h1>
        <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
          Cuéntanos qué tienes en mente. Te respondemos con un análisis
          preliminar en 48 horas.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            { icon: Phone, title: "Teléfono / WhatsApp", value: "+51 943 775 111" },
            { icon: Mail, title: "Email", value: "contacto@hyon.pe" },
            { icon: MapPin, title: "Oficina", value: "Miraflores — Arequipa, Perú" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 hover:shadow-elegant transition-smooth"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {c.title}
                </div>
                <div className="mt-1 font-medium">{c.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (status === "sending") return;

            const form = e.currentTarget;
            const fd = new FormData(form);

            setStatus("sending");
            setErrorMsg("");

            try {
              await submitContact({
                data: {
                  nombre: String(fd.get("nombre") ?? ""),
                  empresa: String(fd.get("empresa") ?? ""),
                  telefono: String(fd.get("telefono") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  mensaje: String(fd.get("mensaje") ?? ""),
                },
              });

              setStatus("sent");
              form.reset();
            } catch (err) {
              setStatus("error");
              setErrorMsg(
                err instanceof Error
                  ? err.message
                  : "Error al enviar"
              );
            }
          }}
          className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5 shadow-elegant"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Nombre</label>
              <input
                required
                name="nombre"
                className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Empresa</label>
              <input
                name="empresa"
                className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-2.5 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Celular</label>
            <input
              name="telefono"
              className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              required
              name="email"
              type="email"
              className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Cuéntanos sobre tu proyecto
            </label>
            <textarea
              required
              name="mensaje"
              rows={5}
              className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-2.5 text-sm resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-destructive">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-smooth disabled:opacity-60"
          >
            {status === "sent"
              ? "¡Mensaje enviado!"
              : status === "sending"
              ? "Enviando..."
              : (
                <>
                  Enviar mensaje <Send className="h-4 w-4" />
                </>
              )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}