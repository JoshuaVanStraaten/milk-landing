"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";
import type { WaitlistFormData, FormStatus } from "@/types/waitlist";

const STORES = [
  { id: "pnp", label: "Pick n Pay", colour: "#e31837" },
  { id: "woolworths", label: "Woolworths", colour: "#006341" },
  { id: "checkers", label: "Checkers", colour: "#005eb8" },
  { id: "shoprite", label: "Shoprite", colour: "#ff6600" },
];

const REFERRAL_OPTIONS = [
  { value: "", label: "How did you hear about us?" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "friend", label: "A friend" },
  { value: "google", label: "Google" },
  { value: "other", label: "Other" },
];

export function WaitlistForm() {
  const [form, setForm] = useState<WaitlistFormData>({
    email: "",
    name: "",
    stores: [],
    wants_beta: false,
    referral_source: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  function toggleStore(id: string) {
    setForm((f) => ({
      ...f,
      stores: f.stores.includes(id)
        ? f.stores.filter((s) => s !== id)
        : [...f.stores, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        if (form.wants_beta) {
          // Fire confetti dynamically
          import("canvas-confetti").then(({ default: confetti }) => {
            confetti({
              particleCount: 120,
              spread: 70,
              colors: ["#10b981", "#f59e0b", "#ffffff"],
            });
          });
        }
      } else if (data.error === "already_registered") {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "success" || status === "duplicate") {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">{status === "success" ? "🎉" : "👋"}</div>
        <h3 className="text-xl font-bold text-[#111827] mb-2">
          {status === "success"
            ? "You're on the list!"
            : "You're already signed up!"}
        </h3>
        <p className="text-[#6b7280] mb-6">
          {status === "success"
            ? "We'll be in touch as soon as early access opens."
            : "We've already got your details — we'll be in touch soon."}
        </p>
        {form.wants_beta && status === "success" && (
          <div className="rounded-xl bg-[#f0fdf4] border border-[#86efac] p-4 text-sm text-[#166534]">
            <p className="font-semibold mb-1">Beta access coming soon</p>
            <p>
              We&apos;ll send you an invite link once the Google Play closed
              beta is ready.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Email address <span className="text-[#e31837]">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111827] placeholder-gray-400 focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 transition-colors"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          First name <span className="text-[#6b7280] font-normal">(optional)</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your first name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#111827] placeholder-gray-400 focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 transition-colors"
        />
      </div>

      {/* Store preferences */}
      <div>
        <p className="block text-sm font-medium text-[#374151] mb-2">
          Which stores do you shop at?{" "}
          <span className="text-[#6b7280] font-normal">(optional)</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {STORES.map((store) => {
            const checked = form.stores.includes(store.id);
            return (
              <button
                key={store.id}
                type="button"
                onClick={() => toggleStore(store.id)}
                className={`flex items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-all min-h-[44px] ${
                  checked
                    ? "text-white"
                    : "border-gray-200 bg-white text-[#374151] hover:border-gray-300"
                }`}
                style={
                  checked
                    ? { backgroundColor: store.colour, borderColor: store.colour }
                    : {}
                }
              >
                <span
                  className={`inline-block w-4 h-4 rounded border-2 flex-shrink-0 ${
                    checked ? "bg-white/30 border-white/50" : "border-gray-300"
                  }`}
                />
                {store.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Beta tester */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={form.wants_beta}
            onChange={(e) =>
              setForm((f) => ({ ...f, wants_beta: e.target.checked }))
            }
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
              form.wants_beta
                ? "bg-[#10b981] border-[#10b981]"
                : "border-gray-300 group-hover:border-[#10b981]"
            }`}
          >
            {form.wants_beta && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm text-[#374151]">
          I want to beta test the app before launch
        </span>
      </label>

      {/* Referral source */}
      <div>
        <label
          htmlFor="referral"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          How did you hear about us?{" "}
          <span className="text-[#6b7280] font-normal">(optional)</span>
        </label>
        <select
          id="referral"
          value={form.referral_source}
          onChange={(e) =>
            setForm((f) => ({ ...f, referral_source: e.target.value }))
          }
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#374151] focus:border-[#10b981] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 transition-colors"
        >
          {REFERRAL_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="text-sm text-[#e31837] font-medium">{error}</p>
      )}

      <CTAButton
        type="submit"
        variant="dark"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist"}
      </CTAButton>

      <p className="text-xs text-center text-[#9ca3af]">
        No spam. Unsubscribe any time.
      </p>
    </form>
  );
}
