import { SectionReveal } from "@/components/ui/SectionReveal";

const UPCOMING = [
  {
    title: "Fuel Price Tracker",
    description:
      "Find the cheapest petrol near you. Because groceries aren't the only bill eating your budget.",
    icon: "⛽",
  },
  {
    title: "Price Trends",
    description:
      "See how prices have moved over time. Know when to stock up and when to hold off.",
    icon: "📈",
  },
  {
    title: "Diet & Health Tracking",
    description:
      "Eat well without spending more. Track nutrition as you shop — smart choices made easy.",
    icon: "🥗",
  },
  {
    title: "Savings Dashboard",
    description:
      "See exactly how much Milk has saved you — this week, this month, this year. Bragging rights included.",
    icon: "💰",
  },
];

export function ComingSoonSection() {
  return (
    <section className="relative bg-[#064e3b] py-24 md:py-32 overflow-hidden">
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Just getting started.
            </h2>
            <p className="mt-4 text-[#6ee7b7] text-lg max-w-xl mx-auto">
              We&apos;re building more features to help you save across every
              part of your budget — not just groceries.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
          {UPCOMING.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 100}>
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                {/* Coming soon badge */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center rounded-full bg-[#f59e0b]/15 px-3 py-1 text-xs font-semibold text-[#fcd34d]">
                    Coming soon
                  </span>
                </div>

                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#a7f3d0] text-sm leading-relaxed">
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
