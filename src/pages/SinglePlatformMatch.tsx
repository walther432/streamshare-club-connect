import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SinglePlatformMatch = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: "1",
      title: "Choose Your Platform",
      description: "Choose the OTT platform you want to share (e.g., Netflix 4K)"
    },
    {
      number: "2", 
      title: "Location Verification",
      description: "We verify your location and preferences"
    },
    {
      number: "3",
      title: "Smart Matching",
      description: "We match you with others in your country looking to share that plan"
    },
    {
      number: "4",
      title: "Independent Coordination",
      description: "You coordinate the group independently and share costs"
    },
    {
      number: "5",
      title: "Auto Re-matching",
      description: "If the group breaks, we prioritize re-matching you fast"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              How It Works – <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Single Platform</span>
            </h1>
            <p className={`text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Share the cost of just one streaming platform with verified users in your country
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {steps.map((step, index) => (
                <Card 
                  key={step.number}
                  className={`bg-gradient-card border-border shadow-card transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-accent">{step.number}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className={`bg-gradient-card border border-accent/20 shadow-glow transition-all duration-800 delay-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent mr-3" />
                  You Stay in Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
                  We never handle logins, passwords, or subscriptions. You coordinate independently with your matched group and maintain complete control over your streaming experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Button 
              size="lg" 
              className="btn-premium text-lg px-8 py-4 font-semibold"
            >
              Start Single Platform Match - $3.99/month
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePlatformMatch;