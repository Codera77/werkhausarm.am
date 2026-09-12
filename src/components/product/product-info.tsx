"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Heart, Minus, Plus, Share2, Truck, RotateCcw, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useWishlist } from "@/components/wishlist/wishlist-provider";
import type { Product } from "@/lib/data";
import { cn, formatAmd } from "@/lib/utils";

type ProductInfoProps = {
  product: Product;
};

const colorSwatches: Record<string, string> = {
  White: "#f5f5f4",
  Beige: "#d6d3d1",
  Green: "#7d8b74",
  Black: "#1c1917",
  Oak: "#b08968",
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.colors?.[0] ?? "White");
  const { isWishlisted, toggle } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const savePercent = useMemo(() => {
    if (!product.compareAtPrice || product.compareAtPrice <= product.price) {
      return null;
    }
    return Math.round(
      ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
    );
  }, [product.compareAtPrice, product.price]);

  return (
    <div className="flex flex-col">
      <nav className="mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone-400">
        <Link href="/" className="hover:text-stone-800">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-stone-800">
          Products
        </Link>
        <span>/</span>
        <span className="text-stone-700">{product.name}</span>
      </nav>

      <h1 className="font-serif text-4xl text-stone-900 md:text-5xl">
        {product.name}
      </h1>
      <p className="mt-2 text-sm text-stone-500">No reviews</p>

      <div className="mt-5 flex flex-wrap items-end gap-3">
        {product.compareAtPrice ? (
          <span className="text-lg text-stone-400 line-through">
            {formatAmd(product.compareAtPrice)}
          </span>
        ) : null}
        <span
          className={cn(
            "text-2xl font-medium",
            product.compareAtPrice ? "text-[#c45c4a]" : "text-stone-900"
          )}
        >
          {formatAmd(product.price)}
        </span>
        {savePercent ? (
          <span className="bg-[#c45c4a] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            Save {savePercent}%
          </span>
        ) : null}
      </div>
      <p className="mt-1 text-xs text-stone-400">Tax included</p>

      {product.colors?.length ? (
        <div className="mt-8">
          <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-stone-500">
            Color: <span className="text-stone-800">{color}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((swatch) => (
              <button
                key={swatch}
                type="button"
                onClick={() => setColor(swatch)}
                aria-label={swatch}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-transform",
                  color === swatch
                    ? "scale-110 border-stone-900"
                    : "border-transparent ring-1 ring-stone-300"
                )}
                style={{ backgroundColor: colorSwatches[swatch] ?? "#d6d3d1" }}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="inline-flex h-12 items-center border border-stone-300">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-full w-11 items-center justify-center text-stone-600 hover:bg-stone-100"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-full w-11 items-center justify-center text-stone-600 hover:bg-stone-100"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button className="h-12 flex-1 rounded-none bg-stone-900 px-8 text-[11px] uppercase tracking-[0.18em] hover:bg-stone-800 sm:flex-none sm:min-w-[200px]">
          Add to Cart
        </Button>

        <button
          type="button"
          aria-label="Wishlist"
          onClick={() => toggle(product.id)}
          className="flex h-12 w-12 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              wishlisted && "fill-stone-900 text-stone-900"
            )}
          />
        </button>
        {product.instagramUrl ? (
          <a
            href={product.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on Instagram"
            className="flex h-12 w-12 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <button
            type="button"
            aria-label="Share"
            className="flex h-12 w-12 items-center justify-center border border-stone-300 text-stone-700 transition-colors hover:border-stone-900"
          >
            <Share2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-8 space-y-3 border-t border-stone-200 pt-6 text-sm text-stone-600">
        <p className="flex gap-3">
          <Truck className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Estimate delivery times: <strong>12–26 days</strong> (International),{" "}
            <strong>3–6 days</strong> (Armenia).
          </span>
        </p>
        <p className="flex gap-3">
          <RotateCcw className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Return within <strong>45 days</strong> of purchase. Duties & taxes
            are non-refundable.
          </span>
        </p>
      </div>

      <dl className="mt-6 grid gap-2 text-sm text-stone-600">
        {product.brand ? (
          <div className="flex gap-2">
            <dt className="text-stone-400">Brand:</dt>
            <dd>{product.brand}</dd>
          </div>
        ) : null}
        <div className="flex gap-2">
          <dt className="text-stone-400">Category:</dt>
          <dd>{product.category}</dd>
        </div>
        {product.tags?.length ? (
          <div className="flex gap-2">
            <dt className="text-stone-400">Tags:</dt>
            <dd>{product.tags.join(", ")}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}
