import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { NewsSection } from "@/components/news-section";
import { QuoteSection } from "@/components/quote-section";
import { FeatureBanner } from "@/components/feature-banner";
import { CollectionsSection } from "@/components/collections-section";
import { CraftedBanner } from "@/components/crafted-banner";
import { FeaturedProducts } from "@/components/featured-products";
import { TestimonialSection } from "@/components/testimonial-section";
import { SiteFooter } from "@/components/site-footer";
import { CategoriesSidebar } from "@/components/sidebar/categories-sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <CategoriesSidebar />
      <main className="flex-1">
        <HeroSection />
        <NewsSection />
        <QuoteSection />
        <FeatureBanner
          titleKey="home.qualityTitle"
          bodyKey="home.qualityBody"
          ctaKey="common.learnMore"
          image="/dizart/banner-quality.jpg"
          imageAlt="Modern office and construction systems interior"
        />
        <CollectionsSection />
        <FeatureBanner
          reverse
          eyebrowKey="home.responsibleEyebrow"
          titleKey="home.responsibleTitle"
          bodyKey="home.responsibleBody"
          ctaKey="common.discoverMore"
          image="/dizart/banner-systems.jpg"
          imageAlt="Building systems and professional construction"
        />
        <CraftedBanner />
        <FeaturedProducts />
        <TestimonialSection />
      </main>
      <SiteFooter />
    </>
  );
}
