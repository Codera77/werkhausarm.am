"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

const slideCopyKeys = [
  {
    eyebrow: "hero.slide1Eyebrow",
    title: "hero.slide1Title",
    sub: "hero.slide1Sub",
    cta: "hero.slide1Cta",
    href: "/products",
  },
  {
    eyebrow: "hero.slide2Eyebrow",
    title: "hero.slide2Title",
    sub: "hero.slide2Sub",
    cta: "hero.slide2Cta",
    href: "/contact",
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
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-graphite md:min-h-screen">
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
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12]/80 via-[#0d0f12]/45 to-[#0d0f12]/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(193,122,69,0.18),transparent_45%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1440px] flex-col justify-center px-6 pb-24 pt-28 md:min-h-screen md:px-12 lg:px-16">
        <motion.div
          key={`${slide.id}-copy`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4a574]">
            {t(copy.eyebrow)}
          </p>
          <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t(copy.title)}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/75">
            {t(copy.sub)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-[#c17a45] px-8 text-[12px] uppercase tracking-[0.18em] text-white hover:bg-[#a86535]"
            >
              <Link href={copy.href}>{t(copy.cta)}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none border-white/70 bg-transparent px-8 text-[12px] uppercase tracking-[0.18em] text-white hover:bg-white hover:text-graphite"
            >
              <Link href={index === 0 ? "/contact" : "/products"}>
                {t(index === 0 ? "hero.slide2Cta" : "hero.slide1Cta")}
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-6 flex items-center gap-2 md:left-12 lg:left-16">
          <button
            type="button"
            onClick={prev}
            aria-label={t("common.previous")}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:border-[#c17a45] hover:bg-[#c17a45]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t("common.next")}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors hover:border-[#c17a45] hover:bg-[#c17a45]"
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
