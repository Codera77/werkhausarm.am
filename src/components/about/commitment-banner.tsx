"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { aboutCommitment } from "@/lib/data";

export function CommitmentBanner() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative flex min-h-[360px] items-center justify-center overflow-hidden md:min-h-[440px]"
      >
        <Image
          src={aboutCommitment.image}
          alt="Bright living room with blue lounge chairs"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/40" />
        <h2 className="relative z-10 max-w-3xl px-6 text-center font-serif text-3xl leading-snug text-white md:text-5xl md:leading-tight">
          {aboutCommitment.title}
        </h2>
      </motion.div>
    </section>
  );
}
