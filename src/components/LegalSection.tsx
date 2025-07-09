import { Shield, Users, Lock, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LegalSection = () => {
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

  const legalPoints = [
    {
      icon: Shield,
      title: "No Account Provision",
      description: "We do not provide, sell, rent, or manage any OTT subscriptions"
    },
    {
      icon: Users,
      title: "Community Connector",
      description: "You must already have or coordinate access with a group — we help you connect only"
    },
    {
      icon: Lock,
      title: "No Password Sharing",
      description: "No password sharing or login management — groups coordinate independently"
    },
    {
      icon: CheckCircle,
      title: "Legal Platform",
      description: "StreamShare Club is a community connector platform, not a streaming provider"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Legally Sound.</span> Transparently Built. Designed for Shared Savings.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't sell streaming accounts. We simply help verified users find others in their country to legally split the cost of family plans. 100% compliant. 0% shady.
            </p>
          </div>

          {/* Legal points grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {legalPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className={`flex items-start space-x-4 p-6 bg-gradient-card rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional legal clarity */}
          <div className={`bg-gradient-card border border-border rounded-2xl p-8 shadow-card transition-all duration-800 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Legal Compliance</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                StreamShare Club operates as a community matching service. We facilitate connections between users who want to legally coordinate cost-sharing for existing group/family subscription plans. We do not handle any streaming accounts, passwords, or subscription management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;