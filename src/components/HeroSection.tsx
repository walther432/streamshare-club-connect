import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const platforms = [
    { name: "Netflix", logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" },
    { name: "Prime Video", logo: "https://logos-world.net/wp-content/uploads/2021/02/Amazon-Prime-Video-Logo.png" },
    { name: "Hotstar", logo: "https://logos-world.net/wp-content/uploads/2020/06/Disney-Hotstar-Logo.png" },
    { name: "HBO Max", logo: "https://logos-world.net/wp-content/uploads/2020/06/HBO-Max-Logo.png" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Stop Overpaying for{" "}
            <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">
              Streaming
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Match with verified users in your country to split Netflix, Prime Video, Hotstar, or HBO Max — and save monthly.
          </p>

          {/* CTA Button */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              size="lg" 
              className="btn-premium text-lg px-8 py-4 font-semibold"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Pricing Plans
            </Button>
          </div>

          {/* Platform logos */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
              Supported Platforms
            </p>
            <div className="platform-logos max-w-2xl mx-auto">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Legal notice */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We do not manage or sell any streaming subscriptions. StreamShare Club connects users who wish to coordinate legal sharing of existing group/family plans.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;