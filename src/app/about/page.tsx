import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/about/page-hero";
import { OurStorySection } from "@/components/about/our-story-section";
import { TeamSection } from "@/components/about/team-section";
import { CommitmentBanner } from "@/components/about/commitment-banner";
import { PolicyStrip } from "@/components/about/policy-strip";

export const metadata: Metadata = {
  title: "About Us — werkhausarm",
  description:
    "Our story, the team behind werkhausarm, and our commitment to thoughtful furniture design.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero title="About Us" />
        <OurStorySection />
        <TeamSection />
        <CommitmentBanner />
        <PolicyStrip />
      </main>
      <SiteFooter />
    </>
  );
}
