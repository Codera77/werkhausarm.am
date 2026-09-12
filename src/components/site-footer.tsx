"use client";

import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { tCategory } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";

const footerCategories = ["Living Room", "Bedroom", "Dining", "Decor"] as const;

export function SiteFooter() {
  const { t, locale } = useI18n();

  return (
    <footer className="border-t border-stone-200 bg-[#ebe6df] px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SiteLogo imageClassName="h-14 w-14" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
            {t("footer.blurb")}
          </p>
          <p className="mt-5 text-sm text-stone-500">
            {t("footer.location")}
            <br />
            hello@lumahome.am
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            {t("footer.aboutUs")}
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>
              <Link href="/about" className="hover:text-stone-900">
                {t("footer.ourStory")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-stone-900">
                {t("footer.philosophy")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-stone-900">
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
                <Link href="/products" className="hover:text-stone-900">
                  {tCategory(locale, category)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            {t("footer.newsletter")}
          </p>
          <form className="flex border border-stone-300 bg-white">
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-stone-400"
            />
            <button
              type="submit"
              className="bg-stone-900 px-4 text-[11px] uppercase tracking-[0.14em] text-white"
            >
              {t("footer.join")}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-stone-300/70 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("footer.rights")}</p>
        <LanguageSwitcher scrolled className="text-stone-600" />
      </div>
    </footer>
  );
}
