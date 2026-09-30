import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import {
  getAllProductIds,
  getProductById,
  getRelatedProducts,
} from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductIds().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: "Product — DizArt" };

  return {
    title: `${product.name} — DizArt`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f2f1ef] pt-24 md:pt-28">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery
              images={product.images ?? [product.image]}
              alt={product.imageAlt}
            />
            <ProductInfo product={product} />
          </div>
          <ProductTabs product={product} />
          <RelatedProducts products={related} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
