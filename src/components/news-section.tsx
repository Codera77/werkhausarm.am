"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Package, Truck, Volume2, Building2, Ruler, Flag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";

const highlights = [
  { key: "news.tonus", icon: Volume2 },
  { key: "news.modern", icon: Building2 },
  { key: "news.pro", icon: Ruler },
  { key: "news.local", icon: Flag },
] as const;

const logistics = [
  { key: "news.soonShop", icon: MapPin },
  { key: "news.retailWholesale", icon: Package },
  { key: "news.deliveryAll", icon: Truck },
] as const;

export function NewsSection() {
  const { t } = useI18n();

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#14181e] px-6 py-20 text-white md:px-12 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(193,122,69,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c17a45]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4a574]">
            {t("news.eyebrow")}
          </p>
          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            {t("news.title")}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/70">
            {t("news.lead")}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/70">
            {t("news.body")}
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.key}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index, duration: 0.35 }}
                  className="flex items-start gap-3 text-sm text-white/85"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#c17a45]/40 text-[#d4a574]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="pt-1.5">{t(item.key)}</span>
                </motion.li>
              );
            })}
          </ul>

          <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/65">
            {t("news.deliveryNote")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {logistics.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/80 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-[#d4a574]" strokeWidth={1.5} />
                  {t(item.key)}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-white/55">{t("news.follow")}</p>

          <Button
            asChild
            className="mt-8 rounded-none bg-[#c17a45] px-8 text-[11px] uppercase tracking-[0.18em] text-white hover:bg-[#a86535]"
          >
            <Link href="/contact">{t("news.cta")}</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]"
        >
          <Image
            src="/dizart/banner-systems.jpg"
            alt={t("news.title")}
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14181e] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-[#14181e]/75 p-5 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4a574]">
              IdealDom · Tonus
            </p>
            <p className="mt-2 font-serif text-2xl text-white">
              DizArt.am
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
