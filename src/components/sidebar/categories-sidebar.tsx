"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Briefcase,
  Lamp,
  Tag,
  ChevronRight,
  LayoutGrid,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { categories, type Category } from "@/lib/data";
import { tCategory, tSubcategory } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

const iconMap = {
  sofa: Sofa,
  bed: BedDouble,
  utensils: UtensilsCrossed,
  briefcase: Briefcase,
  lamp: Lamp,
  tag: Tag,
  home: Sofa,
} as const;

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
    transition: { staggerChildren: 0.05, delayChildren: 0.12 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function CategoryList({
  expanded,
  activeCategory,
  onHoverCategory,
  onLeaveCategory,
}: {
  expanded: boolean;
  activeCategory: string | null;
  onHoverCategory: (id: string) => void;
  onLeaveCategory: () => void;
}) {
  const { t, locale } = useI18n();

  return (
    <TooltipProvider delayDuration={80}>
      <ul className="flex flex-1 flex-col justify-center gap-1 px-2.5 py-3">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon];
          const isActive = activeCategory === category.id;
          const label = tCategory(locale, category.label);

          const row = (
            <Link
              href="/products"
              className={cn(
                "group relative flex items-center gap-3 overflow-hidden rounded-2xl px-2 py-2.5 transition-all duration-300",
                !expanded && "justify-center px-0 py-3",
                isActive
                  ? "bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-white/75 hover:bg-white/[0.07] hover:text-white"
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  isActive
                    ? "bg-white text-stone-900"
                    : "bg-white/10 text-white group-hover:bg-white/15"
                )}
              >
                <Icon
                  className={cn(
                    "h-[17px] w-[17px]",
                    isActive ? "text-stone-900" : "text-white"
                  )}
                  strokeWidth={1.5}
                />
              </span>

              <AnimatePresence>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="flex min-w-0 flex-1 items-center justify-between gap-2"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-[13px] font-medium tracking-wide text-white">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-[10px] uppercase tracking-[0.16em] text-white/45">
                        {t("sidebar.itemsCount", {
                          n: category.subcategories.length,
                        })}
                      </span>
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 shrink-0 text-white/35 transition-transform duration-300",
                        isActive
                          ? "translate-x-0.5 text-white/70"
                          : "group-hover:translate-x-0.5 group-hover:text-white/60"
                      )}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );

          return (
            <motion.li
              key={category.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
                ease: "easeInOut",
              }}
              onMouseEnter={() => onHoverCategory(category.id)}
              onMouseLeave={onLeaveCategory}
              className="relative"
            >
              {expanded ? (
                row
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>{row}</TooltipTrigger>
                  <TooltipContent
                    side="right"
                    sideOffset={12}
                    className="border-none bg-stone-950 px-3 py-1.5 text-xs tracking-wide text-white"
                  >
                    {label}
                  </TooltipContent>
                </Tooltip>
              )}

              <AnimatePresence>
                {expanded && isActive && (
                  <SubcategoryFlyout category={category} />
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
}

function SubcategoryFlyout({ category }: { category: Category }) {
  const { t, locale } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, x: -12, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -8, scale: 0.98 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="absolute left-full top-1/2 z-50 -translate-y-1/2 pl-3"
    >
      <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-stone-950/95 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <div className="border-b border-white/10 px-4 py-3.5">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
            {t("sidebar.browse")}
          </p>
          <p className="mt-0.5 font-serif text-xl text-white">
            {tCategory(locale, category.label)}
          </p>
        </div>
        <ul className="p-2">
          {category.subcategories.map((sub, index) => (
            <motion.li
              key={sub.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 + index * 0.03, duration: 0.2 }}
            >
              <Link
                href="/products"
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {tSubcategory(locale, sub.label)}
                <ChevronRight className="h-3.5 w-3.5 text-white/30" />
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="border-t border-white/10 px-3 py-2.5">
          <Link
            href="/products"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[11px] uppercase tracking-[0.16em] text-stone-900 transition-colors hover:bg-stone-100"
          >
            {t("sidebar.viewAll")}
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileCategoriesDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
        <div className="fixed inset-0 z-[70] xl:hidden">
          <motion.button
            type="button"
            aria-label={t("common.close")}
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
            aria-label={t("sidebar.browseCategories")}
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-y-0 left-0 flex w-[min(100%,340px)] flex-col bg-[#f7f4ef] shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-stone-200/80 px-6 py-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                  {t("sidebar.catalog")}
                </p>
                <h2 className="mt-1 font-serif text-3xl text-stone-900">
                  {t("sidebar.categories")}
                </h2>
              </div>
              <button
                type="button"
                aria-label={t("common.close")}
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-stone-900 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <motion.div
              variants={list}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-3 overflow-y-auto p-4"
            >
              {categories.map((category) => {
                const Icon = iconMap[category.icon];
                return (
                  <motion.div
                    key={category.id}
                    variants={listItem}
                    className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm"
                  >
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3.5 font-medium text-stone-900"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      {tCategory(locale, category.label)}
                    </Link>
                    <ul className="space-y-0.5 border-t border-stone-100 px-3 py-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href="/products"
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2 text-sm text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-900"
                          >
                            {tSubcategory(locale, sub.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="border-t border-stone-200/80 p-4">
              <Link
                href="/products"
                onClick={onClose}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-stone-900 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-stone-800"
              >
                {t("sidebar.shopAll")}
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

export function CategoriesSidebar() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: expanded ? 288 : 76 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => {
          setExpanded(false);
          setActiveCategory(null);
        }}
        className="fixed left-4 top-[5.5rem] bottom-6 z-30 hidden overflow-visible xl:block"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-950/90 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] backdrop-blur-2xl backdrop-saturate-150">
          <div className="flex items-center gap-3 border-b border-white/10 px-3.5 py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-stone-900">
              <LayoutGrid className="h-4 w-4 text-stone-900" strokeWidth={1.5} />
            </span>
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="min-w-0"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
                    {t("sidebar.catalog")}
                  </p>
                  <p className="truncate font-serif text-lg leading-tight text-white">
                    {t("sidebar.categories")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <CategoryList
            expanded={expanded}
            activeCategory={activeCategory}
            onHoverCategory={setActiveCategory}
            onLeaveCategory={() => setActiveCategory(null)}
          />

          <div className="mt-auto border-t border-white/10 px-3 py-3">
            <Link
              href="/products"
              className={cn(
                "flex items-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-white hover:text-stone-900",
                expanded
                  ? "justify-between px-3.5 py-3"
                  : "justify-center px-0 py-3"
              )}
            >
              {expanded ? (
                <>
                  <span className="text-[11px] uppercase tracking-[0.16em]">
                    {t("sidebar.shopAll")}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </>
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Link>
          </div>
        </div>
      </motion.aside>

      <div className="fixed bottom-5 left-5 z-30 xl:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-2xl bg-stone-900 shadow-xl"
          aria-label={t("sidebar.browseCategories")}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <LayoutGrid className="h-5 w-5" />
        </Button>
      </div>

      <MobileCategoriesDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
