import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = {
  free: [
    "Track up to 5 subscriptions",
    "Smart renewal alerts",
    "Basic spending insights",
  ],
  pro: [
    "Unlimited subscriptions",
    "One-tap cancellations",
    "Advanced analytics & trends",
    "Bank-grade security",
    "Priority support",
  ],
};

const PricingSection = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const isMonthly = billing === "monthly";
  const proTarget = isMonthly ? 3 : 90;
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const freeCardRef = useRef<HTMLElement>(null);
  const proCardRef = useRef<HTMLElement>(null);
  const freePriceRef = useRef<HTMLSpanElement>(null);
  const proPriceRef = useRef<HTMLSpanElement>(null);

  const displayPrice = isMonthly ? "$3" : "$90";
  const secondaryLine = isMonthly
    ? "$6 from the second month, billed monthly"
    : "Billed annually (equivalent to $7.50/mo)";

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const featureItems = Array.from(sectionEl.querySelectorAll<HTMLElement>('.feature-item'));

    const setNumbersImmediate = () => {
      if (freePriceRef.current) freePriceRef.current.textContent = String(0);
      if (proPriceRef.current) proPriceRef.current.textContent = String(proTarget);
    };

    const animateCount = (el: HTMLElement, end: number, duration = 1500) => {
      const start = 0;
      const startTime = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(progress);
        const value = Math.round(start + (end - start) * eased);
        el.textContent = String(value);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (reduce) {
      setNumbersImmediate();
      freeCardRef.current?.classList.add('in-view');
      proCardRef.current?.classList.add('in-view');
      featureItems.forEach((el) => el.classList.add('in-view'));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            freeCardRef.current?.classList.add('in-view');
            proCardRef.current?.classList.add('in-view');

            featureItems.forEach((el, i) => {
              el.style.transitionDelay = `${i * 150}ms`;
              el.classList.add('in-view');
            });

            if (freePriceRef.current) animateCount(freePriceRef.current, 0);
            if (proPriceRef.current) animateCount(proPriceRef.current, proTarget);

            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [proTarget, hasAnimated]);

  return (
    <section id="pricing" ref={sectionRef} className="bg-background py-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-calm">Pricing</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Start free. Upgrade when you’re ready.
          </p>
        </header>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="pricing-toggle inline-flex w-full max-w-lg items-center gap-1 rounded-md border border-border bg-card p-1 relative">
            <span
              aria-hidden
              className="pricing-toggle-highlight rounded-md"
              style={{ transform: isMonthly ? 'translateX(0)' : 'translateX(calc(100% + 0.25rem))' }}
            />
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={isMonthly}
              className={`flex-1 px-4 py-2 text-sm rounded-md transition-colors ${
                isMonthly
                  ? "bg-toggle text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={!isMonthly}
              className={`flex-1 px-4 py-2 text-sm rounded-md transition-colors ${
                !isMonthly
                  ? "bg-toggle text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly <span className="ml-2 font-medium text-primary">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Free */}
          <article ref={freeCardRef} className="pricing-card enter-left relative border border-border bg-card text-card-foreground p-8 md:p-10 shadow-sm h-full flex flex-col">
            <Badge variant="secondary" className="mb-4 bg-muted text-muted-foreground w-fit">Free</Badge>
            
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="text-5xl md:text-6xl font-extrabold price-amount"><span aria-hidden className="currency">$</span><span ref={freePriceRef}>0</span></div>
                <Badge className="bg-primary/15 text-primary border border-primary/40 opacity-0">Placeholder</Badge>
              </div>
              <p className="text-muted-foreground mt-2">per month, no credit card required</p>
              <div className="h-px w-full bg-border my-8" />
            </div>

            <div className="space-y-3 mt-8 feature-list">
              {features.free.map((f, i) => (
                <div key={f} className="feature-item flex items-start gap-3 text-sm md:text-base text-muted-foreground" data-index={i}>
                  <Check className="size-5 text-primary mt-0.5 check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-col gap-4 mt-auto">
              <Button variant="secondary" className="pricing-cta w-full h-11 bg-muted text-foreground hover:bg-muted/80">Get Sentinel</Button>
            </div>
          </article>

          {/* Pro - highlighted */}
          <article ref={proCardRef} className="pricing-card pro-elevated pro-taller enter-right relative border-2 border-primary bg-card text-card-foreground p-8 md:p-10 shadow-sm overflow-hidden h-full flex flex-col" style={{ backgroundImage: "radial-gradient(hsla(var(--primary),0.12) 1px, transparent 1px)", backgroundSize: "12px 12px", backgroundPosition: "0 0" }}>
            <div className="popular-badge" aria-hidden>MOST POPULAR</div>
            <div className="relative">
              <Badge className="mb-4 bg-primary/15 text-primary border border-primary/40">Pro</Badge>
              <div className="flex items-center gap-3">
                <div className="text-5xl md:text-6xl font-extrabold price-amount"><span aria-hidden className="currency">$</span><span ref={proPriceRef}>0</span></div>
                {isMonthly ? (
                  <Badge className="bg-primary/15 text-primary border border-primary/40">1st-Month Discount</Badge>
                ) : (
                  <Badge className="bg-primary/15 text-primary border border-primary/40">Save 25%</Badge>
                )}
              </div>
              <p className="text-muted-foreground mt-2">{secondaryLine}</p>
              <div className="h-px w-full bg-border my-8" />
            </div>

            <div className="relative space-y-3 mb-8 feature-list">
              {features.pro.map((f, i) => (
                <div key={f} className="feature-item flex items-start gap-3 text-sm md:text-base text-muted-foreground" data-index={i}>
                  <Check className="size-5 text-primary mt-0.5 check-icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-col gap-4 mt-auto">
              <Button className="pricing-cta px-5 h-11">Get started</Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
