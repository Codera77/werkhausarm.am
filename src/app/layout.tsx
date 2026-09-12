import type { Metadata } from "next";
import { Cormorant, Figtree } from "next/font/google";

import { Providers } from "@/components/providers";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "werkhausarm — Modern Living Refined",
  description:
    "Quiet luxury furniture for warm, sophisticated homes. Soft wood tones, charcoal accents, and curated Scandinavian design.",
  icons: {
    icon: [{ url: "/logowerk.jpg", type: "image/jpeg" }],
    shortcut: "/logowerk.jpg",
    apple: "/logowerk.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
