"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ExternalLink } from "lucide-react";

import { useWishlist } from "@/components/wishlist/wishlist-provider";
import type { Product } from "@/lib/data";
import { localizeProduct } from "@/lib/i18n/content";
import { useI18n } from "@/lib/i18n/provider";
import { cn, formatAmd } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  className?: string;
};

const badgeKeyByValue: Record<string, string> = {
  Sale: "badge.sale",
  New: "badge.new",
  Hot: "badge.hot",
};

export function ProductCard({ product, className }: ProductCardProps) {
  const { t, locale } = useI18n();
  const localized = localizeProduct(product, locale);
  const { isWishlisted, toggle } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const href = `/products/${localized.id}`;
  const favorited = isWishlisted(localized.id);

  return (
    <motion.div
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn("group h-full", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ece8e2]">
        <Link href={href} className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: isHovered ? 1.04 : 1 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={localized.image}
              alt={localized.imageAlt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </motion.div>
        </Link>

        {localized.badge ? (
          <span
            className={cn(
              "pointer-events-none absolute left-3 top-3 z-10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white",
              localized.badge === "Sale" && "bg-[#c45c4a]",
              localized.badge === "New" && "bg-stone-900",
              localized.badge === "Hot" && "bg-stone-700"
            )}
          >
            {t(badgeKeyByValue[localized.badge] ?? localized.badge)}
          </span>
        ) : null}

        <button
          type="button"
          aria-label={t("common.wishlist")}
          onClick={(event) => {
            event.preventDefault();
            toggle(localized.id);
          }}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center bg-white/90 text-stone-700 transition-colors hover:bg-white"
        >
          <Heart
            className={cn(
              "h-3.5 w-3.5",
              favorited && "fill-stone-900 text-stone-900"
            )}
          />
        </button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-x-3 bottom-3 z-10 flex justify-end gap-2"
            >
              {localized.instagramUrl ? (
                <a
                  href={localized.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Instagram"
                  className="flex h-9 w-9 items-center justify-center bg-white text-stone-900 transition-colors hover:bg-stone-100"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
              <Link
                href={href}
                aria-label={t("product.quickView")}
                className="flex h-9 w-9 items-center justify-center bg-stone-900 text-white transition-colors hover:bg-stone-800"
              >
                <Eye className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Link href={href} className="block space-y-1.5 pt-4 text-center">
        <h3 className="text-sm tracking-wide text-stone-900">{localized.name}</h3>
        <div className="flex items-center justify-center gap-2 text-sm">
          {localized.compareAtPrice ? (
            <span className="text-stone-400 line-through">
              {formatAmd(localized.compareAtPrice, locale)}
            </span>
          ) : null}
          <span
            className={cn(
              "font-medium",
              localized.compareAtPrice ? "text-[#c45c4a]" : "text-stone-800"
            )}
          >
            {formatAmd(localized.price, locale)}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
