import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/about/page-hero";
import { OurStorySection } from "@/components/about/our-story-section";
import { TeamSection } from "@/components/about/team-section";
import { CommitmentBanner } from "@/components/about/commitment-banner";
import { PolicyStrip } from "@/components/about/policy-strip";

export const metadata: Metadata = {
  title: "About Us — DizArt",
  description:
    "Our story, the DizArt team, and our commitment to sound insulation and construction solutions in Armenia.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero titleKey="about.heroTitle" />
        <OurStorySection />
        <TeamSection />
        <CommitmentBanner />
        <PolicyStrip />
      </main>
      <SiteFooter />
    </>
  );
}
