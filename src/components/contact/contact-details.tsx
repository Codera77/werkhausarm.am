"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { contactInfo } from "@/lib/data";

const infoItems = [
  {
    icon: MapPin,
    label: contactInfo.addressLabel,
    content: (
      <>
        <p>{contactInfo.addressLine}</p>
        <p className="mt-2 text-stone-500">{contactInfo.address}</p>
      </>
    ),
  },
  {
    icon: Phone,
    label: contactInfo.phoneLabel,
    content: (
      <a
        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
        className="transition-colors hover:text-stone-900"
      >
        {contactInfo.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    label: contactInfo.emailLabel,
    content: (
      <a
        href={`mailto:${contactInfo.email}`}
        className="transition-colors hover:text-stone-900"
      >
        {contactInfo.email}
      </a>
    ),
  },
  {
    icon: Clock,
    label: contactInfo.hoursLabel,
    content: (
      <>
        <p>{contactInfo.hoursWeekday}</p>
        <p>{contactInfo.hoursWeekend}</p>
      </>
    ),
  },
] as const;

export function ContactMap() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full overflow-hidden"
    >
      <div className="relative aspect-[21/9] min-h-[240px] w-full md:min-h-[360px]">
        <iframe
          title="Yerevan location map"
          src={contactInfo.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={contactInfo.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-stone-800 shadow-md backdrop-blur-sm transition-colors hover:bg-stone-900 hover:text-white"
        >
          Open Yerevan map
        </a>
      </div>
    </motion.section>
  );
}

export function ContactDetails() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="font-serif text-4xl text-stone-900 md:text-5xl"
      >
        {contactInfo.title}
      </motion.h1>

      <div className="mt-10 space-y-8">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
                ease: "easeInOut",
              }}
              className="flex gap-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-800">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                  {item.label}
                </p>
                <div className="mt-1.5 text-[15px] leading-relaxed text-stone-700">
                  {item.content}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
