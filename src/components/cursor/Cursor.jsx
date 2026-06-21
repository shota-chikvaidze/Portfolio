import { useCursor } from "../../hooks/useCursor";

export default function Cursor() {
  const { cursorRef, hovering } = useCursor();

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        background: hovering
          ? "color-mix(in srgb, var(--color-accent) 18%, transparent)"
          : "transparent",
        borderColor: hovering ? "var(--color-accent)" : "var(--color-line-strong)",
        transition: "background 0.2s, border-color 0.2s, transform 0.15s",
        top: 0,
        left: 0,
      }}
      className="pointer-events-none fixed z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border md:block"
    />
  );
}
