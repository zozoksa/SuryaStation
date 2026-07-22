// ─── Design Tokens ───────────────────────────────────────────────────────────
// Single source of truth for brand color + gradients so we never hard-code the
// same "linear-gradient(135deg, #e8290b 0%, #f97316 100%)" string 20 times again.

export const brand = {
  red: "#e8290b",
  orange: "#f97316",
  ink: "#1a1a1a",
  inkSoft: "#4a4a4a",
  muted: "#6b6b6b",
  faint: "#9a9a9a",
  line: "#f0eeec",
  surface: "#f7f5f3",
} as const;

// Food-delivery vertical gets its own fresh accent while staying in the family.
export const food = {
  green: "#1f8a54",
  lime: "#7bb662",
} as const;

export const gradients = {
  brand: `linear-gradient(135deg, ${brand.red} 0%, ${brand.orange} 100%)`,
  brandFlat: `linear-gradient(90deg, ${brand.red}, ${brand.orange})`,
  night: "linear-gradient(135deg, #1a1a1a 0%, #2d1a1a 50%, #1a0a00 100%)",
  nightSafety: "linear-gradient(135deg, #1a1a1a 0%, #2d0a00 100%)",
  food: `linear-gradient(135deg, ${food.green} 0%, ${food.lime} 100%)`,
} as const;

// Reusable inline-style helpers.
export const brandBg = { background: gradients.brand };
export const foodBg = { background: gradients.food };
