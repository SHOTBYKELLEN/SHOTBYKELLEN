"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/data/portfolio";

interface LightboxProps {
  items: PortfolioItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 sm:p-10"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 z-10 text-white/80 transition-colors hover:text-white"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:right-6"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full max-w-4xl flex-col items-center"
          >
            <div className="relative max-h-[80vh] w-full overflow-hidden rounded-md">
              {item.isVideo && item.video ? (
                <video
                  key={item.video}
                  src={item.video}
                  poster={item.image}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[80vh] w-auto object-contain"
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="max-h-[80vh] w-auto object-contain"
                  sizes="90vw"
                />
              )}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm uppercase tracking-widest text-white/50">
                {item.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
