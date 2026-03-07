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
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-16 md:flex-row md:gap-20 md:items-start">
          {/* Left: large heading */}
          <SectionReveal>
            <div className="md:flex-[0_0_44%]">
              <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-4">
                The problem
              </p>
              <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl leading-tight">
                Tired of overpaying{" "}
                <span className="text-[#f59e0b]">every week?</span>
              </h2>
              <p className="mt-6 text-[#6b7280] text-lg leading-relaxed max-w-sm">
                You work hard for your money. You shouldn&apos;t have to overspend just
                because comparing prices is a mission.
              </p>
            </div>
          </SectionReveal>

          {/* Right: staggered pain point cards */}
          <div className="flex-1 flex flex-col gap-5">
            {painPoints.map((point, i) => (
              <SectionReveal key={point.number} delay={i * 100}>
                <div
                  className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ marginLeft: i === 1 ? "1.5rem" : i === 2 ? "3rem" : "0" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fef3c7] text-[#92400e] text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#111827] mb-1 leading-snug">
                        {point.question}
                      </h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
