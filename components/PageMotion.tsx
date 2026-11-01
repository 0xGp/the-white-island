"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/** Light enter animation for a stage page (respects reduced motion). */
export default function PageMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.from(root.current?.querySelectorAll("[data-rise]") ?? [], {
        y: 22,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
      });
    },
    { scope: root },
  );
  return (
    <div ref={root} className="page-stage">
      {children}
    </div>
  );
}
