"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const FAQ_ITEMS = [
  {
    question: "Is Milk free to use?",
    answer:
      "Yes, completely free. No hidden charges, no subscription fees. We make money through affiliate partnerships with retailers — never from you.",
  },
  {
    question: "Which stores does Milk support?",
    answer:
      "Milk currently supports Pick n Pay, Woolworths, Checkers, and Shoprite — the four biggest grocery retailers in South Africa. More stores are on the roadmap.",
  },
  {
    question: "Is there an iOS version?",
    answer:
      "Not yet — but it's coming soon. The Android app is available on Google Play right now. Join the waitlist below to be notified when iOS launches.",
  },
  {
    question: "How accurate are the prices?",
    answer:
      "We update prices daily from official retailer data. Prices can change throughout the day, so we recommend checking before you leave for the store.",
  },
  {
    question: "Can I share my shopping list?",
    answer:
      "Yes! Shopping lists are real-time and collaborative. Share with your household, partner, or anyone you shop with — they can add items and tick things off as you go.",
  },
  {
    question: "How do I join the beta testing program?",
    answer:
      "Download the app from Google Play, or sign up through our Google Play testing program link. Beta testers get early access to new features and can provide direct feedback to the team.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#f9fafb] py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
              Answers to your questions
            </h2>
          </div>
        </SectionReveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <SectionReveal key={i} delay={i * 60}>
              <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-semibold text-[#111827]">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#6b7280] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
