"use client";

import type { ReactNode } from "react";

import { PageLoader } from "@/components/page-loader";
import { WishlistProvider } from "@/components/wishlist/wishlist-provider";
import { I18nProvider } from "@/lib/i18n/provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <WishlistProvider>
        <PageLoader />
        {children}
      </WishlistProvider>
    </I18nProvider>
  );
}
