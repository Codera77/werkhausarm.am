"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

import { PageHero } from "@/components/about/page-hero";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/components/wishlist/wishlist-provider";
import { catalogProducts } from "@/lib/data";
import { localizeProduct } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";
import { cn, formatAmd } from "@/lib/utils";

const WISHLIST_PER_PAGE = 6;
const RELATED_PER_PAGE = 4;

export function WishlistPageContent() {
  const { t, locale } = useI18n();
  const { items, count, remove, clear } = useWishlist();
  const [page, setPage] = useState(1);
  const [relatedPage, setRelatedPage] = useState(1);

  const localizedItems = useMemo(
    () => items.map((product) => localizeProduct(product, locale)),
    [items, locale]
  );

  const totalPages = Math.max(1, Math.ceil(localizedItems.length / WISHLIST_PER_PAGE));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * WISHLIST_PER_PAGE;
    return localizedItems.slice(start, start + WISHLIST_PER_PAGE);
  }, [localizedItems, currentPage]);

  const related = useMemo(() => {
    const wishIds = new Set(items.map((item) => item.id));
    return catalogProducts
      .filter((product) => !wishIds.has(product.id))
      .map((product) => localizeProduct(product, locale));
  }, [items, locale]);

  const relatedTotalPages = Math.max(
    1,
    Math.ceil(related.length / RELATED_PER_PAGE)
  );
  const relatedCurrent = Math.min(relatedPage, relatedTotalPages);
  const relatedItems = useMemo(() => {
    const start = (relatedCurrent - 1) * RELATED_PER_PAGE;
    return related.slice(start, start + RELATED_PER_PAGE);
  }, [related, relatedCurrent]);

  return (
    <>
      <PageHero titleKey="wishlist.title" />

      <section className="px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
                {t("wishlist.savedPieces")}
              </p>
              <h2 className="mt-1 font-serif text-3xl text-stone-900">
                {count === 1
                  ? t("wishlist.itemCount", { n: count })
                  : t("wishlist.itemsCount", { n: count })}
              </h2>
            </div>
            {count > 0 ? (
              <button
                type="button"
                onClick={clear}
                className="text-[11px] uppercase tracking-[0.16em] text-stone-500 underline-offset-4 hover:text-stone-900 hover:underline"
              >
                {t("wishlist.clear")}
              </button>
            ) : null}
          </div>

          {count === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-dashed border-stone-300 bg-white/60 px-6 py-20 text-center"
            >
              <Heart className="mx-auto h-10 w-10 text-stone-300" strokeWidth={1.25} />
              <p className="mt-5 font-serif text-3xl text-stone-900">
                {t("wishlist.emptyTitle")}
              </p>
              <p className="mt-3 text-sm text-stone-500">
                {t("wishlist.emptyBody")}
              </p>
              <Button
                asChild
                className="mt-8 rounded-none bg-stone-900 px-8 text-[11px] uppercase tracking-[0.16em]"
              >
                <Link href="/products">{t("wishlist.continueShopping")}</Link>
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="hidden border-b border-stone-200 pb-3 md:grid md:grid-cols-[minmax(0,1.4fr)_160px_140px_180px] md:gap-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-stone-400">
                  {t("wishlist.product")}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-stone-400">
                  {t("wishlist.price")}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-stone-400">
                  {t("wishlist.stock")}
                </p>
                <p className="text-right text-[11px] uppercase tracking-[0.16em] text-stone-400">
                  {t("wishlist.action")}
                </p>
              </div>

              <ul className="divide-y divide-stone-200">
                <AnimatePresence initial={false}>
                  {pageItems.map((product) => (
                    <motion.li
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="grid gap-4 py-5 md:grid-cols-[minmax(0,1.4fr)_160px_140px_180px] md:items-center"
                    >
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          aria-label={`${t("common.close")} ${product.name}`}
                          onClick={() => {
                            remove(product.id);
                            if (pageItems.length === 1 && currentPage > 1) {
                              setPage((p) => p - 1);
                            }
                          }}
                          className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-200 text-stone-500 transition-colors hover:border-stone-900 hover:text-stone-900"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                        <Link
                          href={`/products/${product.id}`}
                          className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#ece8e2]"
                        >
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </Link>
                        <div className="min-w-0">
                          <Link
                            href={`/products/${product.id}`}
                            className="block truncate font-medium text-stone-900 hover:underline"
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 text-xs text-stone-500">
                            {product.category}
                            {product.brand ? ` · ${product.brand}` : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm md:block">
                        <span className="md:hidden text-[11px] uppercase tracking-[0.14em] text-stone-400">
                          {t("wishlist.price")}
                        </span>
                        {product.compareAtPrice ? (
                          <span className="mr-2 text-stone-400 line-through">
                            {formatAmd(product.compareAtPrice, locale)}
                          </span>
                        ) : null}
                        <span
                          className={cn(
                            "font-medium",
                            product.compareAtPrice
                              ? "text-[#c45c4a]"
                              : "text-stone-800"
                          )}
                        >
                          {formatAmd(product.price, locale)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm md:block">
                        <span className="md:hidden text-[11px] uppercase tracking-[0.14em] text-stone-400">
                          {t("wishlist.stock")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                          {t("wishlist.inStock")}
                        </span>
                      </div>

                      <div className="md:justify-self-end">
                        <Button className="h-11 w-full rounded-none bg-stone-900 px-4 text-[11px] uppercase tracking-[0.14em] hover:bg-stone-800 md:w-auto">
                          <ShoppingBag className="h-3.5 w-3.5" />
                          {t("wishlist.addToCart")}
                        </Button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              {totalPages > 1 ? (
                <Pagination
                  page={currentPage}
                  totalPages={totalPages}
                  onChange={setPage}
                  className="mt-8"
                />
              ) : null}
            </>
          )}

          {related.length > 0 ? (
            <div className="mt-20 border-t border-stone-200 pt-14">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-serif text-3xl text-stone-900 md:text-4xl">
                  {t("wishlist.alsoLike")}
                </h3>
                {relatedTotalPages > 1 ? (
                  <Pagination
                    page={relatedCurrent}
                    totalPages={relatedTotalPages}
                    onChange={setRelatedPage}
                    compact
                  />
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                {relatedItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {relatedTotalPages > 1 ? (
                <Pagination
                  page={relatedCurrent}
                  totalPages={relatedTotalPages}
                  onChange={setRelatedPage}
                  className="mt-8 lg:hidden"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

function Pagination({
  page,
  totalPages,
  onChange,
  className,
  compact = false,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
  compact?: boolean;
}) {
  const { t } = useI18n();
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <button
        type="button"
        aria-label={t("common.previous")}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {!compact
        ? pages.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onChange(num)}
              className={cn(
                "flex h-10 min-w-10 items-center justify-center border px-3 text-sm transition-colors",
                page === num
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 text-stone-700 hover:border-stone-900"
              )}
            >
              {num}
            </button>
          ))
        : (
            <span className="min-w-14 text-center text-sm text-stone-600">
              {page} / {totalPages}
            </span>
          )}

      <button
        type="button"
        aria-label={t("common.next")}
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="flex h-10 w-10 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
