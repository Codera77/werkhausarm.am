"use client";

import { motion } from "framer-motion";

import { philosophyText } from "@/lib/data";

export function QuoteSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
      >
        <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
          Our Philosophy
        </h2>
        <div className="space-y-5 text-[15px] leading-7 text-stone-600 md:pt-2">
          <p>{philosophyText}</p>
          <p>
            From sculptural seating to quiet storage, every collection is made
            to settle into daily life — not compete with it.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
