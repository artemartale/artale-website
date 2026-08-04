"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Clients() {
  const t = useTranslations("Clients");

  const clients: {
    name: ReactNode;
    logo: string;
  }[] = [
    {
      name: (
        <>
          MSC
          <br />
          Cruises
        </>
      ),
      logo: "/logos/msc.png",
    },
    {
      name: (
        <>
          Costa
          <br />
          Cruises
        </>
      ),
      logo: "/logos/costa.png",
    },
    {
      name: (
        <>
          Club
          <br />
          Med
        </>
      ),
      logo: "/logos/clubmed.png",
    },
    {
      name: (
        <>
          {t("luxury")}
          <br />
          {t("hotels")}
        </>
      ),
      logo: "/logos/elexus.png",
    },
    {
      name: (
        <>
          {t("corporate")}
          <br />
          {t("events")}
        </>
      ),
      logo: "/logos/expo.png",
    },
    {
      name: (
        <>
          {t("international")}
          <br />
          {t("festivals")}
        </>
      ),
      logo: "/logos/ugt.png",
    },
  ];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-black py-10"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_60%)]" />

      <Container>
        <SectionTitle
          subtitle={t("subtitle")}
          title={
            <>
              {t("title")}{" "}
              <span className="text-red-600">
                {t("titleAccent")}
              </span>
            </>
          }
          description={t("description")}
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-transparent" />
              </div>

              {/* Shine */}
              <div className="absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/10 opacity-0 blur-xl transition-all duration-700 group-hover:left-[140%] group-hover:opacity-100" />

              <div className="relative flex h-64 flex-col items-center justify-center px-6">

                <div className="mb-8 flex h-24 w-full items-center justify-center rounded-2xl bg-white p-5 shadow-lg">
                  <Image
                    src={client.logo}
                    alt={
                      typeof client.name === "string"
                        ? client.name
                        : "Client Logo"
                    }
                    width={180}
                    height={70}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="flex h-16 items-center justify-center text-center text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-red-300">
                  {client.name}
                </h3>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}