import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ManageSubscriptionsCarousel = () => {
  const features = [
    {
      id: 0,
      number: "1",
      title: "Track Subscriptions",
      content:
        "Sentinel monitors trials, subscriptions, and renewal patterns from the moment you sign up. It intelligently tracks confirmation emails, billing patterns, and known services—keeping your dashboard up to date without needing access to your financial data. Advanced detection algorithms work seamlessly in the background while maintaining complete privacy.",
    },
    {
      id: 1,
      number: "2",
      title: "One-Click\nCancellation",
      content:
        "Easily cancel unwanted subscriptions in seconds—no login hoops, customer service calls, or hidden steps. Sentinel handles service-specific flows behind the scenes, giving you a simple 'cancel' button that just works. We've mapped out cancellation flows for thousands of services to ensure maximum success rates.",
    },
    {
      id: 2,
      number: "3",
      title: "Lightweight Browser\nExtension",
      content:
        "The Sentinel Assistant detects trials and signups in real time while you browse sites like Netflix, Audible, or Spotify. It works locally in your browser—never tracking history or storing sensitive data. Our intelligent detection engine recognizes subscription patterns across thousands of websites without compromising your privacy.",
    },
    {
      id: 3,
      number: "4",
      title: "Analytics & Usage\nInsights",
      content:
        "See which subscriptions you use and which you don't. Sentinel passively collects usage signals like login frequency or inactivity periods, helping you identify services you forget about or no longer need. Track spending trends, usage frequency, and cost-per-use metrics to optimize your subscription portfolio.",
    },
    {
      id: 4,
      number: "5",
      title: "Renewal &\nTrial Alerts",
      content:
        "Get notified before you're charged—not after. Sentinel sends alerts for upcoming renewals, trial expirations, and billing changes via email, SMS, or calendar sync. Customize notification timing and delivery methods to match your preferences and never miss important deadlines.",
    },
  ];

  return (
    <section className="bg-black py-20 relative">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-calm mb-6 font-playfair">
            Manage Your Subscriptions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sentinel fits into your life, tracking subscriptions effortlessly and helping you cancel with one click—no clutter, no stress.
          </p>
        </div>

        {/* Thin Separator Line */}
        <div className="w-full h-px bg-white/20 mb-12" />

        {/* Smooth, flicker-free carousel */}
        <div className="px-4">
          <Carousel opts={{ align: "center", loop: false }} className="max-w-6xl mx-auto">
            <div className="flex items-center justify-end gap-4 mb-6 px-2">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
            <CarouselContent className="min-h-[620px] -ml-4">
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="pl-4 basis-[85%] md:basis-[60%] lg:basis-1/2">
                  <article className="animate-fade-in">
                    <div
                      className="w-full h-[500px] mb-8 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)",
                      }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                      <div>
                        <h3 className="text-3xl font-bold mb-4 leading-tight whitespace-pre-line">
                          {feature.number}. {feature.title}
                        </h3>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-sm leading-relaxed text-white/90">{feature.content}</p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;
