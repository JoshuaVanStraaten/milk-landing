import { SectionReveal } from "@/components/ui/SectionReveal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const SCREENS = [
  { src: "/screenshots/deals_light.webp", alt: "Milk app", screenId: "how-screen" },
];

const FEATURES = [
  {
    number: "1",
    title: "Live Deals Feed",
    description: "Hot specials from all 4 stores, updated daily. Never miss a sale on the brands your family loves.",
    accent: "#10b981",
    position: "left-top",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Price Comparison",
    description: "Same product. Four stores. One screen. Know exactly who's cheapest before you buy.",
    accent: "#f59e0b",
    position: "right-top",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M13 3h8m0 0v8m0-8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "AI Recipe Ideas",
    description: "Tell us what you want to cook — we'll find every ingredient at the best price across all stores.",
    accent: "#10b981",
    position: "left-bottom",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Smart Shopping Lists",
    description: "Add items, share with your household, and check off as you go. Shopping made simple.",
    accent: "#f59e0b",
    position: "right-bottom",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HowMilkWorks() {
  const leftFeatures = FEATURES.filter((f) => f.position.startsWith("left"));
  const rightFeatures = FEATURES.filter((f) => f.position.startsWith("right"));

  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-3">
              How Milk Works
            </p>
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl">
              Everything you need,{" "}
              <span className="gradient-text">in one app.</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Desktop: 3-col grid with phone center */}
        <div className="hidden md:grid grid-cols-[1fr_300px_1fr] gap-8 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-12">
            {leftFeatures.map((feature, i) => (
              <SectionReveal key={feature.number} delay={i * 100}>
                <div className="flex flex-col items-end text-right gap-3">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: feature.accent + "20", color: feature.accent }}
                    >
                      {feature.icon}
                    </div>
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: feature.accent }}
                    >
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111827]">{feature.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed max-w-[220px]">
                    {feature.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Center: phone with decorative circle */}
          <SectionReveal>
            <div className="relative flex items-center justify-center">
              {/* Decorative circle behind phone */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 320,
                  height: 320,
                  background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 60%, transparent 100%)",
                }}
              />
              <PhoneFrame screens={SCREENS} activeScreenId="how-screen" />
            </div>
          </SectionReveal>

          {/* Right features */}
          <div className="flex flex-col gap-12">
            {rightFeatures.map((feature, i) => (
              <SectionReveal key={feature.number} delay={i * 100 + 50}>
                <div className="flex flex-col items-start text-left gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: feature.accent }}
                    >
                      {feature.number}
                    </span>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                      style={{ backgroundColor: feature.accent + "20", color: feature.accent }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#111827]">{feature.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed max-w-[220px]">
                    {feature.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Mobile: phone on top, features stacked below */}
        <div className="md:hidden">
          <SectionReveal>
            <div className="relative flex items-center justify-center mb-12">
              <div
                className="absolute rounded-full"
                style={{
                  width: 260,
                  height: 260,
                  background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 100%)",
                }}
              />
              <PhoneFrame screens={SCREENS} activeScreenId="how-screen" />
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
              <SectionReveal key={feature.number} delay={i * 80}>
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: feature.accent }}
                    >
                      {feature.number}
                    </span>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl flex-shrink-0"
                      style={{ backgroundColor: feature.accent + "20", color: feature.accent }}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#111827] mb-1">{feature.title}</h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{feature.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
