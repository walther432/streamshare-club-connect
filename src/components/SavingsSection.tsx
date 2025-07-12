
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SavingsSection = () => {
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

  const globalPlatforms = [
    {
      name: "Netflix (4K)",
      officialPrice: "$24.99",
      sharedPrice: "$6.25",
      savings: "$18.74"
    },
    {
      name: "Prime Video",
      officialPrice: "$8.99",
      sharedPrice: "$2.25",
      savings: "$6.74"
    },
    {
      name: "JioHotstar",
      officialPrice: "₹299 (~$3.59)",
      sharedPrice: "~$0.90",
      savings: "~$2.69"
    },
    {
      name: "HBO Max",
      officialPrice: "$20.99",
      sharedPrice: "$5.25",
      savings: "$15.74"
    }
  ];

  const indianPlatforms = [
    {
      name: "Netflix (4K)",
      officialPrice: "₹649",
      sharedPrice: "₹162",
      savings: "₹487"
    },
    {
      name: "Prime Video",
      officialPrice: "₹299",
      sharedPrice: "₹75",
      savings: "₹224"
    },
    {
      name: "Hotstar Premium",
      officialPrice: "₹299",
      sharedPrice: "₹75",
      savings: "₹224"
    }
  ];

  const renderTable = (platforms: typeof globalPlatforms, isIndian = false) => (
    <div className={`overflow-hidden rounded-2xl bg-gradient-card border border-border shadow-card transition-all duration-800 delay-200 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Table header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary/50 border-b border-border">
        <div className="font-semibold text-sm">Platform</div>
        <div className="font-semibold text-sm">Official Price</div>
        <div className="font-semibold text-sm">Price per User (÷4)</div>
        <div className="font-semibold text-sm text-red-400">Monthly Savings</div>
      </div>

      {/* Table rows */}
      {platforms.map((platform, index) => (
        <div
          key={platform.name}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: `${400 + index * 100}ms` }}
        >
          <div className="font-medium">{platform.name}</div>
          <div className="text-muted-foreground">{platform.officialPrice}/month</div>
          <div className="text-green-400">{platform.sharedPrice}/month</div>
          <div className="font-bold text-red-400">{platform.savings}/month</div>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-20 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Real Savings, No <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Guesswork</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly how much you can save with legal cost sharing
            </p>
          </div>

          {/* Pricing tabs */}
          <Tabs defaultValue="global" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="global">🌍 Global Pricing</TabsTrigger>
                <TabsTrigger value="indian">🇮🇳 Indian Pricing</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="global" className="space-y-8">
              {renderTable(globalPlatforms)}
              
              {/* Global footnote */}
              <div className={`text-center mt-12 transition-all duration-800 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  These are real platform prices. When shared fairly by 4 people, the savings are obvious. We simply help you organize and match with others legally.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="indian" className="space-y-8">
              <div className={`text-center mb-8 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h3 className="text-2xl font-bold mb-2">🇮🇳 Indian Region – Platform Sharing Table (2025)</h3>
              </div>
              
              {renderTable(indianPlatforms, true)}
              
              {/* Indian footnote */}
              <div className={`text-center mt-12 transition-all duration-800 delay-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  These are official Indian platform prices. When shared fairly by 4 people, the savings are substantial. We help you coordinate and match legally via Telegram.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
