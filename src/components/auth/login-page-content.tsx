"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

type Mode = "signin" | "register";

export function LoginPageContent() {
  const { t } = useI18n();
  const [mode, setMode] = useState<Mode>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("done");
      window.setTimeout(() => setStatus("idle"), 2200);
    }, 900);
  };

  return (
    <div className="relative flex min-h-dvh bg-[#f2f1ef]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(180,160,140,0.18),transparent_50%),radial-gradient(ellipse_at_100%_100%,rgba(28,25,23,0.06),transparent_45%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] flex-1 lg:grid-cols-2">
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative hidden min-h-dvh overflow-hidden lg:block"
        >
          <Image
            src="/dizart/hero/hero-1.jpg"
            alt="DizArt construction and design"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-stone-950/20" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(28,25,23,0.45)_0%,transparent_55%)]" />

          <div className="absolute inset-0 flex flex-col justify-between p-10 xl:p-14">
            <SiteLogo
              priority
              imageClassName="h-14 w-14 ring-1 ring-white/25"
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="max-w-md"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/65">
                {t("login.memberAccess")}
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-white xl:text-6xl">
                DizArt
              </h1>
              <p className="mt-5 text-[15px] leading-relaxed text-white/75">
                {t("login.pitch")}
              </p>
            </motion.div>
          </div>
        </motion.aside>

        <section className="relative flex min-h-dvh flex-col px-6 py-8 sm:px-10 md:px-14 lg:px-12 xl:px-16">
          <div className="mb-10 flex items-center justify-between lg:mb-0">
            <div className="lg:hidden">
              <SiteLogo priority imageClassName="h-12 w-12" />
            </div>
            <Link
              href="/"
              className="ml-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone-500 transition-colors hover:text-stone-900"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("common.backToStore")}
            </Link>
          </div>

          <div className="flex flex-1 flex-col justify-center py-8 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mx-auto w-full max-w-[420px]"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">
                {mode === "signin" ? t("login.welcomeBack") : t("login.joinTitle")}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-stone-900 md:text-[2.75rem]">
                {mode === "signin" ? t("login.signIn") : t("login.createAccount")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                {mode === "signin"
                  ? t("login.signInCopy")
                  : t("login.registerCopy")}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-1 border-b border-stone-200">
                {(
                  [
                    { id: "signin", labelKey: "login.signIn" },
                    { id: "register", labelKey: "login.register" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setMode(tab.id);
                      setStatus("idle");
                    }}
                    className={cn(
                      "relative pb-3 text-[11px] uppercase tracking-[0.16em] transition-colors",
                      mode === tab.id
                        ? "text-stone-900"
                        : "text-stone-400 hover:text-stone-600"
                    )}
                  >
                    {t(tab.labelKey)}
                    {mode === tab.id ? (
                      <motion.span
                        layoutId="login-tab"
                        className="absolute inset-x-0 -bottom-px h-px bg-stone-900"
                      />
                    ) : null}
                  </button>
                ))}
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <AnimatePresence mode="wait" initial={false}>
                  {mode === "register" ? (
                    <motion.label
                      key="name"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="block overflow-hidden"
                    >
                      <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-stone-500">
                        {t("login.fullName")}
                      </span>
                      <input
                        required={mode === "register"}
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder={t("login.yourName")}
                        className="h-12 w-full border border-stone-300 bg-white/80 px-4 text-sm text-stone-900 outline-none backdrop-blur-sm transition-colors placeholder:text-stone-400 focus:border-stone-900"
                      />
                    </motion.label>
                  ) : null}
                </AnimatePresence>

                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.14em] text-stone-500">
                    {t("login.email")}
                  </span>
                  <span className="relative block">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={t("login.emailPlaceholder")}
                      className="h-12 w-full border border-stone-300 bg-white/80 py-0 pl-11 pr-4 text-sm text-stone-900 outline-none backdrop-blur-sm transition-colors placeholder:text-stone-400 focus:border-stone-900"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-stone-500">
                    <span>{t("login.password")}</span>
                    {mode === "signin" ? (
                      <button
                        type="button"
                        className="normal-case tracking-normal text-stone-500 underline-offset-2 hover:text-stone-900 hover:underline"
                      >
                        {t("login.forgot")}
                      </button>
                    ) : null}
                  </span>
                  <span className="relative block">
                    <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete={
                        mode === "signin" ? "current-password" : "new-password"
                      }
                      placeholder="••••••••"
                      minLength={6}
                      className="h-12 w-full border border-stone-300 bg-white/80 py-0 pl-11 pr-12 text-sm text-stone-900 outline-none backdrop-blur-sm transition-colors placeholder:text-stone-400 focus:border-stone-900"
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 transition-colors hover:text-stone-800"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </span>
                </label>

                {mode === "signin" ? (
                  <label className="flex cursor-pointer items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 accent-stone-900"
                    />
                    <span className="text-sm text-stone-600">
                      {t("login.remember")}
                    </span>
                  </label>
                ) : (
                  <p className="pt-1 text-xs leading-relaxed text-stone-500">
                    {t("login.terms")}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 h-12 w-full rounded-none bg-stone-900 text-[11px] uppercase tracking-[0.2em] hover:bg-stone-800 disabled:opacity-70"
                >
                  {status === "loading"
                    ? t("login.pleaseWait")
                    : mode === "signin"
                      ? t("login.signIn")
                      : t("login.createAccount")}
                </Button>

                <AnimatePresence>
                  {status === "done" ? (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-sm text-stone-600"
                    >
                      {mode === "signin"
                        ? t("login.successSignIn")
                        : t("login.successRegister")}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </form>

              <p className="mt-10 text-center text-sm text-stone-500">
                {t("login.preferBrowse")}{" "}
                <Link
                  href="/products"
                  className="text-stone-900 underline-offset-4 hover:underline"
                >
                  {t("login.viewCollection")}
                </Link>
              </p>
            </motion.div>
          </div>

          <p className="pt-4 text-center text-[11px] uppercase tracking-[0.14em] text-stone-400 lg:text-left">
            © {new Date().getFullYear()} DizArt
          </p>
        </section>
      </div>
    </div>
  );
}
