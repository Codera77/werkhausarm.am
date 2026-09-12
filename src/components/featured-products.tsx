"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/ui/product-card";
import { featuredProducts } from "@/lib/data";
import { localizeProduct } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", labelKey: "home.allItems" },
  { id: "sales", labelKey: "home.sales" },
  { id: "featured", labelKey: "home.featured" },
] as const;

export function FeaturedProducts() {
  const { t, locale } = useI18n();
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("sales");

  const products = useMemo(() => {
    const localized = featuredProducts.map((product) =>
      localizeProduct(product, locale)
    );
    if (filter === "sales") {
      return localized.filter((product) => product.badge === "Sale");
    }
    if (filter === "featured") {
      return localized.filter((product) => product.badge !== "Sale");
    }
    return localized;
  }, [filter, locale]);

  return (
    <section id="products" className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
              {t("home.limitedOffers")}
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-stone-900 md:text-4xl">
              {t("home.flashSale")}
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={cn(
                  "px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors",
                  filter === item.id
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {t(item.labelKey)}
              </button>
            ))}
            <Link
              href="#shop"
              className="ml-2 hidden text-[11px] uppercase tracking-[0.16em] text-stone-500 hover:text-stone-900 sm:inline"
            >
              {t("common.viewAll")}
            </Link>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4"
        >
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
