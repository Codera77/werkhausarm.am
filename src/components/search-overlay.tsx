"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

import { catalogProducts } from "@/lib/data";
import { formatAmd } from "@/lib/utils";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const timer = window.setTimeout(() => inputRef.current?.focus(), 80);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalogProducts.slice(0, 6);
    return catalogProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.brand?.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 bg-stone-950/45 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative mx-auto mt-0 w-full max-w-3xl px-4 pt-20 md:pt-28"
          >
            <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-[#f7f4ef] shadow-2xl">
              <div className="flex items-center gap-3 border-b border-stone-200 px-5 py-4 md:px-6 md:py-5">
                <Search className="h-5 w-5 shrink-0 text-stone-400" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search furniture, collections, brands…"
                  className="h-11 w-full bg-transparent text-base text-stone-900 outline-none placeholder:text-stone-400 md:text-lg"
                />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-200/70 hover:text-stone-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[min(60vh,420px)] overflow-y-auto p-3 md:p-4">
                <p className="mb-3 px-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                  {query.trim() ? "Results" : "Popular pieces"}
                </p>

                {results.length === 0 ? (
                  <p className="px-2 py-10 text-center text-sm text-stone-500">
                    No matches for “{query.trim()}”
                  </p>
                ) : (
                  <ul className="space-y-1">
                    {results.map((product, index) => (
                      <motion.li
                        key={product.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: index * 0.03,
                          ease: "easeInOut",
                        }}
                      >
                        <Link
                          href={`/products/${product.id}`}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-200">
                            <Image
                              src={product.image}
                              alt={product.imageAlt}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-stone-900">
                              {product.name}
                            </p>
                            <p className="truncate text-xs text-stone-500">
                              {product.category}
                              {product.brand ? ` · ${product.brand}` : ""}
                            </p>
                          </div>
                          <p className="shrink-0 text-sm text-stone-700">
                            {formatAmd(product.price)}
                          </p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className="mt-3 border-t border-stone-200 px-2 pt-3">
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="inline-flex text-[11px] uppercase tracking-[0.16em] text-stone-600 transition-colors hover:text-stone-900"
                  >
                    View all products
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
