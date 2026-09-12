"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Product } from "@/lib/data";
import { localizeProduct } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

type ProductTabsProps = {
  product: Product;
};

const tabs = [
  { id: "description", labelKey: "product.description" },
  { id: "shipping", labelKey: "product.shippingReturn" },
  { id: "reviews", labelKey: "product.reviews" },
] as const;

export function ProductTabs({ product }: ProductTabsProps) {
  const { t, locale } = useI18n();
  const localized = useMemo(
    () => localizeProduct(product, locale),
    [product, locale]
  );
  const [active, setActive] =
    useState<(typeof tabs)[number]["id"]>("description");

  return (
    <section className="mt-16 border-t border-stone-200 pt-10">
      <div className="flex flex-wrap gap-6 border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative pb-3 text-[12px] uppercase tracking-[0.16em] transition-colors",
              active === tab.id
                ? "text-stone-900"
                : "text-stone-400 hover:text-stone-700"
            )}
          >
            {t(tab.labelKey)}
            {active === tab.id ? (
              <motion.span
                layoutId="productTab"
                className="absolute inset-x-0 -bottom-px h-px bg-stone-900"
              />
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="py-8"
        >
          {active === "description" ? (
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-[15px] leading-7 text-stone-600">
                  {product.longDescription ?? localized.description}
                </p>
                <h3 className="mt-8 font-serif text-2xl text-stone-900">
                  {t("product.outstanding")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-stone-600">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-800" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900">
                  {t("product.supreme")}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-stone-600">
                  {t("product.infoBody")}
                </p>
                <h4 className="mt-8 text-[11px] uppercase tracking-[0.16em] text-stone-500">
                  {t("product.infoProduct")}
                </h4>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {t("product.infoBody")}
                </p>
              </div>
            </div>
          ) : null}

          {active === "shipping" ? (
            <div className="max-w-2xl space-y-4 text-[15px] leading-7 text-stone-600">
              <p>{t("product.shippingBody1")}</p>
              <p>{t("product.shippingBody2")}</p>
            </div>
          ) : null}

          {active === "reviews" ? (
            <div className="py-6 text-center">
              <p className="font-serif text-2xl text-stone-900">
                {t("product.customerReviews")}
              </p>
              <p className="mt-3 text-sm text-stone-500">
                {t("product.firstReview")}
              </p>
              <button
                type="button"
                className="mt-6 border border-stone-900 px-6 py-2.5 text-[11px] uppercase tracking-[0.16em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                {t("product.writeReview")}
              </button>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
