"use client";

import { useEffect, useState } from "react";

export function SignupCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/signup-count")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null || count === 0) {
    return (
      <p className="text-sm text-[#6b7280]">Be among the first to join.</p>
    );
  }

  return (
    <p className="text-sm text-[#6b7280]">
      Join{" "}
      <span className="font-semibold text-[#10b981]">
        {count.toLocaleString("en-ZA")}
      </span>{" "}
      others on the waitlist.
    </p>
  );
}
