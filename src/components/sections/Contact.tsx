"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contactSchema";

export default function Contact() {
  const t = useTranslations("Contact");
  const validation = useTranslations("validation");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(
    null
  );
  
  useEffect(() => {
  if (!status) return;

  const timer = setTimeout(() => {
    setStatus(null);
  }, 3000);

  return () => clearTimeout(timer);
}, [status]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (form: ContactFormData) => {
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error();
      }

      reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black py-22 pb-8 text-white"
    >
      <Container>
        <SectionTitle
          subtitle={t("subtitle")}
          title={
            <>
              {t("title")} Art
              <span className="text-red-600">Ale</span>
            </>
          }
          description={t("description")}
        />

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="relative mx-auto max-w-3xl space-y-6"
        >
          
   {status && (
  <div
    className={`contact-banner absolute left-1/2 top-4 z-50 w-full max-w-md -translate-y-1/2 rounded-2xl border px-6 py-5 text-center shadow-2xl ${
      status === "success"
        ? "border-green-500 bg-green-950/95"
        : "border-red-500 bg-red-950/95"
    }`}
  >
    <p
      className={`text-lg font-semibold ${
        status === "success"
          ? "text-green-300"
          : "text-red-300"
      }`}
    >
      {status === "success"
        ? `✓ ${t("alerts.success")}`
        : `✕ ${t("alerts.error")}`}
    </p>
  </div>
)}
          <div>
            <Input
              placeholder={t("name")}
              {...register("name")}
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {validation(errors.name.message!)}
              </p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder={t("email")}
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {validation(errors.email.message!)}
              </p>
            )}
          </div>

          <div>
            <Input
              placeholder={t("phone")}
              {...register("phone")}
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {validation(errors.phone.message!)}
              </p>
            )}
          </div>

          <div>
            <Input
              placeholder={t("company")}
              {...register("company")}
            />

            {errors.company && (
              <p className="mt-2 text-sm text-red-500">
                {validation(errors.company.message!)}
              </p>
            )}
          </div>

          <div>
            <Textarea
              rows={6}
              placeholder={t("message")}
              {...register("message")}
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {validation(errors.message.message!)}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                {t("button.sending")}
              </span>
            ) : (
               <>{t("button.send")}</>
            )}
          </Button>

          
        </form>
      </Container>
    </section>
  );
}