import { useCursor } from "../../hooks/useCursor";

export default function Cursor() {
  const { cursorRef, hovering } = useCursor();

  return (
    <div
      ref={cursorRef}
      style={{
        background: hovering ? "transparent" : "var(--bg-hader-scroll)",
        border: hovering ? "2px solid var(--bg-hader-scroll)" : "none",
        transition: "background 0.2s, border 0.2s",
        top: 0,
        left: 0,
      }}
      className="fixed pointer-events-none z-[9999] w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2"
    />
  );
}