import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { WishlistPageContent } from "@/components/wishlist/wishlist-page-content";

export const metadata: Metadata = {
  title: "Wishlist — DizArt",
  description: "Saved DizArt products and acoustic systems.",
};

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f2f1ef]">
        <WishlistPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
