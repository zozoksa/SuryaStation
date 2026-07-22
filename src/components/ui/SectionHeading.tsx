import type { ReactNode } from "react";

// Eyebrow: the small uppercase label above a heading. Only used where content
// genuinely benefits from a category label, never as decoration.
export function Eyebrow({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e8290b]">
      {icon}
      {children}
    </span>
  );
}

// Fluid heading used across sections so type scale stays consistent everywhere.
export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-extrabold text-[#1a1a1a] leading-tight ${className}`}
      style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
    >
      {children}
    </h2>
  );
}
