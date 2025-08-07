import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = {
  free: [
    "Track up to 5 subscriptions",
    "Smart renewal alerts",
    "Basic spending insights"
  ],
  pro: [
    "Unlimited subscriptions",
    "One-tap cancellations",
    "Advanced analytics & trends",
    "Bank-grade security",
    "Priority support"
  ],
  ultra: [
    "Everything in Pro",
    "Team/workspace support",
    "Custom export & integrations",
    "Dedicated success manager"
  ]
};

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Individual Plans</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Get started for free and upgrade as your needs grow.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Free */}
          <article className="relative border border-border bg-card text-card-foreground p-8 md:p-10 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Hobby</h3>
              <div className="text-5xl md:text-6xl font-extrabold">Free</div>
              <div className="h-px w-full bg-border my-6" />
            </div>

            <div className="space-y-3 mb-8">
              {features.free.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Check className="size-5 text-primary mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="px-5">Get Started</Button>
              <Button variant="outline" className="px-5">More info</Button>
            </div>
          </article>

          {/* Pro - highlighted */}
          <article className="relative border border-primary/40 bg-card text-card-foreground p-8 md:p-10 shadow-sm overflow-hidden">
            {/* gradient glow accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(120% 80% at 80% 120%, hsla(var(--primary),0.35) 0%, transparent 45%), radial-gradient(120% 80% at 10% 110%, hsla(var(--primary),0.12) 0%, transparent 55%)"
              }}
            />
            <div className="relative space-y-2">
              <h3 className="text-xl font-semibold">Pro</h3>
              <div className="flex items-end gap-2">
                <div className="text-5xl md:text-6xl font-extrabold">$20</div>
                <span className="text-muted-foreground mb-2">/mo</span>
              </div>
              <div className="h-px w-full bg-border my-6" />
            </div>

            <div className="relative space-y-3 mb-8">
              {features.pro.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Check className="size-5 text-primary mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-wrap gap-3">
              <Button className="px-5">Get Pro</Button>
              <Button variant="outline" className="px-5">More info ↗</Button>
            </div>
          </article>

          {/* Ultra */}
          <article className="relative border border-border bg-card text-card-foreground p-8 md:p-10 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Ultra</h3>
              <div className="flex items-end gap-2">
                <div className="text-5xl md:text-6xl font-extrabold">$200</div>
                <span className="text-muted-foreground mb-2">/mo</span>
              </div>
              <div className="h-px w-full bg-border my-6" />
            </div>

            <div className="space-y-3 mb-8">
              {features.ultra.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Check className="size-5 text-primary mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="px-5">Get Ultra</Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
