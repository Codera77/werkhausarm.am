"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function CraftedBanner() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative min-h-[420px] overflow-hidden md:min-h-[520px]"
      >
        <Image
          src="/abra/b7.jpg"
          alt="Bright architectural living room with curved sofa"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/20" />
        <div className="absolute inset-y-0 right-0 flex w-full items-center justify-end p-6 sm:p-10 md:w-[48%] md:p-14">
          <div className="w-full bg-white/95 p-8 shadow-lg backdrop-blur-sm md:p-10">
            <h3 className="font-serif text-3xl leading-tight text-stone-900 md:text-4xl">
              Crafted Just For You
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-stone-600">
              We understand that you want the perfect furniture for you and your
              home, and that is why we offer customized order service.
            </p>
            <Button
              asChild
              className="mt-7 rounded-none bg-stone-900 px-7 text-[11px] uppercase tracking-[0.18em] hover:bg-stone-800"
            >
              <Link href="#shop">Discover More</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
