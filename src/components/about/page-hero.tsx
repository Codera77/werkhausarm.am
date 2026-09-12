"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type PageHeroProps = {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  image?: string;
};

export function PageHero({
  title,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  image = "/abra/about/Breadcrumb.jpg",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden md:min-h-[48vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-stone-950/45" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-12 pt-28 md:px-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <nav className="mb-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/75">
            {breadcrumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span className="text-white/40">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
