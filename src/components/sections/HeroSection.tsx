import { SignupCounter } from "@/components/ui/SignupCounter";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ubicorp.milkza";
const TESTING_URL =
  "https://play.google.com/apps/testing/com.ubicorp.milkza";

const SCREENS = [
  { src: "/screenshots/deals_light.webp", alt: "Live deals feed", screenId: "hero-screen" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
            {/* Badge */}
            <div className="animate-fade-slide-up" style={{ animationDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-4 py-1.5 text-sm font-semibold text-[#065f46] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse-dot" />
                Now available on Android
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-slide-up"
              style={{ animationDelay: "80ms" }}
            >
              Save on every
              <br />
              <span className="gradient-text">grocery shop.</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-6 text-lg leading-relaxed text-[#6b7280] max-w-md animate-fade-slide-up"
              style={{ animationDelay: "160ms" }}
            >
              Compare prices at Pick n Pay, Woolworths, Checkers and Shoprite — so you always know who&apos;s cheapest before you shop.
            </p>

            {/* Store buttons */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 md:items-start animate-fade-slide-up"
              style={{ animationDelay: "240ms" }}
            >
              {/* Google Play button */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#111827] px-5 py-3.5 text-white hover:bg-[#1f2937] transition-colors min-w-[180px]"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.79.24 1.19.12l12.31-7.11-2.92-2.92-10.58 9.91zM.5 2.5C.19 2.84 0 3.35 0 4v16c0 .65.19 1.16.5 1.5l.08.07 8.96-8.96v-.21L.58 2.43.5 2.5zM20.66 10.06l-2.56-1.48-3.26 3.26 3.26 3.26 2.57-1.48c.73-.42.73-1.12 0-1.56zM4.37.12L16.68 7.23l-2.92 2.92L3.18.24C3.58.12 4 .16 4.37.12z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-400 font-normal">Download on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* iOS coming soon */}
              <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-gray-200 px-5 py-3.5 text-[#6b7280] min-w-[180px] opacity-60 cursor-not-allowed">
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none font-normal">Coming soon to</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </div>
            </div>

            {/* Testing program link */}
            <div
              className="mt-4 animate-fade-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={TESTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#10b981] font-medium hover:text-[#059669] underline underline-offset-2 transition-colors"
              >
                Join the beta testing program →
              </a>
            </div>

            {/* Signup counter */}
            <div
              className="mt-5 animate-fade-slide-up"
              style={{ animationDelay: "340ms" }}
            >
              <SignupCounter />
            </div>
          </div>

          {/* Right: phone mockup + decorative circle */}
          <div className="relative flex items-center justify-center order-1 md:order-2 animate-float-in">
            {/* Large decorative circle */}
            <div
              className="absolute rounded-full"
              style={{
                width: "min(400px, 85vw)",
                height: "min(400px, 85vw)",
                background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 60%, transparent 100%)",
              }}
            />
            {/* Secondary smaller accent circle */}
            <div
              className="absolute rounded-full"
              style={{
                width: "min(200px, 42vw)",
                height: "min(200px, 42vw)",
                background: "rgba(245,158,11,0.10)",
                transform: "translate(40%, 35%)",
              }}
            />
            <PhoneFrame screens={SCREENS} activeScreenId="hero-screen" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#10b981]/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/40" />
      </div>
    </section>
  );
}
