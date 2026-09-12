import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#ebe6df] px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SiteLogo imageClassName="h-14 w-14" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-600">
            Curated furniture for quiet, modern living. Soft wood tones,
            charcoal accents, and timeless Scandinavian forms.
          </p>
          <p className="mt-5 text-sm text-stone-500">
            Yerevan, Armenia
            <br />
            hello@lumahome.am
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            About Us
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>
              <Link href="/about" className="hover:text-stone-900">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-stone-900">
                Philosophy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-stone-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            Categories
          </p>
          <ul className="space-y-2 text-sm text-stone-700">
            <li>
              <Link href="/products" className="hover:text-stone-900">
                Living Room
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-stone-900">
                Bedroom
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-stone-900">
                Dining
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-stone-900">
                Decor
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
            Newsletter
          </p>
          <form className="flex border border-stone-300 bg-white">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-stone-400"
            />
            <button
              type="submit"
              className="bg-stone-900 px-4 text-[11px] uppercase tracking-[0.14em] text-white"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-stone-300/70 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Luma Home. All rights reserved.</p>
        <p className="tracking-[0.12em]">AM · EN</p>
      </div>
    </footer>
  );
}
