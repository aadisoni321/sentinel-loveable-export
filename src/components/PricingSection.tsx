import { useState } from "react";
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

  const displayPrice = isMonthly ? "$3" : "$90";
  const secondaryLine = isMonthly
    ? "$10 from the second month, billed monthly"
    : "Billed annually (equivalent to $7.50/mo)";

  return (
    <section id="pricing" className="bg-background py-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Pricing</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Start free. Upgrade when you’re ready.
          </p>
        </header>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 rounded-md border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={isMonthly}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                isMonthly
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={!isMonthly}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                !isMonthly
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly <span className="ml-2 font-medium text-primary">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Free */}
          <article className="relative border border-border bg-card text-card-foreground p-8 md:p-10 shadow-sm h-full flex flex-col">
            <Badge variant="secondary" className="mb-4 bg-muted text-muted-foreground w-fit">Free</Badge>
            
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="text-5xl md:text-6xl font-extrabold">$0</div>
                <Badge className="bg-primary/15 text-primary border border-primary/40 opacity-0">Placeholder</Badge>
              </div>
              <p className="text-muted-foreground mt-2">per month, no credit card required</p>
              <div className="h-px w-full bg-border my-8" />
            </div>

            <div className="space-y-3 mt-8">
              {features.free.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Check className="size-5 text-primary mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-col gap-4 mt-auto">
              <Button variant="secondary" className="w-full h-11 bg-muted text-foreground hover:bg-muted/80">Get Sentinel</Button>
              <div aria-hidden className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground invisible">
                <Badge variant="outline">Apple Pay</Badge>
                <Badge variant="outline">PayPal</Badge>
                <Badge variant="outline">Visa</Badge>
                <Badge variant="outline">Mastercard</Badge>
                <Badge variant="outline">Amex</Badge>
              </div>
            </div>
          </article>

          {/* Pro - highlighted */}
          <article className="relative border-2 border-primary bg-card text-card-foreground p-8 md:p-10 shadow-sm overflow-hidden h-full flex flex-col" style={{ backgroundImage: "radial-gradient(hsla(var(--primary),0.12) 1px, transparent 1px)", backgroundSize: "12px 12px", backgroundPosition: "0 0" }}>
            <div className="relative">
              <Badge className="mb-4 bg-primary/15 text-primary border border-primary/40">Pro</Badge>
              <div className="flex items-center gap-3">
                <div className="text-5xl md:text-6xl font-extrabold">{displayPrice}</div>
                {isMonthly ? (
                  <Badge className="bg-primary/15 text-primary border border-primary/40">1st-Month Discount</Badge>
                ) : (
                  <Badge className="bg-primary/15 text-primary border border-primary/40">Save 25%</Badge>
                )}
              </div>
              <p className="text-muted-foreground mt-2">{secondaryLine}</p>
              <div className="h-px w-full bg-border my-8" />
            </div>

            <div className="relative space-y-3 mb-8">
              {features.pro.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <Check className="size-5 text-primary mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="relative flex flex-col gap-4 mt-auto">
              <Button className="px-5 h-11">Get started</Button>
              {/* Payment badges (textual for now to avoid extra assets) */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline">Apple Pay</Badge>
                <Badge variant="outline">PayPal</Badge>
                <Badge variant="outline">Visa</Badge>
                <Badge variant="outline">Mastercard</Badge>
                <Badge variant="outline">Amex</Badge>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
