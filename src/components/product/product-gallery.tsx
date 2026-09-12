"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

const ZOOM_SCALE = 2.35;

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const frameRef = useRef<HTMLDivElement>(null);
  const current = images[active] ?? images[0];

  const handleMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-[72px_1fr]">
      <div className="order-2 flex gap-2 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative h-16 w-16 shrink-0 overflow-hidden border bg-[#ece8e2] transition-colors",
              active === index
                ? "border-stone-900"
                : "border-transparent hover:border-stone-400"
            )}
          >
            <Image
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      <div
        ref={frameRef}
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMove}
        className="relative order-1 aspect-[4/5] cursor-zoom-in overflow-hidden bg-[#ece8e2] md:order-2"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: isZooming ? `scale(${ZOOM_SCALE})` : "scale(1)",
                transformOrigin: `${origin.x}% ${origin.y}%`,
                transition: isZooming
                  ? "transform 0.12s ease-out"
                  : "transform 0.35s ease-in-out",
              }}
            >
              <Image
                src={current}
                alt={alt}
                fill
                priority
                className="object-cover select-none"
                sizes="(max-width:768px) 100vw, 50vw"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className={cn(
            "pointer-events-none absolute bottom-4 right-4 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-stone-600 backdrop-blur-sm transition-opacity duration-300",
            isZooming ? "opacity-0" : "opacity-100"
          )}
        >
          Hover to zoom
        </div>
      </div>
    </div>
  );
}
