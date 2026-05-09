import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  nombre: z.string(),
  empresa: z.string().optional(),
  telefono: z.string().optional(),
  email: z.string(),
  mensaje: z.string(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    console.log("CONTACTO:", data);

    return { ok: true };
  });