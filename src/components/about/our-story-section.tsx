"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutStory } from "@/lib/data";

export function OurStorySection() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative aspect-square overflow-hidden bg-stone-200 md:order-first"
        >
          <Image
            src={aboutStory.image}
            alt="Luma Home atelier interior detail"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeInOut" }}
        >
          <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">
            {aboutStory.title}
          </h2>
          <p className="mt-4 text-base text-stone-500 md:text-lg">
            {aboutStory.subtitle}
          </p>
          <p className="mt-6 text-[15px] leading-7 text-stone-600">
            {aboutStory.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
