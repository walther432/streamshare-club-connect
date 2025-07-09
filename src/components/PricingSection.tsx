import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Single Platform Match",
      price: "$3.99",
      period: "month",
      description: "For users who want to split the cost of just one OTT platform (e.g., Netflix only). They'll be matched with others wanting the same, in their country.",
      features: [
        "Split one platform only (Netflix OR Prime OR Hotstar OR HBO Max)",
        "Verified, country-based user matching",
        "Access to private Discord/Telegram group for sharing coordination",
        "Automated re-matching if group breaks",
        "You manage your own subscription or coordinate with others",
        "No account sharing - you stay in control"
      ],
      popular: false
    },
    {
      name: "Multi-Platform Match",
      price: "$5.99",
      period: "month",
      description: "For users who want to split 2–4 services (e.g., Netflix + Prime + Hotstar). They'll be placed in multiple verified groups.",
      features: [
        "Match across multiple platforms (Netflix + Prime + more)",
        "Access to premium matching for multiple services",
        "Country-level, precise match algorithm",
        "Verified user system via payment and ID",
        "We help you manage multiple groups if needed",
        "Auto re-match if a group ends"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Plans & <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Only pay for what you actually use. Whether it's Netflix alone or all 4 platforms — we help you match with others to save money.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-accent' : ''
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'btn-premium' 
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                    size="lg"
                    onClick={() => {
                      if (plan.name === "Single Platform Match") {
                        window.location.href = "/single-platform";
                      } else {
                        window.location.href = "/multi-platform";
                      }
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom note */}
          <div className={`text-center mt-16 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              You manage your own subscriptions or join others — we just help connect the right people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;