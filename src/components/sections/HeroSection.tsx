import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { SignupCounter } from "@/components/ui/SignupCounter";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Radial emerald glow behind image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 75% 50%, rgba(16,185,129,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 md:py-32">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-16">
          {/* Text column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-1 order-2 md:order-1">
            <div className="animate-fade-slide-up" style={{ animationDelay: "0ms" }}>
              <span className="inline-block rounded-full bg-[#d1fae5] px-4 py-1.5 text-sm font-semibold text-[#065f46] mb-6">
                Now in early access
              </span>
            </div>

            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-slide-up"
              style={{ animationDelay: "80ms" }}
            >
              Stop overpaying
              <br />
              <span className="text-[#10b981]">for groceries.</span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-[#6b7280] max-w-md animate-fade-slide-up"
              style={{ animationDelay: "160ms" }}
            >
              Milk compares prices at Pick n Pay, Woolworths, Checkers and
              Shoprite — so you always know who&apos;s cheapest before you shop.
            </p>

            <div
              className="mt-8 flex flex-col items-center gap-3 md:items-start animate-fade-slide-up"
              style={{ animationDelay: "240ms" }}
            >
              <a href="#waitlist">
                <CTAButton size="lg">Join the Waitlist — it&apos;s free</CTAButton>
              </a>
              <SignupCounter />
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex-1 flex items-center justify-center order-1 md:order-2 animate-float-in">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
              <Image
                src="/images/hero.webp"
                alt="Milk app — grocery price comparison"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#10b981]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/40" />
      </div>
    </section>
  );
}
