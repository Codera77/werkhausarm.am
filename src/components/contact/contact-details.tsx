"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Share2,
} from "lucide-react";

import { contactInfo, socialLinks } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

export function ContactMap() {
  const { t } = useI18n();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full overflow-hidden"
    >
      <div className="relative aspect-[21/9] min-h-[240px] w-full md:min-h-[360px]">
        <iframe
          title={t("contact.openMap")}
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
          className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-stone-800 shadow-md backdrop-blur-sm transition-colors hover:bg-[#c17a45] hover:text-white"
        >
          {t("contact.openMap")}
        </a>
      </div>
    </motion.section>
  );
}

export function ContactDetails() {
  const { t } = useI18n();

  const infoItems = [
    {
      icon: MapPin,
      label: t("contact.addressLabel"),
      content: (
        <>
          <p>{t("contact.addressLine")}</p>
          <p className="mt-2 text-stone-500">{t("contact.address")}</p>
        </>
      ),
    },
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      content: (
        <a
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-[#c17a45]"
        >
          {contactInfo.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      content: (
        <a
          href={`mailto:${contactInfo.email}`}
          className="transition-colors hover:text-[#c17a45]"
        >
          {contactInfo.email}
        </a>
      ),
    },
    {
      icon: Clock,
      label: t("contact.hoursLabel"),
      content: (
        <>
          <p>{t("contact.hoursWeekday")}</p>
          <p>{t("contact.hoursWeekend")}</p>
        </>
      ),
    },
  ] as const;

  const messengers = [
    { href: socialLinks.facebook, label: "Facebook", icon: Share2 },
  ] as const;

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="font-serif text-4xl text-stone-900 md:text-5xl"
      >
        {t("contact.title")}
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

      <div className="mt-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
          {t("footer.follow")}
        </p>
        <div className="mt-3 flex gap-2">
          {messengers.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-[#c17a45] hover:text-[#c17a45]"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
