"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/** Wraps a control with a subtle pointer-following pull, disabled for touch input. */
export default function MagneticButton({
  children,
  className,
  onClick,
  as = "button",
  href,
  ariaLabel,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
    >
      {as === "a" ? (
        <motion.a
          whileTap={{ scale: 0.96 }}
          onClick={onClick}
          href={href}
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </motion.a>
      ) : (
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
          type={type}
          disabled={disabled}
        >
          {children}
        </motion.button>
      )}
    </div>
  );
}
