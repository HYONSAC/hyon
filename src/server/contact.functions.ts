import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SPREADSHEET_ID = "1EjaC9foI7XEvP3vlznD6fb71tw67W_KaPoK1v9g9zqE";
const RANGE = "Sheet1!A:F";

const ContactSchema = z.object({
  nombre: z.string().min(1).max(200),
  empresa: z.string().max(200).optional().default(""),
  telefono: z.string().max(50).optional().default(""),
  email: z.string().email().max(200),
  mensaje: z.string().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
 

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY no está configurado");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY no está configurado");

    const url = `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[
          new Date().toISOString(),
          data.nombre,
          data.empresa ?? "",
          data.telefono ?? "",
          data.email,
          data.mensaje,
        ]],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Sheets append failed", res.status, text);
      throw new Error(`Error al guardar (${res.status})`);
    }
    console.log("CONTACTO RECIBIDO:", data);
    return { ok: true };
  });