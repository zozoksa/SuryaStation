import type { ReactNode } from "react";
import { brandBg } from "../../lib/theme";

interface BrandButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function BrandButton({
  children,
  onClick,
  className = "",
  outline = false,
  type = "button",
  ariaLabel,
}: BrandButtonProps) {
  if (outline) {
    return (
      <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`px-6 py-3 rounded-2xl border-2 border-white text-white font-semibold transition-all duration-200 hover:bg-white hover:text-[#e8290b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      style={brandBg}
      className={`px-6 py-3 rounded-2xl font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-200 hover:opacity-90 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8290b]/40 ${className}`}
    >
      {children}
    </button>
  );
}
