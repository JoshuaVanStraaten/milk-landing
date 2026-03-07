import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { SignupCounter } from "@/components/ui/SignupCounter";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
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

      <div className="relative mx-auto max-w-xl px-5">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get early access to Milk
          </h2>
          <p className="mt-3 text-[#d1fae5] text-lg">
            Save R200+ a month.
          </p>
          <div className="mt-1 text-white font-medium text-base">
            <SignupCounter />
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
