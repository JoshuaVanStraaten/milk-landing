"use client";

import { useEffect, useState } from "react";

export function SignupCounter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/signup-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  const textCls = variant === "light" ? "text-white/80" : "text-[#6b7280]";
  const accentCls = variant === "light" ? "text-white font-semibold" : "font-semibold text-[#10b981]";

  if (count === null || count === 0) {
    return (
      <p className={`text-sm ${textCls}`}>Be among the first to join.</p>
    );
  }

  return (
    <p className={`text-sm ${textCls}`}>
      Join{" "}
      <span className={accentCls}>
        {count.toLocaleString("en-ZA")}
      </span>{" "}
      others on the waitlist.
    </p>
  );
}
