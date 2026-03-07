import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SignupCounter } from "@/components/ui/SignupCounter";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ubicorp.milkza";
const TESTING_URL =
  "https://play.google.com/apps/testing/com.ubicorp.milkza";

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #34d399, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl leading-tight">
              Ready to start saving?
            </h2>
            <p className="mt-4 text-[#d1fae5] text-lg max-w-md">
              Join thousands of South African shoppers who are done overpaying for groceries.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 md:items-start">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-[#111827] hover:bg-gray-50 transition-colors min-w-[180px]"
              >
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.79.24 1.19.12l12.31-7.11-2.92-2.92-10.58 9.91zM.5 2.5C.19 2.84 0 3.35 0 4v16c0 .65.19 1.16.5 1.5l.08.07 8.96-8.96v-.21L.58 2.43.5 2.5zM20.66 10.06l-2.56-1.48-3.26 3.26 3.26 3.26 2.57-1.48c.73-.42.73-1.12 0-1.56zM4.37.12L16.68 7.23l-2.92 2.92L3.18.24C3.58.12 4 .16 4.37.12z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-500 font-normal">Download on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>

              <div className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 px-5 py-3.5 text-white/60 min-w-[180px] cursor-not-allowed">
                <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none font-normal">Coming soon to</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </div>
            </div>

            <a
              href={TESTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-[#a7f3d0] font-medium hover:text-white underline underline-offset-2 transition-colors"
            >
              Join the beta testing program →
            </a>

            <div className="mt-5 text-white font-medium text-base">
              <SignupCounter variant="light" />
            </div>
          </div>

          {/* Right: Waitlist form card */}
          <div>
            <div
              className="rounded-2xl bg-white p-6 md:p-8"
              style={{ boxShadow: "0 0 60px rgba(16,185,129,0.3), 0 25px 50px -12px rgba(0,0,0,0.25)" }}
            >
              <h3 className="text-xl font-bold text-[#111827] mb-1">Join the waitlist</h3>
              <p className="text-sm text-[#6b7280] mb-5">Get notified when early access opens.</p>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
