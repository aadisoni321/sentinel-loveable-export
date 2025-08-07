import { useEffect, useRef } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

export default function useFooterReveal() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    let blueHeight = 0;

    const measure = () => {
      const blue = document.getElementById("footer-blue");
      blueHeight = blue ? blue.getBoundingClientRect().height : 0;
    };

    const apply = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      const ratio = maxScroll > 0 ? y / maxScroll : 0;
      const start = 0.8; // start reveal at 80%
      const raw = ratio <= start ? 0 : (ratio - start) / (1 - start);
      const eased = easeOutCubic(clamp(raw));
      const translate = -eased * blueHeight;
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          apply();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      measure();
      apply();
    };

    // Intersection Observer: re-measure and update as the user nears the footer
    let observer: IntersectionObserver | null = null;
    const trigger = document.getElementById("footer-io-trigger");
    if (trigger) {
      observer = new IntersectionObserver(
        () => {
          measure();
          apply();
        },
        { threshold: [0, 0.5, 1], rootMargin: "0px 0px -20%" }
      );
      observer.observe(trigger);
    }

    measure();
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, []);

  return { contentRef };
}
