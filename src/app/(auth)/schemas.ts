import { z } from "zod";

export const sendMagicAuthCodeSchema = z.object({
  email: z.string().email(),
});
export type TSendMagicAuthCodeSchema = z.infer<typeof sendMagicAuthCodeSchema>;
