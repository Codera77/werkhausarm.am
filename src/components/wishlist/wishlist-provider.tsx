"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { catalogProducts, type Product } from "@/lib/data";

type WishlistContextValue = {
  ids: string[];
  items: Product[];
  count: number;
  isWishlisted: (id: string) => boolean;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "luma-wishlist-ids";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as string[];
        if (Array.isArray(parsed)) setIds(parsed);
      }
    } catch {
      // ignore invalid storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, hydrated]);

  const toggle = useCallback((id: string) => {
    setIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const remove = useCallback((id: string) => {
    setIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const clear = useCallback(() => setIds([]), []);

  const isWishlisted = useCallback(
    (id: string) => ids.includes(id),
    [ids]
  );

  const items = useMemo(
    () =>
      ids
        .map((id) => catalogProducts.find((product) => product.id === id))
        .filter((product): product is Product => Boolean(product)),
    [ids]
  );

  const value = useMemo(
    () => ({
      ids,
      items,
      count: ids.length,
      isWishlisted,
      toggle,
      remove,
      clear,
    }),
    [ids, items, isWishlisted, toggle, remove, clear]
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return ctx;
}
