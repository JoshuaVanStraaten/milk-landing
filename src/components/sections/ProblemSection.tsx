import { SectionReveal } from "@/components/ui/SectionReveal";

const painPoints = [
  {
    number: "01",
    question: "Is Woolies really cheaper than Checkers for milk?",
    detail:
      "Spoiler: it depends on the week. And who has time to check every store?",
  },
  {
    number: "02",
    question: "Why does the same cereal cost R20 more at one store?",
    detail:
      "Retailers set their own prices. Without a tool to compare, you're guessing.",
  },
  {
    number: "03",
    question: "How much are you leaving on the table every shop?",
    detail:
      "South African families overspend by hundreds of rands a month — just by not comparing.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-[#111827] py-24 md:py-32 overflow-hidden">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Tired of overpaying{" "}
              <span className="text-[#f59e0b]">every week?</span>
            </h2>
            <p className="mt-4 text-[#9ca3af] text-lg max-w-xl mx-auto">
              You work hard for your money. You shouldn&apos;t have to overspend just
              because comparing prices is a mission.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <SectionReveal key={point.number} delay={i * 120}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                <div className="text-5xl font-bold text-[#f59e0b]/20 mb-4 leading-none">
                  {point.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {point.question}
                </h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
