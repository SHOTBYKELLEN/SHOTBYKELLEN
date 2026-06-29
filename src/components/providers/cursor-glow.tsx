"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle radial glow that follows the pointer. Desktop (fine pointer) only —
 * hidden via CSS on touch devices and respects prefers-reduced-motion by
 * skipping the rAF loop entirely.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !isFinePointer) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let rafId: number;

    function handleMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function animate() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (el) {
        el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[1] hidden h-[400px] w-[400px] rounded-full opacity-30 mix-blend-screen lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}
