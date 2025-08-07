import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedIntroLabelProps {
  text: string;
  className?: string;
}

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

const AnimatedIntroLabel = ({ text, className }: AnimatedIntroLabelProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Map the element's top position to a 0-1 progress range
      const start = vh * 0.75; // animation starts when near lower viewport
      const end = vh * 0.30;   // completes before center
      const p = 1 - (rect.top - end) / (start - end);
      setProgress(clamp(p));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Staged animation values
  const split = clamp((progress - 0.2) / 0.8); // 0 -> 1 after 20% progress
  const splitOpacity = clamp((progress - 0.18) / 0.15); // fade in split lines shortly after start
  const textOpacity = clamp((progress - 0.35) / 0.25); // text fades in
  const centerLineOpacity = 1 - clamp((progress - 0.1) / 0.2); // single line fades out

  // Line widths in pixels for a balanced label
  const maxLine = 64;  // final line length on each side
  const leftWidth = maxLine * split;
  const rightWidth = leftWidth;

  return (
    <div ref={ref} className={cn("relative flex items-center justify-center h-8", className)}>
      {/* Single center line (initial state) */}
      <div
        aria-hidden
        className="absolute w-[168px] flex items-center justify-center"
        style={{ opacity: centerLineOpacity }}
      >
        <div className="h-0.5 bg-electric-blue w-[168px]" />
      </div>

      {/* Split expanding lines + text */}
      <div className="relative z-10 inline-flex items-center space-x-4 select-none" style={{ opacity: splitOpacity, visibility: splitOpacity > 0 ? 'visible' : 'hidden' }}>
        <div
          aria-hidden
          className="h-0.5 bg-electric-blue rounded-full"
          style={{ width: `${leftWidth}px`, transition: "none" }}
        />
        <span
          className="text-sm font-bold uppercase tracking-[0.2em] text-electric-blue"
          style={{ opacity: textOpacity }}
        >
          {text}
        </span>
        <div
          aria-hidden
          className="h-0.5 bg-electric-blue rounded-full"
          style={{ width: `${rightWidth}px`, transition: "none" }}
        />
      </div>
    </div>
  );
};

export default AnimatedIntroLabel;
