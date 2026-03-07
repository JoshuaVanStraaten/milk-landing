import { SectionReveal } from "@/components/ui/SectionReveal";

const STEPS = [
  {
    number: "1",
    title: "Find your nearest store",
    description:
      "Let Milk know which stores are close to you — or browse all four retailers nationwide.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 2C10.477 2 6 6.477 6 12c0 7 10 18 10 18s10-11 10-18c0-5.523-4.477-10-10-10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Browse the best deals",
    description:
      "See today's hottest specials across all stores, or search for specific products to compare prices instantly.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 12h24M10 6V4M22 6V4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 18h5M9 22h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="23" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M25.5 22.5l2 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Save money, every shop",
    description:
      "Know exactly which store to visit. Build your shopping list around the best prices. Save R200+ a month.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4v4M16 24v4M4 16h4M24 16h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M13 16l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f9fafb] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl">
              Up and running in{" "}
              <span className="text-[#10b981]">60 seconds</span>
            </h2>
            <p className="mt-4 text-[#6b7280] text-lg max-w-lg mx-auto">
              No account setup required. No credit card. Just open the app and
              start saving.
            </p>
          </div>
        </SectionReveal>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #10b981 0, #10b981 8px, transparent 8px, transparent 16px)",
            }}
          />

          {STEPS.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
                {/* Background step number */}
                <div className="absolute top-4 right-5 text-7xl font-bold text-[#10b981]/8 leading-none select-none">
                  {step.number}
                </div>

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d1fae5] text-[#059669]">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
