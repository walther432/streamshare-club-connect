import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  const faqSections = [
    {
      title: "General Service Questions",
      questions: [
        {
          q: "What exactly is StreamShare Club?",
          a: "StreamShare Club is a private social community platform that connects budget-conscious individuals interested in cost-effective digital entertainment solutions. We facilitate networking and community building among like-minded people who want to discuss subscription cost-saving strategies."
        },
        {
          q: "Do you provide Netflix or other subscription accounts?",
          a: "No, absolutely not. StreamShare Club is purely a social networking platform. We do not provide, manage, or have access to any subscription service accounts. All interactions and arrangements happen independently between community members."
        },
        {
          q: "Is this legal?",
          a: "Yes, StreamShare Club operates as a legitimate social community platform. We facilitate networking and discussions, similar to Reddit or Discord communities. We do not facilitate, encourage, or assist in any activities that would violate service provider terms."
        },
        {
          q: "How do you ensure member privacy?",
          a: "We collect minimal information (email, Discord username, general location) solely for community matching. We never access, store, or handle any subscription service credentials or personal financial information."
        }
      ]
    },
    {
      title: "Membership & Billing",
      questions: [
        {
          q: "How much does membership cost?",
          a: "Basic membership is $9.99/month, with premium options at $19.99/month. All billing is handled securely through PayPal with automatic monthly renewal."
        },
        {
          q: "Can I cancel anytime?",
          a: "Yes, you can cancel your membership at any time with 30-day notice. Your access will continue until the end of your current billing period."
        },
        {
          q: "Do you offer refunds?",
          a: "We do not provide refunds for partial month usage. However, you retain full community access until the end of your paid period after cancellation."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards and payment methods supported by PayPal, including Visa, Mastercard, American Express, and digital wallets."
        }
      ]
    },
    {
      title: "Community & Matching",
      questions: [
        {
          q: "How do you match members?",
          a: "We use geographic location, subscription interests, and availability preferences to connect members with compatible community groups. This happens through our Discord/Telegram channels organized by region and interests."
        },
        {
          q: "What if my community group doesn't work out?",
          a: "Active members have access to re-matching services. If your current community group isn't suitable, we'll help connect you with other compatible groups in your area."
        },
        {
          q: "How do you verify member identities?",
          a: "We verify members through Discord ID linking with payment verification. This ensures only paying members access private communities and helps maintain community quality."
        },
        {
          q: "What happens in the community channels?",
          a: "Community members network, share experiences about digital entertainment, discuss cost-saving strategies, and coordinate personal financial decisions. All activities are independent of StreamShare Club."
        }
      ]
    },
    {
      title: "Technical & Support",
      questions: [
        {
          q: "Which platforms do you use for communities?",
          a: "We primarily use Discord and Telegram for community organization, as these platforms provide excellent privacy, security, and group management features."
        },
        {
          q: "Do you monitor community conversations?",
          a: "No, we do not monitor private community discussions. Members are responsible for their own interactions within the community guidelines."
        },
        {
          q: "What if I have technical issues?",
          a: "We provide customer support through automated bots and help desk systems. Most common issues are resolved quickly through our self-service support portal."
        },
        {
          q: "How do you handle disputes between members?",
          a: "StreamShare Club does not mediate disputes between members regarding private arrangements. However, we can facilitate re-matching with different community groups if needed."
        }
      ]
    },
    {
      title: "Safety & Compliance",
      questions: [
        {
          q: "Are you affiliated with Netflix or other streaming services?",
          a: "No, StreamShare Club operates independently and maintains no relationships with subscription service providers. We are a standalone social community platform."
        },
        {
          q: "What if streaming services don't allow sharing?",
          a: "StreamShare Club does not facilitate or encourage sharing. We provide a social networking platform where members discuss cost-saving strategies and make independent personal financial decisions."
        },
        {
          q: "How do you protect against fraud or scams?",
          a: "We verify member identities through payment-linked Discord IDs, maintain community guidelines, and provide re-matching services. However, members are responsible for their own interactions and decisions."
        },
        {
          q: "What data do you collect about my subscriptions?",
          a: "We collect no data about your subscription services, accounts, or usage. We only collect basic information (email, Discord username, location) necessary for community matching."
        }
      ]
    },
    {
      title: "Geographic & Regional",
      questions: [
        {
          q: "Do you serve all countries?",
          a: "We currently focus on English-speaking markets (US, Canada, UK, Australia) with plans to expand to other regions based on member demand."
        },
        {
          q: "How specific is geographic matching?",
          a: "We can match members at country, state/province, or city levels depending on member density and preferences. Premium members receive more precise geographic matching."
        },
        {
          q: "What if I move to a different location?",
          a: "Simply update your location in your account settings, and we'll help you connect with communities in your new area."
        },
        {
          q: "Do you handle international payments?",
          a: "Yes, through PayPal we support international payments and multiple currencies, though membership fees are standardized in USD."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-3">
                {section.title}
              </h2>
              
              <div className="space-y-6">
                {section.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground">
                      Q: {faq.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 pt-8 border-t border-border bg-card/50 p-6 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Legal Disclaimer:</strong> StreamShare Club operates as a social community platform facilitating networking among budget-conscious consumers. We do not provide, manage, or access any subscription service accounts. All member interactions and arrangements occur independently of our platform. Members are solely responsible for compliance with applicable laws and third-party service terms.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;