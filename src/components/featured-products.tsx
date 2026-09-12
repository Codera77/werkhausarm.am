"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ProductCard } from "@/components/ui/product-card";
import { featuredProducts } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All Items", "Sales", "Featured"] as const;

export function FeaturedProducts() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Sales");

  const products = useMemo(() => {
    if (filter === "Sales") {
      return featuredProducts.filter((product) => product.badge === "Sale");
    }
    if (filter === "Featured") {
      return featuredProducts.filter((product) => product.badge !== "Sale");
    }
    return featuredProducts;
  }, [filter]);

  return (
    <section id="products" className="px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
              Limited offers
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-stone-900 md:text-4xl">
              Flash Sale
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors",
                  filter === item
                    ? "bg-stone-900 text-white"
                    : "text-stone-500 hover:text-stone-900"
                )}
              >
                {item}
              </button>
            ))}
            <Link
              href="#shop"
              className="ml-2 hidden text-[11px] uppercase tracking-[0.16em] text-stone-500 hover:text-stone-900 sm:inline"
            >
              View all
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
