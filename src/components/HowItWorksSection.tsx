import { useEffect, useRef, useState } from "react";
import { Users, Search, MessageCircle } from "lucide-react";

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps with staggered delay
            setTimeout(() => setVisibleSteps([1]), 200);
            setTimeout(() => setVisibleSteps([1, 2]), 600);
            setTimeout(() => setVisibleSteps([1, 2, 3]), 1000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Choose Platforms",
      description: "Select which streaming platforms you want to split costs for - Netflix, Prime Video, Hotstar, or HBO Max."
    },
    {
      id: 2,
      icon: Users,
      title: "Get Matched",
      description: "We connect you with verified users in your country who want to share the same platforms."
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Join & Save",
      description: "Join a private group to coordinate sharing and start saving money on your monthly subscriptions."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              How It <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to start saving on your streaming subscriptions
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(step.id);
              
              return (
                <div
                  key={step.id}
                  className={`relative text-center group transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="mb-8 mt-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-card rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              No mention of watching content, logging in, or handling credentials. We only help you connect with others for cost coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;