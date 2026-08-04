"use client";

import { useTranslations } from "next-intl";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = [
    {
      value: "duration",
      q: t("items.duration.q"),
      a: t("items.duration.a"),
    },
    {
      value: "custom",
      q: t("items.custom.q"),
      a: t("items.custom.a"),
    },
    {
      value: "technical",
      q: t("items.technical.q"),
      a: t("items.technical.a"),
    },
    {
      value: "equipment",
      q: t("items.equipment.q"),
      a: t("items.equipment.a"),
    },
    {
      value: "setup",
      q: t("items.setup.q"),
      a: t("items.setup.a"),
    },
    {
      value: "experience",
      q: t("items.experience.q"),
      a: t("items.experience.a"),
    },
    {
      value: "cost",
      q: t("items.cost.q"),
      a: t("items.cost.a"),
    },
    {
      value: "outdoors",
      q: t("items.outdoors.q"),
      a: t("items.outdoors.a"),
    },
  ];

  return (
    <section className="bg-zinc-950 py-12 text-white">
      <Container>
        <SectionTitle
          subtitle={t("header.subtitle")}
          title={t.rich("header.title", {
  faq: (chunks) => (
    <span className="text-red-600">{chunks}</span>
  ),
})}
          description={t("header.description")}
        />

        <Accordion
          className="mx-auto max-w-3xl"
                  >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
            >
              <AccordionTrigger>
                {faq.q}
              </AccordionTrigger>

              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}