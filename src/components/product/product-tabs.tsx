"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProductTabsProps = {
  product: Product;
};

const tabs = ["Description", "Shipping & return", "Customer reviews"] as const;

export function ProductTabs({ product }: ProductTabsProps) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Description");

  return (
    <section className="mt-16 border-t border-stone-200 pt-10">
      <div className="flex flex-wrap gap-6 border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "relative pb-3 text-[12px] uppercase tracking-[0.16em] transition-colors",
              active === tab ? "text-stone-900" : "text-stone-400 hover:text-stone-700"
            )}
          >
            {tab}
            {active === tab ? (
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
          {active === "Description" ? (
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-[15px] leading-7 text-stone-600">
                  {product.longDescription}
                </p>
                <h3 className="mt-8 font-serif text-2xl text-stone-900">
                  Outstanding Features
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
                  Product Supreme Quality
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-stone-600">
                  Designed for lasting comfort with quiet, considered materials.
                  Flexible proportions adapt to multiple rooms while keeping a
                  calm, modern presence.
                </p>
                <h4 className="mt-8 text-[11px] uppercase tracking-[0.16em] text-stone-500">
                  Information Product
                </h4>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Flexible design for many uses and spaces. Fabric and finish
                  selected for everyday wear, with care instructions included in
                  every order.
                </p>
              </div>
            </div>
          ) : null}

          {active === "Shipping & return" ? (
            <div className="max-w-2xl space-y-4 text-[15px] leading-7 text-stone-600">
              <p>
                For all orders exceeding a value of 100,000 AMD shipping is
                offered for free. Otherwise, standard shipping charges apply.
              </p>
              <p>
                Estimate delivery times: 12–26 days (International), 3–6 days
                (Armenia). Return within 45 days of purchase. Duties & taxes are
                non-refundable.
              </p>
            </div>
          ) : null}

          {active === "Customer reviews" ? (
            <div className="py-6 text-center">
              <p className="font-serif text-2xl text-stone-900">
                Customer Reviews
              </p>
              <p className="mt-3 text-sm text-stone-500">
                Be the first to write a review
              </p>
              <button
                type="button"
                className="mt-6 border border-stone-900 px-6 py-2.5 text-[11px] uppercase tracking-[0.16em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                Write a review
              </button>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
