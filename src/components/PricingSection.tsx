
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const globalPlans = [
    {
      name: "Basic Plan",
      price: "$3.99",
      period: "month",
      description: "Perfect for getting started with platform sharing",
      features: [
        "Match with up to 3 users",
        "Support for Netflix, Prime Video",
        "Basic customer support",
        "Monthly billing"
      ],
      popular: false
    },
    {
      name: "Premium Plan",
      price: "$5.99",
      period: "month",
      description: "Best value for serious platform sharers",
      features: [
        "Match with up to 4 users",
        "All supported platforms",
        "Priority customer support",
        "Advanced matching algorithm",
        "Monthly billing"
      ],
      popular: true
    }
  ];

  const indianPlans = [
    {
      name: "Single Platform Match",
      price: "₹99",
      period: "month",
      description: "For users who want to split just one OTT platform — like Netflix, Prime, or Hotstar.",
      features: [
        "Choose 1 platform (Netflix, Prime, or Hotstar)",
        "Pan-India smart user matching",
        "Payment held securely via escrow system",
        "Login credentials delivered securely via bot",
        "Automatic monthly renewals and replacements",
        "Support via Telegram"
      ],
      popular: false,
      flag: "🇮🇳"
    },
    {
      name: "Multi-Platform Match",
      price: "₹199",
      period: "month",
      description: "For users who want to split 2–3 platforms together (e.g., Netflix + Prime + Hotstar).",
      features: [
        "Access up to 3 OTT platforms",
        "State-based smart group matching",
        "Priority placement via verified matching",
        "Escrow-based secure payment + auto-renewal",
        "Logins delivered instantly via bot",
        "Premium support and fast re-matching"
      ],
      popular: true,
      flag: "🇮🇳"
    }
  ];

  const renderPricingCards = (plans: typeof globalPlans, isIndian = false) => (
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
            <CardTitle className="text-2xl font-bold mb-2 text-white">
              {isIndian && plan.flag} {plan.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground mb-6">
              {plan.description}
            </CardDescription>
            
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-bold text-red-400">{plan.price}</span>
              <span className="text-muted-foreground ml-2">/{plan.period}</span>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
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
                if (isIndian) {
                  if (plan.name === "Single Platform Match") {
                    window.location.href = "/single-platform";
                  } else {
                    window.location.href = "/multi-platform";
                  }
                }
              }}
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Plans & <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose between global and Indian pricing plans to suit your needs.
            </p>
          </div>

          {/* Pricing tabs */}
          <Tabs defaultValue="indian" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="indian">🇮🇳 Indian Pricing</TabsTrigger>
                <TabsTrigger value="global">🌍 Global Pricing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="indian" className="space-y-8">
              <div className={`text-center mb-8 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-muted-foreground">
                  Fully managed escrow-based platform sharing for Indian users. We handle everything — payments, matching, and secure delivery.
                </p>
              </div>
              {renderPricingCards(indianPlans, true)}
            </TabsContent>

            <TabsContent value="global" className="space-y-8">
              <div className={`text-center mb-8 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <p className="text-muted-foreground">
                  Global pricing plans for international users.
                </p>
              </div>
              {renderPricingCards(globalPlans)}
            </TabsContent>
          </Tabs>

          {/* Bottom note */}
          <div className={`text-center mt-16 transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              All plans include secure payment processing and 24/7 customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
