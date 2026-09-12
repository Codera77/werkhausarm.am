import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
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
        <QuoteSection />
        <FeatureBanner
          title="Quality Keeps Us Moving Forward."
          body="Thoughtful materials, quiet silhouettes, and lasting comfort — designed for homes that value warmth over noise."
          cta="Learn More"
          image="/abra/ba3-1.jpg"
          imageAlt="Sage green accent chair beside a sculptural stone table"
        />
        <CollectionsSection />
        <FeatureBanner
          reverse
          eyebrow="Responsible Design"
          title="Sourced From Sustainable Forests."
          body="Solid oak and walnut pieces finished with care — furniture meant to age beautifully in your home."
          cta="Discover More"
          image="/abra/ba3-2.jpg"
          imageAlt="Warm brown sofa in a sunlit living room"
        />
        <CraftedBanner />
        <FeaturedProducts />
        <TestimonialSection />
      </main>
      <SiteFooter />
    </>
  );
}
