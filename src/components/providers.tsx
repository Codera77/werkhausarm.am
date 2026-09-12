"use client";

import type { ReactNode } from "react";

import { WishlistProvider } from "@/components/wishlist/wishlist-provider";

export function Providers({ children }: { children: ReactNode }) {
  return <WishlistProvider>{children}</WishlistProvider>;
}
