import type { Metadata } from "next";

import { LoginPageContent } from "@/components/auth/login-page-content";

export const metadata: Metadata = {
  title: "Sign in — werkhausarm",
  description: "Sign in to your werkhausarm account to save favorites and collections.",
};

export default function LoginPage() {
  return <LoginPageContent />;
}
