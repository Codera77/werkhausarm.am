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

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2, 4);

function NavLink({
  href,
  label,
  scrolled,
}: {
  href: string;
  label: string;
  scrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-8 shrink-0 items-center whitespace-nowrap rounded-md px-1.5 text-[10px] uppercase tracking-[0.1em] transition-colors md:px-2 md:text-[11px] xl:px-2.5 xl:text-[12px] xl:tracking-[0.12em]",
        scrolled
          ? "text-stone-800 hover:bg-stone-200/50"
          : "text-white hover:bg-white/10"
      )}
    >
      {label}
    </Link>
  );
}

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

  const iconBtn = cn(
    "h-9 w-9 shrink-0",
    scrolled
      ? "text-stone-800 hover:bg-stone-200/50"
      : "text-white hover:bg-white/10"
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-stone-200/80 bg-[#f2f1ef]/95 text-stone-900 shadow-sm backdrop-blur-md"
            : "bg-transparent text-white"
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-3 sm:px-4 md:h-[4.25rem] md:px-6 lg:px-8">
          {/* Left: mobile menu */}
          <div className="z-10 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label={
                mobileOpen ? t("common.closeMenu") : t("common.openMenu")
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(
                "relative shrink-0 lg:hidden",
                scrolled
                  ? "text-stone-900 hover:bg-stone-200/60"
                  : "text-white hover:bg-white/10"
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

            {/* Spacer so left/right stay balanced on desktop */}
            <div className="hidden w-[9.5rem] lg:block xl:w-[11rem]" aria-hidden />
          </div>

          {/* Center: mobile logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
            <SiteLogo
              priority
              imageClassName="h-10 w-10"
            />
          </div>

          {/* Center: desktop nav tightly around logo */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex xl:gap-1.5">
            {leftLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={t(navKeyByHref[link.href] ?? link.label)}
                scrolled={scrolled}
              />
            ))}

            <SiteLogo
              priority
              className="mx-0.5 xl:mx-1"
              imageClassName="h-10 w-10 xl:h-12 xl:w-12"
            />

            {rightLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={t(navKeyByHref[link.href] ?? link.label)}
                scrolled={scrolled}
              />
            ))}
          </nav>

          {/* Right: language + actions */}
          <div className="z-10 flex items-center justify-end gap-0.5 sm:gap-1">
            <LanguageSwitcher
              scrolled={scrolled}
              variant="dropdown"
              align="end"
              className="shrink-0 px-1.5 sm:px-2"
            />

            <Button
              variant="ghost"
              size="icon"
              aria-label={t("common.search")}
              onClick={() => setSearchOpen(true)}
              className={iconBtn}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label={t("common.account")}
              className={cn(iconBtn, "hidden sm:inline-flex")}
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
              className={cn("relative", iconBtn)}
            >
              <Link href="/wishlist">
                <Heart className="h-4 w-4" />
                {wishlistCount > 0 ? (
                  <span className="absolute right-1 top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#c17a45] px-1 text-[9px] font-semibold text-white">
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
