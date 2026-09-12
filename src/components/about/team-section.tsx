"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe2, Share2, AtSign } from "lucide-react";

import { aboutTeam } from "@/lib/data";

export function TeamSection() {
  const [start, setStart] = useState(0);
  const visibleCount = 2;
  const members = aboutTeam.members;

  const prev = () =>
    setStart((current) =>
      current === 0 ? Math.max(members.length - visibleCount, 0) : current - 1
    );
  const next = () =>
    setStart((current) =>
      current >= members.length - visibleCount ? 0 : current + 1
    );

  const visible = Array.from({ length: Math.min(visibleCount, members.length) }, (_, offset) => {
    const member = members[(start + offset) % members.length];
    return { member, key: `${member.id}-${start}-${offset}` };
  });

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
            {aboutTeam.title}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-stone-600">
            {aboutTeam.description}
          </p>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous team members"
              className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900 hover:bg-stone-900 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next team members"
              className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900 hover:bg-stone-900 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map(({ member, key }) => (
              <motion.article
                key={key}
                layout
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group"
              >
                <div className="relative aspect-[433/475] overflow-hidden bg-stone-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-stone-900/70 py-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <a href="#" aria-label="Share" className="text-white hover:text-stone-200">
                      <Share2 className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Website" className="text-white hover:text-stone-200">
                      <Globe2 className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label="Email" className="text-white hover:text-stone-200">
                      <AtSign className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h3 className="mt-4 text-lg text-stone-900">{member.name}</h3>
                <p className="text-sm uppercase tracking-[0.14em] text-stone-500">
                  {member.role}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
