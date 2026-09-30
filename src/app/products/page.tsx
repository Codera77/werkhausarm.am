import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ProductsCatalog } from "@/components/products/products-catalog";

export const metadata: Metadata = {
  title: "Products — DizArt",
  description:
    "Browse DizArt sound insulation and construction systems with filters for category, price, color, tag, and brand.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProductsCatalog />
      </main>
      <SiteFooter />
    </>
  );
}
