"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Volume2,
  Building2,
  Layers,
  Briefcase,
  Palette,
  Tag,
  ChevronRight,
  X,
  Search,
  Heart,
  User,
} from "lucide-react";

import { SiteLogo } from "@/components/site-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { categories, navLinks } from "@/lib/data";
import { tCategory } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";

const iconMap = {
  volume: Volume2,
  building: Building2,
  layers: Layers,
  briefcase: Briefcase,
  palette: Palette,
  tag: Tag,
  home: Building2,
} as const;

const navKeyByHref: Record<string, string> = {
  "/": "nav.home",
  "/products": "nav.products",
  "/about": "nav.about",
  "/contact": "nav.contact",
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panel = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 32,
      mass: 0.9,
    },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const list = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function MobileMenu({ open, onClose, onOpenSearch }: MobileMenuProps) {
  const { t, locale } = useI18n();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <motion.button
            type="button"
            aria-label={t("common.closeMenu")}
            className="absolute inset-0 bg-stone-950/50 backdrop-blur-[6px]"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={t("common.menu")}
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-y-0 left-0 flex w-[min(100%,360px)] flex-col bg-[#f7f4ef] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-stone-200/80 px-5 py-4">
              <SiteLogo imageClassName="h-11 w-11" />
              <button
                type="button"
                onClick={onClose}
                aria-label={t("common.close")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <motion.nav
                variants={list}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                <motion.p
                  variants={item}
                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400"
                >
                  {t("common.menu")}
                </motion.p>
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={item}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-2xl px-3 py-3.5 transition-colors hover:bg-white"
                    >
                      <span className="font-serif text-2xl text-stone-900">
                        {t(navKeyByHref[link.href] ?? link.label)}
                      </span>
                      <ChevronRight className="h-4 w-4 text-stone-300 transition-transform group-hover:translate-x-0.5 group-hover:text-stone-600" />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                variants={list}
                initial="hidden"
                animate="visible"
                className="mt-8 border-t border-stone-200/80 pt-6"
              >
                <motion.p
                  variants={item}
                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400"
                >
                  {t("common.categories")}
                </motion.p>
                <div className="space-y-1.5">
                  {categories.map((category) => {
                    const Icon = iconMap[category.icon];
                    return (
                      <motion.div key={category.id} variants={item}>
                        <Link
                          href="/products"
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-white"
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm ring-1 ring-stone-200/80">
                            <Icon className="h-4 w-4" strokeWidth={1.5} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium text-stone-900">
                              {tCategory(locale, category.label)}
                            </span>
                            <span className="block text-[11px] text-stone-400">
                              {t("sidebar.itemsCount", {
                                n: category.subcategories.length,
                              })}
                            </span>
                          </span>
                          <ChevronRight className="h-4 w-4 text-stone-300" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35, ease: "easeOut" }}
              className="border-t border-stone-200/80 bg-white/70 px-5 py-4 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center justify-between rounded-2xl bg-stone-100 px-3 py-2">
                <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500">
                  {t("header.language")}
                </span>
                <LanguageSwitcher scrolled compact={false} className="text-stone-800" />
              </div>
              <div className="mb-3 grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSearch();
                  }}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-stone-100 px-2 py-3 text-stone-700 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.12em]">
                    {t("common.search")}
                  </span>
                </button>
                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-stone-100 px-2 py-3 text-stone-700 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.12em]">
                    {t("common.wishlist")}
                  </span>
                </Link>
                <Link
                  href="/login"
                  onClick={onClose}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-stone-100 px-2 py-3 text-stone-700 transition-colors hover:bg-stone-900 hover:text-white"
                >
                  <User className="h-4 w-4" />
                  <span className="text-[10px] uppercase tracking-[0.12em]">
                    {t("common.account")}
                  </span>
                </Link>
              </div>
              <Link
                href="/products"
                onClick={onClose}
                className="flex h-12 items-center justify-center rounded-2xl bg-stone-900 text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-stone-800"
              >
                {t("common.shopCollection")}
              </Link>
            </motion.div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
