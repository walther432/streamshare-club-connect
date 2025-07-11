import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

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
            <h1 className="text-2xl font-bold">Terms of Service</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Service Description</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              StreamShare Club operates as a private social community platform that connects like-minded individuals interested in cost-effective digital entertainment solutions. We provide access to exclusive Discord/Telegram communities where members can network, share experiences, and coordinate personal financial decisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Community Purpose</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform facilitates social networking among budget-conscious consumers who wish to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Share experiences about digital subscription services</li>
              <li>Network with geographically similar individuals</li>
              <li>Discuss cost-saving strategies and financial planning</li>
              <li>Build communities around shared interests in digital entertainment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. What We Do NOT Provide</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club explicitly DOES NOT:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, manage, or distribute any subscription service credentials</li>
              <li>Access, store, or handle any third-party account passwords</li>
              <li>Facilitate, encourage, or assist in violation of any service provider's terms</li>
              <li>Guarantee any specific outcomes from community interactions</li>
              <li>Mediate disputes between community members regarding private arrangements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Member Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Members acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All coordination activities occur independently within community channels</li>
              <li>Members are solely responsible for their own subscription decisions and arrangements</li>
              <li>Any sharing of credentials or accounts is done at member's own risk and discretion</li>
              <li>Members must comply with all applicable laws and third-party service terms</li>
              <li>StreamShare Club bears no responsibility for member actions outside our platform</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Community Guidelines</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Respectful Communication:</strong> Maintain professional discourse in all interactions</p>
              <p><strong className="text-foreground">Privacy Protection:</strong> Never share personal financial information in public channels</p>
              <p><strong className="text-foreground">Independent Decision Making:</strong> All subscription choices are personal decisions</p>
              <p><strong className="text-foreground">Compliance:</strong> Members must adhere to all applicable laws and service terms</p>
              <p><strong className="text-foreground">Geographic Accuracy:</strong> Provide accurate location information for community matching</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Subscription Terms</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Monthly Billing:</strong> Membership fees are charged monthly in advance</p>
              <p><strong className="text-foreground">Cancellation Policy:</strong> Members may cancel anytime with 30-day notice</p>
              <p><strong className="text-foreground">Refund Policy:</strong> No refunds for partial month usage</p>
              <p><strong className="text-foreground">Price Changes:</strong> 30-day advance notice for any fee modifications</p>
              <p><strong className="text-foreground">Account Suspension:</strong> Non-payment results in immediate community access suspension</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Protection & Privacy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Limited Data Collection:</strong> We collect only essential information for community matching</p>
              <p><strong className="text-foreground">No Financial Data:</strong> We do not store or access any subscription service credentials</p>
              <p><strong className="text-foreground">Geographic Matching:</strong> Location data used solely for community organization</p>
              <p><strong className="text-foreground">Communication Privacy:</strong> Private community discussions are not monitored</p>
              <p><strong className="text-foreground">Third-Party Independence:</strong> We maintain no relationships with subscription service providers</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club's liability is limited to the monthly membership fee. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Actions taken by community members</li>
              <li>Disputes arising from member interactions</li>
              <li>Account suspensions or terminations by third-party services</li>
              <li>Financial losses from subscription arrangements</li>
              <li>Technical issues with third-party platforms (Discord/Telegram)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Intellectual Property</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Platform Ownership:</strong> StreamShare Club owns all platform technology and branding</p>
              <p><strong className="text-foreground">Community Content:</strong> Members retain ownership of their contributions</p>
              <p><strong className="text-foreground">Usage Rights:</strong> Members grant limited rights for community platform operation</p>
              <p><strong className="text-foreground">Brand Protection:</strong> Unauthorized use of StreamShare Club branding is prohibited</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either party may terminate membership:
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Member Termination:</strong> Cancel anytime with account closure</p>
              <p><strong className="text-foreground">Platform Termination:</strong> For violation of community guidelines or non-payment</p>
              <p><strong className="text-foreground">Effect of Termination:</strong> Immediate loss of community access</p>
              <p><strong className="text-foreground">Data Retention:</strong> Account data deleted within 30 days of termination</p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;