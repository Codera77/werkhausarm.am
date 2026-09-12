import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { WishlistPageContent } from "@/components/wishlist/wishlist-page-content";

export const metadata: Metadata = {
  title: "Wishlist — werkhausarm",
  description: "Your saved werkhausarm furniture pieces.",
};

export default function WishlistPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f4f1ed]">
        <WishlistPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
