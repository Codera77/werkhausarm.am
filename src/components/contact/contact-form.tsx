"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <h2 className="font-serif text-3xl text-stone-900 md:text-4xl">
        {contactInfo.formTitle}
      </h2>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name..."
            className="h-12 w-full border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input
            required
            type="email"
            name="email"
            placeholder="Your email..."
            className="h-12 w-full border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          />
        </label>
        <label className="block">
          <span className="sr-only">Your message</span>
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Your message..."
            className="w-full resize-y border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          />
        </label>

        <Button
          type="submit"
          className="h-12 rounded-none bg-stone-900 px-10 text-[11px] uppercase tracking-[0.18em] hover:bg-stone-800"
        >
          Submit
        </Button>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-stone-600"
          >
            Thank you — your message has been received. We will reply soon.
          </motion.p>
        ) : null}
      </form>
    </motion.div>
  );
}
