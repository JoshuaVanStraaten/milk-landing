import { SectionReveal } from "@/components/ui/SectionReveal";

const UPCOMING = [
  {
    title: "Fuel Price Tracker",
    description:
      "Find the cheapest petrol near you. Because groceries aren't the only bill eating your budget.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 22V8l9-6 9 6v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8l3-3M19 5v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Price Trends",
    description:
      "See how prices have moved over time. Know when to stock up and when to hold off.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-5 4 3 5-7 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Diet & Health Tracking",
    description:
      "Eat well without spending more. Track nutrition as you shop — smart choices made easy.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Savings Dashboard",
    description:
      "See exactly how much Milk has saved you — this week, this month, this year. Bragging rights included.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v1m0 8v1M9.5 9.5C9.5 8.7 10.2 8 12 8s2.5.7 2.5 1.5c0 2-5 2-5 4S10.2 16 12 16s2.5-.7 2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ComingSoonSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-3">
              Coming Soon
            </p>
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl">
              We&apos;re just getting started.
            </h2>
            <p className="mt-4 text-[#6b7280] text-lg max-w-xl mx-auto">
              Building more features to help you save across every part of your budget — not just groceries.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {UPCOMING.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 100}>
              <div className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]">
                    Coming soon
                  </span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d1fae5] text-[#059669] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
