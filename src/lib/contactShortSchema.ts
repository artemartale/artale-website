import { z } from "zod";

export const contactShortSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "nameMin")
    .max(80, "nameMax")
    .refine(
      (value) => !/^\d+$/.test(value),
      "nameNumbers"
    ),

  email: z
    .string()
    .trim()
    .email("emailInvalid"),

  message: z
    .string()
    .trim()
    .min(20, "messageMin")
    .max(3000, "messageMax"),
});

export type ContactShortFormData = z.infer<
  typeof contactShortSchema
>;