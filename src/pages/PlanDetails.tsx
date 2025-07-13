
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PlanDetails = () => {
  const { planType } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const planDetails = {
    "basic-global": {
      name: "Basic Plan",
      price: "$3.99",
      period: "month",
      description: "For users who want to connect with others interested in sharing costs for one streaming platform",
      features: [
        "Community Access for One Platform - Join discussions focused on single platform cost optimization (Netflix OR Prime OR Hotstar OR HBO Max)",
        "Verified Country-Based Member Matching - Connect with verified community members in your country through our matching algorithm",
        "Private Community Channel Access - Access to exclusive Discord/Telegram groups for networking and discussion coordination",
        "Automated Re-Matching Service - If your discussion group becomes inactive, automatic matching to new active community groups",
        "Independent Community Networking - Connect with like-minded individuals to discuss and coordinate cost-saving strategies independently",
        "Educational Resources - Access to guides, tips, and educational content about subscription cost optimization",
        "Member Verification System - All community members verified through payment and ID to ensure quality discussions",
        "24/7 Bot Support - Automated community management and member support through our Telegram bot"
      ]
    },
    "premium-global": {
      name: "Premium Plan",
      price: "$5.99",
      period: "month",
      description: "For users who want to connect with others across multiple streaming platforms for comprehensive cost optimization",
      features: [
        "Multi-Platform Community Access - Join discussions across multiple platforms (Netflix + Prime + Hotstar + HBO Max + more)",
        "Advanced Geographic Matching - Premium country-level matching algorithm for better regional community connections",
        "Multiple Community Group Access - Participate in several platform-specific community groups simultaneously",
        "Priority Re-Matching Service - Faster automated re-matching to new active groups when communities become inactive",
        "Enhanced Member Verification - Premium verification system ensuring highest quality community members",
        "Advanced Educational Content - Premium guides, cost optimization strategies, and financial planning resources",
        "Community Coordination Tools - Enhanced bot features for better group communication and coordination",
        "Priority Customer Support - Faster response times for platform-related questions and technical support",
        "Cross-Platform Analytics - Insights into cost-saving opportunities across multiple subscription services",
        "Exclusive Premium Features - Early access to new community features and platform updates"
      ]
    },
    "basic-indian": {
      name: "Single Platform Match",
      price: "₹99",
      period: "month",
      description: "For users who want to connect with others interested in sharing costs for one streaming platform",
      features: [
        "Community Access for One Platform - Join discussions focused on single platform cost optimization (Netflix OR Prime OR Hotstar OR HBO Max)",
        "Verified Country-Based Member Matching - Connect with verified community members in your country through our matching algorithm",
        "Private Community Channel Access - Access to exclusive Discord/Telegram groups for networking and discussion coordination",
        "Automated Re-Matching Service - If your discussion group becomes inactive, automatic matching to new active community groups",
        "Independent Community Networking - Connect with like-minded individuals to discuss and coordinate cost-saving strategies independently",
        "Educational Resources - Access to guides, tips, and educational content about subscription cost optimization",
        "Member Verification System - All community members verified through payment and ID to ensure quality discussions",
        "24/7 Bot Support - Automated community management and member support through our Telegram bot"
      ]
    },
    "premium-indian": {
      name: "Multi-Platform Match",
      price: "₹199",
      period: "month",
      description: "For users who want to connect with others across multiple streaming platforms for comprehensive cost optimization",
      features: [
        "Multi-Platform Community Access - Join discussions across multiple platforms (Netflix + Prime + Hotstar + HBO Max + more)",
        "Advanced Geographic Matching - Premium country-level matching algorithm for better regional community connections",
        "Multiple Community Group Access - Participate in several platform-specific community groups simultaneously",
        "Priority Re-Matching Service - Faster automated re-matching to new active groups when communities become inactive",
        "Enhanced Member Verification - Premium verification system ensuring highest quality community members",
        "Advanced Educational Content - Premium guides, cost optimization strategies, and financial planning resources",
        "Community Coordination Tools - Enhanced bot features for better group communication and coordination",
        "Priority Customer Support - Faster response times for platform-related questions and technical support",
        "Cross-Platform Analytics - Insights into cost-saving opportunities across multiple subscription services",
        "Exclusive Premium Features - Early access to new community features and platform updates"
      ]
    }
  };

  const plan = planDetails[planType as keyof typeof planDetails];

  if (!plan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Plan not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const isIndian = planType?.includes('indian');

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className={`mb-8 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Plan details card */}
          <Card className={`bg-gradient-card border-border shadow-card transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-2 text-white">
                {isIndian && "🇮🇳 "}{plan.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-6 text-lg">
                {plan.description}
              </CardDescription>
              
              <div className="flex items-baseline justify-center">
                <span className="text-6xl font-bold text-red-400">{plan.price}</span>
                <span className="text-muted-foreground ml-2 text-xl">/{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  className="btn-premium text-lg px-8 py-4 font-semibold"
                  size="lg"
                  onClick={() => window.open('https://t.me/StreamShare432bot', '_blank')}
                >
                  Get Started with Telegram Bot
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Legal notice */}
          <div className={`text-center mt-8 transition-all duration-800 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We do not manage or sell any streaming subscriptions. StreamShare Club connects users who wish to coordinate legal sharing of existing group/family plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
