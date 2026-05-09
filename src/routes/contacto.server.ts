import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  nombre: z.string().min(1).max(200),
  empresa: z.string().max(200).optional().default(""),
  telefono: z.string().max(50).optional().default(""),
  email: z.string().email().max(200),
  mensaje: z.string().min(1).max(5000),
});

// 👉 Pega aquí tu Apps Script URL
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzJ6_4nNBU_fRC3QZUfGMEqamfyDkvLe95QKVgX9G-mVCGD-F_EnOPH2IUHz5Qq8G0v/exec";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    // 🔒 SERVER ONLY

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        empresa: data.empresa,
        telefono: data.telefono,
        email: data.email,
        mensaje: data.mensaje,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Apps Script error:", res.status, text);
      throw new Error(`Error al guardar (${res.status})`);
    }

    return { ok: true };
  });