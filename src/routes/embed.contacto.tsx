import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send } from "lucide-react";
import { submitContact } from "./embed.contacto.server";

export const Route = createFileRoute("/embed/contacto")({
  component: EmbedContacto,
});

function EmbedContacto() {
  const [status, setStatus] =
    useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const fd = new FormData(e.currentTarget);

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
          (e.target as HTMLFormElement).reset();
        } catch (err) {
          setStatus("error");
          setErrorMsg(
            err instanceof Error ? err.message : "Error"
          );
        }
      }}
    >
      <input name="nombre" placeholder="Nombre" required />
      <input name="email" placeholder="Email" required />
      <textarea name="mensaje" placeholder="Mensaje" required />

      {status === "error" && (
        <p style={{ color: "red" }}>{errorMsg}</p>
      )}

      <button type="submit">
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}