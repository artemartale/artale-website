import { z } from "zod";

export const contactSchema = z.object({
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

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) =>
        !value ||
        /^[+\d()\-\s]{6,20}$/.test(value),
      "phoneInvalid"
    ),

  company: z
    .string()
    .trim()
    .max(80, "companyMax")
    .optional(),

  message: z
    .string()
    .trim()
    .min(20, "messageMin")
    .max(3000, "messageMax"),
});

export type ContactFormData = z.infer<
  typeof contactSchema
>;