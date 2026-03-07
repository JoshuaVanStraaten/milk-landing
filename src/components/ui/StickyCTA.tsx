"use client";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const waitlistEl = document.getElementById("waitlist");

    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    const waitlistObserver = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (heroEl) heroObserver.observe(heroEl);
    if (waitlistEl) waitlistObserver.observe(waitlistEl);

    return () => {
      heroObserver.disconnect();
      waitlistObserver.disconnect();
    };
  }, []);

  if (!visible || hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div
        className="bg-[#10b981] px-4 pt-3 rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href="#waitlist"
          className="flex h-12 w-full items-center justify-center rounded-full bg-white font-semibold text-[#059669] text-base transition-all active:scale-95"
        >
          Join the Waitlist — it&apos;s free
        </a>
      </div>
    </div>
  );
}
