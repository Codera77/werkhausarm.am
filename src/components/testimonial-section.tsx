"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="border-y border-stone-200/80 bg-white px-6 py-20 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-serif text-2xl leading-relaxed text-stone-700 md:text-3xl">
          &ldquo;Luma Home transformed our living room into a calm, collected
          space. Soft wood tones, quiet details, and furniture that feels
          made for everyday life.&rdquo;
        </p>
        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
          Ann Smith — Photographer
        </p>
      </motion.div>
    </section>
  );
}
