"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, User, Heart, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SiteLogo } from "@/components/site-logo";
import { SearchOverlay } from "@/components/search-overlay";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useWishlist } from "@/components/wishlist/wishlist-provider";
import { useI18n } from "@/lib/i18n/provider";

const navKeyByHref: Record<string, string> = {
  "/": "nav.home",
  "/products": "nav.products",
  "/about": "nav.about",
  "/contact": "nav.contact",
};

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { count: wishlistCount } = useWishlist();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(!isHome);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-stone-200/80 bg-[#f4f1ed]/95 text-stone-900 shadow-sm backdrop-blur-md"
            : "bg-transparent text-white"
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between gap-4 px-4 md:px-8">
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? t("common.closeMenu") : t("common.openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(
                "relative hover:bg-white/10",
                scrolled
                  ? "text-stone-900 hover:bg-stone-200/60"
                  : "text-white"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>

          <nav className="hidden flex-1 items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "inline-flex h-9 items-center rounded-md px-3 text-[12px] uppercase tracking-[0.16em] transition-colors",
                  scrolled
                    ? "text-stone-800 hover:bg-stone-200/50"
                    : "text-white hover:bg-white/10"
                )}
              >
                {t(navKeyByHref[link.href] ?? link.label)}
              </Link>
            ))}
          </nav>

          <SiteLogo
            priority
            className="absolute left-1/2 -translate-x-1/2"
            imageClassName="h-11 w-11 md:h-12 md:w-12 ring-1 ring-white/20"
          />

          <div className="flex flex-1 items-center justify-end gap-0.5 md:gap-1">
            <LanguageSwitcher scrolled={scrolled} />

            <Button
              variant="ghost"
              size="icon"
              aria-label={t("common.search")}
              onClick={() => setSearchOpen(true)}
              className={cn(
                scrolled
                  ? "text-stone-800 hover:bg-stone-200/50"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label={t("common.account")}
              className={cn(
                scrolled
                  ? "text-stone-800 hover:bg-stone-200/50"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Link href="/login">
                <User className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label={t("common.wishlist")}
              className={cn(
                "relative",
                scrolled
                  ? "text-stone-800 hover:bg-stone-200/50"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Link href="/wishlist">
                <Heart className="h-4 w-4" />
                {wishlistCount > 0 ? (
                  <span className="absolute right-1 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#c45c4a] px-1 text-[9px] font-semibold text-white">
                    {wishlistCount}
                  </span>
                ) : null}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
