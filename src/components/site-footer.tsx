"use client";

import Link from "next/link";
import { Share2 } from "lucide-react";

import { SiteLogo } from "@/components/site-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { contactInfo, socialLinks } from "@/lib/data";
import { tCategory } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";

const footerCategories = [
  "Sound Insulation",
  "Construction",
  "Interior Systems",
  "Design Solutions",
] as const;

const social = [
  { href: socialLinks.facebook, label: "Facebook", icon: Share2 },
] as const;

export function SiteFooter() {
  const { t, locale } = useI18n();

  return (
    <footer className="border-t border-stone-200 bg-[#ebe8e4] px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <SiteLogo imageClassName="h-14 w-14" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
            {t("footer.blurb")}
          </p>
          <p className="mt-5 text-sm text-stone-500">
            {t("footer.location")}
            <br />
            <a
              href={`mailto:${contactInfo.email}`}
              className="transition-colors hover:text-[#c17a45]"
            >
              {contactInfo.email}
            </a>
            <br />
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-[#c17a45]"
            >
              {contactInfo.phone}
            </a>
          </p>
          <div className="mt-5 flex items-center gap-2">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center border border-stone-300 text-stone-600 transition-colors hover:border-[#c17a45] hover:text-[#c17a45]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            {t("footer.aboutUs")}
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>
              <Link href="/about" className="hover:text-[#c17a45]">
                {t("footer.ourStory")}
              </Link>
            </li>
            <li>
              <Link href="/#news" className="hover:text-[#c17a45]">
                {t("footer.philosophy")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#c17a45]">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            {t("common.categories")}
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            {footerCategories.map((category) => (
              <li key={category}>
                <Link href="/products" className="hover:text-[#c17a45]">
                  {tCategory(locale, category)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-stone-300/70 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("footer.rights")}</p>
        <LanguageSwitcher scrolled className="text-stone-600" />
      </div>
    </footer>
  );
}
