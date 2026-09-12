"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  X,
  RotateCcw,
  Tag,
  Banknote,
} from "lucide-react";

import { PageHero } from "@/components/about/page-hero";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  catalogFilterCategories,
  catalogProducts,
  catalogSortOptions,
  type Product,
} from "@/lib/data";
import { cn, formatAmd } from "@/lib/utils";

type SortValue = (typeof catalogSortOptions)[number]["value"];

type Filters = {
  categories: string[];
  priceMin: number;
  priceMax: number;
};

const PRICE_MIN = 0;
const PRICE_MAX = 100000;
const PRICE_STEP = 5000;

const defaultFilters: Filters = {
  categories: [],
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
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

function FilterPanel({
  filters,
  setFilters,
  onClear,
  idPrefix = "filter",
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClear: () => void;
  idPrefix?: string;
}) {
  const hasActive =
    filters.categories.length > 0 ||
    filters.priceMin > PRICE_MIN ||
    filters.priceMax < PRICE_MAX;

  const toggleCategory = (category: string) => {
    setFilters((prev) => {
      const next = prev.categories.includes(category)
        ? prev.categories.filter((item) => item !== category)
        : [...prev.categories, category];
      return { ...prev, categories: next };
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-400">
            Refine results
          </p>
          <h2 className="mt-1 font-serif text-3xl text-stone-900">Filters</h2>
        </div>
        {hasActive ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-9 rounded-full px-3 text-[11px] uppercase tracking-[0.14em] text-stone-500 hover:bg-white hover:text-stone-900"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>
        ) : null}
      </div>

      {hasActive ? (
        <div className="flex flex-wrap gap-1.5">
          {filters.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className="inline-flex"
            >
              <Badge
                variant="outline"
                className="gap-1.5 rounded-full border-stone-300/80 bg-white/90 pr-1.5 shadow-sm"
              >
                {category}
                <X className="h-3 w-3 text-stone-400" />
              </Badge>
            </button>
          ))}
          {filters.priceMin > PRICE_MIN || filters.priceMax < PRICE_MAX ? (
            <Badge
              variant="secondary"
              className="rounded-full bg-stone-900 text-white"
            >
              {formatAmd(filters.priceMin)} – {formatAmd(filters.priceMax)}
            </Badge>
          ) : null}
        </div>
      ) : null}

      {/* Category block */}
      <section className="overflow-hidden rounded-2xl border border-stone-200/70 bg-gradient-to-b from-white to-[#faf8f5] shadow-[0_12px_40px_-28px_rgba(28,25,23,0.35)]">
        <div className="flex items-center gap-3 border-b border-stone-200/70 px-4 py-3.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white">
            <Tag className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400">
              Browse by
            </p>
            <h3 className="font-serif text-xl leading-tight text-stone-900">
              Category
            </h3>
          </div>
          {filters.categories.length > 0 ? (
            <Badge className="rounded-full bg-stone-900 px-2 py-0.5 text-[10px] text-white">
              {filters.categories.length}
            </Badge>
          ) : null}
        </div>

        <div className="max-h-72 space-y-1 overflow-y-auto p-3">
          {catalogFilterCategories.map((category) => {
            const checked = filters.categories.includes(category);
            const count = catalogProducts.filter(
              (p) => p.category === category
            ).length;
            const id = `${idPrefix}-category-${category}`;

            return (
              <label
                key={category}
                htmlFor={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200",
                  checked
                    ? "bg-stone-900 text-white shadow-md shadow-stone-900/15"
                    : "bg-transparent text-stone-700 hover:bg-stone-100/80"
                )}
              >
                <Checkbox
                  id={id}
                  checked={checked}
                  onCheckedChange={() => toggleCategory(category)}
                  className={cn(
                    checked &&
                      "border-white/40 data-[state=checked]:border-white data-[state=checked]:bg-white data-[state=checked]:text-stone-900"
                  )}
                />
                <span className="flex flex-1 items-center justify-between gap-2 text-[13px]">
                  <span className={cn(checked ? "font-medium text-white" : "")}>
                    {category}
                  </span>
                  <span
                    className={cn(
                      "tabular-nums text-[11px]",
                      checked ? "text-white/55" : "text-stone-400"
                    )}
                  >
                    {count}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </section>

      {/* Price block */}
      <section className="overflow-hidden rounded-2xl border border-stone-200/70 bg-gradient-to-b from-white to-[#faf8f5] shadow-[0_12px_40px_-28px_rgba(28,25,23,0.35)]">
        <div className="flex items-center gap-3 border-b border-stone-200/70 px-4 py-3.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white">
            <Banknote className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase tracking-[0.18em] text-stone-400">
              Budget
            </p>
            <h3 className="font-serif text-xl leading-tight text-stone-900">
              Price range
            </h3>
          </div>
        </div>

        <div className="space-y-5 p-4">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-stone-200/80 bg-white px-3.5 py-3 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.14em] text-stone-400">
                From
              </p>
              <p className="mt-1 truncate font-medium text-stone-900">
                {formatAmd(filters.priceMin)}
              </p>
            </div>
            <div className="rounded-xl border border-stone-200/80 bg-white px-3.5 py-3 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.14em] text-stone-400">
                To
              </p>
              <p className="mt-1 truncate font-medium text-stone-900">
                {formatAmd(filters.priceMax)}
              </p>
            </div>
          </div>

          <div className="px-1 pt-1">
            <Slider
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={PRICE_STEP}
              value={[filters.priceMin, filters.priceMax]}
              onValueChange={([min, max]) =>
                setFilters((prev) => ({
                  ...prev,
                  priceMin: min,
                  priceMax: max,
                }))
              }
              aria-label="Price range"
              className="py-1"
            />
          </div>

          <div className="flex justify-between text-[11px] uppercase tracking-[0.12em] text-stone-400">
            <span>{formatAmd(PRICE_MIN)}</span>
            <span>{formatAmd(PRICE_MAX)}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileFilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
  onClear,
  resultCount,
}: {
  open: boolean;
  onClose: () => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onClear: () => void;
  resultCount: number;
}) {
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
        <div className="fixed inset-0 z-[70] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close filters"
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
            aria-label="Product filters"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-y-0 left-0 flex w-[min(100%,380px)] flex-col bg-[#f7f4ef] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-stone-200/80 px-5 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
                  Catalog
                </p>
                <p className="font-serif text-2xl text-stone-900">Filters</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm transition-colors hover:bg-stone-900 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                onClear={onClear}
                idPrefix="mobile-filter"
              />
            </div>

            <div className="border-t border-stone-200/80 bg-[#f7f4ef]/95 p-4 backdrop-blur-sm">
              <Button
                type="button"
                onClick={onClose}
                className="h-12 w-full rounded-2xl bg-stone-900 text-[11px] uppercase tracking-[0.18em] hover:bg-stone-800"
              >
                Show {resultCount} products
              </Button>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

function sortProducts(products: Product[], sort: SortValue) {
  const list = [...products];
  switch (sort) {
    case "title-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "title-desc":
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "best-selling":
      return list.sort(
        (a, b) => (b.badge === "Hot" ? 1 : 0) - (a.badge === "Hot" ? 1 : 0)
      );
    default:
      return list;
  }
}

export function ProductsCatalog() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [sort, setSort] = useState<SortValue>("featured");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    const result = catalogProducts.filter((product) => {
      if (
        filters.categories.length &&
        !filters.categories.includes(product.category)
      ) {
        return false;
      }
      if (product.price < filters.priceMin || product.price > filters.priceMax) {
        return false;
      }
      return true;
    });
    return sortProducts(result, sort);
  }, [filters, sort]);

  const clearFilters = () => setFilters(defaultFilters);
  const activeCount =
    filters.categories.length +
    (filters.priceMin > PRICE_MIN || filters.priceMax < PRICE_MAX ? 1 : 0);

  return (
    <>
      <PageHero
        title="Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="px-6 py-10 md:px-12 md:py-14 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[300px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                onClear={clearFilters}
                idPrefix="desktop-filter"
              />
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-b border-stone-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-stone-300 bg-white lg:hidden"
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen(true)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter
                  {activeCount > 0 ? (
                    <Badge variant="default" className="ml-0.5 rounded-full px-1.5 py-0">
                      {activeCount}
                    </Badge>
                  ) : null}
                </Button>

                <p className="text-sm text-stone-500">
                  Showing{" "}
                  <span className="font-medium text-stone-800">
                    {filtered.length}
                  </span>{" "}
                  of {catalogProducts.length} products
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortValue)}
                    className="appearance-none border border-stone-300 bg-transparent py-2 pl-3 pr-9 text-sm text-stone-700 outline-none focus:border-stone-900"
                  >
                    {catalogSortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                </div>
                <span className="hidden items-center gap-1 text-stone-400 sm:inline-flex">
                  <LayoutGrid className="h-4 w-4 text-stone-800" />
                  <span className="text-xs tracking-wide">4</span>
                </span>
              </div>
            </div>

            {filters.categories.length > 0 ? (
              <div className="mb-6 flex flex-wrap gap-2">
                {filters.categories.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() =>
                      setFilters((prev) => ({
                        ...prev,
                        categories: prev.categories.filter((c) => c !== chip),
                      }))
                    }
                  >
                    <Badge
                      variant="outline"
                      className="gap-1.5 rounded-full bg-white pr-1.5"
                    >
                      {chip}
                      <X className="h-3 w-3" />
                    </Badge>
                  </button>
                ))}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="h-8 rounded-full px-3 text-[11px] uppercase tracking-[0.14em]"
                >
                  Clear all
                </Button>
              </div>
            ) : null}

            {filtered.length === 0 ? (
              <div className="border border-dashed border-stone-300 py-20 text-center">
                <p className="font-serif text-2xl text-stone-800">
                  No products found
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Try adjusting filters or clear all selections.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-none"
                  onClick={clearFilters}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <MobileFilterDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        filters={filters}
        setFilters={setFilters}
        onClear={clearFilters}
        resultCount={filtered.length}
      />
    </>
  );
}
