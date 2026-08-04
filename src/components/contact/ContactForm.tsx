"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactShortSchema,
  type ContactShortFormData,
} from "@/lib/contactShortSchema";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const validation = useTranslations("validation");

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "success" | "error" | null
  >(null);

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
  } = useForm<ContactShortFormData>({
    resolver: zodResolver(contactShortSchema),
    mode: "onBlur",
  });

  const onSubmit = async (
    form: ContactShortFormData
  ) => {
    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: "",
            company: "",
            message: form.message,
          }),
        }
      );

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
    <section className="mx-auto max-w-2xl px-6 py-10">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
        {status && (
  <div
    className={`contact-banner absolute left-1/2 top-4 z-50 w-full max-w-md -translate-y-1/2 rounded-2xl border px-6 py-5 text-center shadow-2xl ${
      status === "success"
        ? "border-green-500 bg-green-950/95"
        : "border-red-500 bg-red-950/95"
    }`}
  >
    <p
      className={`text-xl font-bold ${
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
        <h2 className="text-2xl font-black">
          {t("title")}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-4"
        >
          

          <div>
            <input
              type="text"
              autoComplete="name"
              placeholder={t("name")}
              {...register("name")}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition-colors focus:border-red-500"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {validation(
                  errors.name.message!
                )}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              autoComplete="email"
              placeholder={t("email")}
              {...register("email")}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition-colors focus:border-red-500"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {validation(
                  errors.email.message!
                )}
              </p>
            )}
          </div>
              <div>
            <textarea
              rows={4}
              autoComplete="off"
              placeholder={t("message")}
              {...register("message")}
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm outline-none transition-colors focus:border-red-500"
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {validation(
                  errors.message.message!
                )}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            aria-busy={loading}
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                {t("button.sending")}
              </span>
            ) : (
              t("button.send")
            )}
          </button>
        </form>
      </div>
    </section>
  );
}