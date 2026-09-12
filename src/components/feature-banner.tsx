"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";

type FeatureBannerProps = {
  eyebrowKey?: string;
  titleKey: string;
  bodyKey: string;
  ctaKey: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function FeatureBanner({
  eyebrowKey,
  titleKey,
  bodyKey,
  ctaKey,
  image,
  imageAlt,
  reverse = false,
}: FeatureBannerProps) {
  const { t } = useI18n();

  return (
    <section className="px-6 py-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto grid max-w-[1440px] overflow-hidden md:grid-cols-2"
      >
        <div
          className={`relative min-h-[320px] md:min-h-[460px] ${
            reverse ? "md:order-2" : ""
          }`}
        >
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="50vw" />
        </div>
        <div
          className={`flex flex-col justify-center bg-white px-8 py-12 md:px-14 md:py-16 ${
            reverse ? "md:order-1" : ""
          }`}
        >
          {eyebrowKey ? (
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
              {t(eyebrowKey)}
            </p>
          ) : null}
          <h3 className="font-serif text-3xl leading-tight text-stone-900 md:text-4xl">
            {t(titleKey)}
          </h3>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-stone-600">
            {t(bodyKey)}
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-8 w-fit rounded-none border-stone-900 px-7 text-[11px] uppercase tracking-[0.18em]"
          >
            <Link href="#shop">{t(ctaKey)}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
