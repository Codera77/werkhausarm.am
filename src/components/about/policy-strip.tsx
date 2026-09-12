"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  type LucideIcon,
} from "lucide-react";

import { aboutPolicies } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  shipping: Truck,
  payments: ShieldCheck,
  returns: RotateCcw,
  support: Headphones,
};

export function PolicyStrip() {
  return (
    <section className="px-6 py-14 md:px-12 md:py-16 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {aboutPolicies.map((policy, index) => {
          const Icon = icons[policy.id] ?? Truck;
          return (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeInOut" }}
              className="flex flex-col items-center px-4 text-center lg:border-r lg:border-stone-200 lg:last:border-r-0"
            >
              <Icon className="mb-4 h-8 w-8 text-stone-800" strokeWidth={1.25} />
              <h3 className="text-sm font-medium tracking-wide text-stone-900">
                {policy.title}
              </h3>
              <p className="mt-1 text-sm text-stone-500">{policy.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
