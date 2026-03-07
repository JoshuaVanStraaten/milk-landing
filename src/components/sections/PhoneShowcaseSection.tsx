"use client";

import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useScrollObserver } from "@/hooks/useScrollObserver";

const FEATURES = [
  {
    id: "feature-deals",
    screenshot: "/screenshots/deals_light.webp",
    headline: "Live Deals, Every Day",
    description:
      "Hot specials from all 4 major stores, updated daily. Never miss a sale on the brands your family loves.",
    accent: "#10b981",
    pill: "Deals",
  },
  {
    id: "feature-compare",
    screenshot: "/screenshots/price_compare_light.webp",
    headline: "Compare Instantly",
    description:
      "Same product. Four stores. One screen. Know exactly who's cheapest before you add anything to your trolley.",
    accent: "#f59e0b",
    pill: "Compare",
  },
  {
    id: "feature-recipe",
    screenshot: "/screenshots/recipe_light.webp",
    headline: "AI Recipe Ideas",
    description:
      "Tell us what you want to cook and we'll find every ingredient at the best price across all stores.",
    accent: "#10b981",
    pill: "AI",
  },
  {
    id: "feature-list",
    screenshot: "/screenshots/list_light.webp",
    headline: "Smart Shopping Lists",
    description:
      "Tap to add items, share with your household, and check off as you go. Shopping sorted.",
    accent: "#f59e0b",
    pill: "Lists",
  },
];

const PANEL_IDS = FEATURES.map((f) => f.id);

const SCREENS = FEATURES.map((f) => ({
  src: f.screenshot,
  alt: f.headline,
  screenId: f.id,
}));

export function PhoneShowcaseSection() {
  const activeId = useScrollObserver(PANEL_IDS, 0.5);
  const activeIndex = PANEL_IDS.indexOf(activeId);
  const activeFeature = FEATURES[activeIndex] ?? FEATURES[0];

  return (
    <section className="relative z-10 bg-white py-24 md:py-0 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section heading (visible on mobile above sticky) */}
        <div className="text-center mb-12 md:hidden">
          <h2 className="text-3xl font-bold text-[#111827]">
            Everything you need,{" "}
            <span className="gradient-text">in one app.</span>
          </h2>
        </div>

        <div className="relative md:grid md:grid-cols-2 md:gap-16">
          {/* Feature panels — left column on desktop */}
          <div className="relative">
            {/* Desktop section heading inside left column */}
            <div className="hidden md:block py-32">
              <h2 className="text-4xl font-bold text-[#111827] leading-tight mb-2">
                Everything you need,
                <br />
                <span className="gradient-text">in one app.</span>
              </h2>
            </div>

            {FEATURES.map((feature, i) => (
              <div
                key={feature.id}
                id={feature.id}
                className="min-h-screen flex flex-col justify-center py-16 md:py-0"
              >
                {/* Mobile: show screenshot inline */}
                <div className="md:hidden mb-8 flex justify-center">
                  <div
                    className="relative rounded-[32px] border-8 border-[#1f2937] overflow-hidden shadow-xl"
                    style={{ width: 200, height: 414 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feature.screenshot}
                      alt={feature.headline}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Category pill */}
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase mb-4 w-fit"
                  style={{
                    backgroundColor: feature.accent + "20",
                    color: feature.accent,
                  }}
                >
                  {feature.pill}
                </span>
                <h3 className="text-2xl font-bold text-[#111827] mb-4 md:text-3xl">
                  {feature.headline}
                </h3>
                <p className="text-[#6b7280] text-base md:text-lg leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Sticky phone — right column on desktop */}
          <div className="hidden md:block">
            {/* Progress dots */}
            <div
              className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center gap-8 py-16"
              style={{ height: "100vh" }}
            >
              {/* Dot progress — left of phone */}
              <div className="flex flex-col gap-3">
                {FEATURES.map((f, i) => (
                  <div
                    key={f.id}
                    className="w-1.5 rounded-full transition-all duration-500"
                    style={{
                      height: i === activeIndex ? "2rem" : "0.375rem",
                      backgroundColor: i === activeIndex ? activeFeature.accent : "#e5e7eb",
                    }}
                  />
                ))}
              </div>
              <PhoneFrame
                screens={SCREENS}
                activeScreenId={activeId}
                glowColor={activeFeature.accent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
