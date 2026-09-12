"use client";

import { ProductCard } from "@/components/ui/product-card";
import type { Product } from "@/lib/data";
import { useI18n } from "@/lib/i18n/provider";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  const { t } = useI18n();

  if (!products.length) return null;

  return (
    <section className="mt-8 border-t border-stone-200 pt-14">
      <h2 className="mb-8 text-center font-serif text-3xl text-stone-900 md:text-4xl">
        {t("product.alsoLike")}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
