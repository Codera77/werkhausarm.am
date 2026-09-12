"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

const slideCopyKeys = [
  {
    eyebrow: "hero.slide1Eyebrow",
    title: "hero.slide1Title",
    cta: "hero.slide1Cta",
  },
  {
    eyebrow: "hero.slide2Eyebrow",
    title: "hero.slide2Title",
    cta: "hero.slide2Cta",
  },
] as const;

export function HeroSection() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const copy = slideCopyKeys[index] ?? slideCopyKeys[0];

  const prev = () =>
    setIndex((current) => (current === 0 ? heroSlides.length - 1 : current - 1));
  const next = () =>
    setIndex((current) => (current === heroSlides.length - 1 ? 0 : current + 1));

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-stone-900 md:min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/35" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1440px] flex-col justify-center px-6 pb-24 pt-28 md:min-h-screen md:px-12 lg:px-16">
        <motion.div
          key={`${slide.id}-copy`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            {t(copy.eyebrow)}
          </p>
          <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t(copy.title)}
          </h1>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-none border-white/80 bg-transparent px-8 text-[12px] uppercase tracking-[0.18em] text-white hover:bg-white hover:text-stone-900"
          >
            {t(copy.cta)}
          </Button>
        </motion.div>

        <div className="absolute bottom-8 left-6 flex items-center gap-2 md:left-12 lg:left-16">
          <button
            type="button"
            onClick={prev}
            aria-label={t("common.previous")}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white hover:text-stone-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t("common.next")}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white hover:text-stone-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="ml-3 text-xs tracking-[0.2em] text-white/70">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
