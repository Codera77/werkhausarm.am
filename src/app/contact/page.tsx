import type { Metadata } from "next";

import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import {
  ContactMap,
  ContactDetails,
} from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us — DizArt",
  description:
    "Contact DizArt — address, phone, email, opening hours, and consultation form.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f2f1ef]">
        <section className="px-6 pb-14 pt-[5.5rem] md:px-12 md:pb-20 md:pt-28 lg:px-16">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactDetails />
            <ContactForm />
          </div>
        </section>
        <ContactMap />
      </main>
      <SiteFooter />
    </>
  );
}
