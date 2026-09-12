"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, localeMeta, type Locale } from "@/lib/i18n/config";
import { FlagAm, FlagGb, FlagRu } from "@/lib/i18n/flags";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

const flags = {
  am: FlagAm,
  ru: FlagRu,
  gb: FlagGb,
} as const;

type LanguageSwitcherProps = {
  scrolled?: boolean;
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  scrolled = true,
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const current = localeMeta[locale];
  const Flag = flags[current.flag];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Language"
          className={cn(
            "gap-1.5 rounded-full px-2 text-[11px] uppercase tracking-[0.12em]",
            scrolled
              ? "text-stone-700 hover:bg-stone-200/50"
              : "text-white hover:bg-white/10",
            className
          )}
        >
          <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10">
            <Flag className="h-3.5 w-[21px]" />
          </span>
          {!compact ? (
            <>
              <span className="hidden sm:inline">{current.short}</span>
              <ChevronDown className="h-3 w-3 opacity-70" />
            </>
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[11rem] p-1">
        {locales.map((code: Locale) => {
          const meta = localeMeta[code];
          const ItemFlag = flags[meta.flag];
          const active = locale === code;
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => setLocale(code)}
              className="gap-2.5 rounded-lg px-2.5 py-2"
            >
              <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10">
                <ItemFlag className="h-4 w-6" />
              </span>
              <span className="flex-1 text-sm normal-case tracking-normal">
                {meta.label}
              </span>
              <AnimatePresence>
                {active ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Check className="h-3.5 w-3.5 text-stone-900" />
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
