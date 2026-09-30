"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { collections } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

const collectionNameKeys: Record<string, string> = {
  "tonus-systems": "collections.sofaLiving",
  idealdom: "collections.chicResidence",
  "acoustic-layers": "collections.dreamyDecor",
  "design-finishes": "collections.fineFurnish",
};

export function CollectionsSection() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-stone-900 md:text-4xl">
            {t("collections.title")}
          </h2>
          <Link
            href="#shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-stone-900"
          >
            {t("common.exploreAll")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {collections.map((collection, index) => {
            const name = t(
              collectionNameKeys[collection.id] ?? collection.name
            );
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeInOut",
                }}
              >
                <Link href={collection.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200/70">
                    <Image
                      src={collection.image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm tracking-wide text-stone-800">
                    {name}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 hidden justify-end gap-2 md:flex">
          <button
            type="button"
            aria-label={t("common.previous")}
            className="flex h-9 w-9 items-center justify-center border border-stone-300 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={t("common.next")}
            className="flex h-9 w-9 items-center justify-center border border-stone-300 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
