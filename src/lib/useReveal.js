import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsapConfig";

/**
 * Fades + lifts the children of the returned ref that match `selector`
 * into place as they enter the viewport, staggered.
 */
export function useReveal(selector = "[data-reveal]", options = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !scopeRef.current) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: 28 });

      ScrollTrigger.batch(targets, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.12,
            ...options,
          }),
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [selector]);

  return scopeRef;
}
