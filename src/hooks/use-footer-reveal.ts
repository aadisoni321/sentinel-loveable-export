import { useEffect, useRef, useState } from "react";

/**
 * useFooterReveal
 * - Computes a smooth translateY value to lift the page content and reveal a fixed footer behind it
 * - Reveal begins at 80% page scroll and completes at 100%
 * - Uses Intersection Observer to limit work to when the bottom sentinel is near viewport
 * - Respects prefers-reduced-motion
 */
export default function useFooterReveal() {
  const [revealY, setRevealY] = useState(0);
  const footerHeightRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;
    const onPrefChange = () => (reducedMotionRef.current = mql.matches);
    mql.addEventListener?.("change", onPrefChange);

    const measure = () => {
      const footer = document.getElementById("footer-reveal");
      footerHeightRef.current = footer?.getBoundingClientRect().height || 0;
    };

    const computeTarget = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = scrollTop / maxScroll; // 0..1
      const start = 0.8;
      const end = 1.0;
      const tRaw = (progress - start) / (end - start);
      const t = Math.max(0, Math.min(1, tRaw));
      targetRef.current = footerHeightRef.current * t;
    };

    const animate = () => {
      rafRef.current = null;
      // Ease current value toward target using a smoothing factor
      setRevealY((current) => {
        const target = reducedMotionRef.current ? targetRef.current : targetRef.current;
        if (reducedMotionRef.current) return target; // no animated easing
        const delta = target - current;
        const next = current + delta * 0.12; // cubic-ish easing
        // Snap when close to target to avoid jitter
        return Math.abs(next - target) < 0.5 ? target : next;
      });
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (!activeRef.current) return; // only compute near bottom
      computeTarget();
      schedule();
    };

    const onResize = () => {
      measure();
      computeTarget();
      schedule();
    };

    // Intersection Observer to toggle active state when bottom area comes near viewport
    const sentinel = document.getElementById("footer-reveal-sentinel");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          activeRef.current = entry.isIntersecting;
          if (activeRef.current) {
            measure();
            computeTarget();
            schedule();
          }
        }
      },
      { root: null, threshold: 0.3 }
    );
    if (sentinel) io.observe(sentinel);

    // Initial measure
    measure();
    computeTarget();
    schedule();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      mql.removeEventListener?.("change", onPrefChange);
    };
  }, []);

  return revealY;
}
