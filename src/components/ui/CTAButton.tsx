"use client";

import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark";
  size?: "md" | "lg";
}

export function CTAButton({
  variant = "primary",
  size = "lg",
  children,
  className = "",
  ...props
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#10b981] text-white hover:bg-[#059669] focus-visible:ring-[#10b981] active:scale-95",
    dark: "bg-[#111827] text-white hover:bg-[#1f2937] focus-visible:ring-[#111827] active:scale-95",
  };

  const sizes = {
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} hover:scale-[1.02] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
