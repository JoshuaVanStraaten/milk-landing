import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

const BLOCK_1_CARDS = [
  {
    title: "All 4 stores in one place",
    description: "No more switching between apps or websites. Every deal, every price, every store — all in Milk.",
    accent: "#10b981",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Side-by-side price comparison",
    description: "See the exact price of any product at each retailer instantly — no guessing, no driving around.",
    accent: "#f59e0b",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const BLOCK_2_CARDS = [
  {
    title: "AI-powered recipe matching",
    description: "Pick a recipe and Milk automatically finds every ingredient at the best combined price across all stores.",
    accent: "#10b981",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Collaborative shopping lists",
    description: "Share your list with family in real-time. Tick items off as you go and never double-up on groceries.",
    accent: "#f59e0b",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function FeatureCard({ title, description, accent, icon }: { title: string; description: string; accent: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
        style={{ backgroundColor: accent + "20", color: accent }}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-[#111827] mb-2">{title}</h3>
      <p className="text-sm text-[#6b7280] leading-relaxed">{description}</p>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative rounded-[36px] border-8 border-[#1f2937] overflow-hidden shadow-2xl bg-[#1f2937]"
      style={{ width: 300, height: 622 }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1f2937] rounded-full z-10" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" loading="lazy" />
    </div>
  );
}

export function FeatureDeepDive() {
  return (
    <section id="how-it-works" className="bg-[#f9fafb] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-3">
              Features
            </p>
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl">
              Built for South African shoppers
            </h2>
          </div>
        </SectionReveal>

        {/* Block 1: Phone LEFT, cards RIGHT */}
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-28">
            {/* Phone */}
            <div className="flex justify-center order-1 md:order-1">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 280,
                    height: 280,
                    background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
                  }}
                />
                <PhoneMockup src="/screenshots/price_compare_light.webp" alt="Price comparison" />
              </div>
            </div>
            {/* Cards */}
            <div className="flex flex-col gap-4 order-2 md:order-2">
              {BLOCK_1_CARDS.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Block 2: cards LEFT, Phone RIGHT */}
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Cards */}
            <div className="flex flex-col gap-4 order-2 md:order-1">
              {BLOCK_2_CARDS.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
            {/* Phone */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute rounded-full"
                  style={{
                    width: 280,
                    height: 280,
                    background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
                  }}
                />
                <PhoneMockup src="/screenshots/recipe_light.webp" alt="AI recipe matching" />
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
