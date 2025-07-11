import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Account Information:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Email address for account management</li>
              <li>Discord/Telegram username for community access</li>
              <li>Geographic location (city/state) for matching purposes</li>
              <li>Payment information (processed securely through PayPal)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">Community Activity:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Community participation metrics (engagement levels)</li>
              <li>Group matching preferences and history</li>
              <li>Support ticket communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Information</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Community Matching:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Connect members with similar geographic locations</li>
              <li>Facilitate appropriate community channel access</li>
              <li>Optimize group formation algorithms</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">Service Improvement:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Analyze community engagement patterns</li>
              <li>Improve matching algorithms and user experience</li>
              <li>Provide customer support and technical assistance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Do NOT Collect</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Subscription Credentials:</strong> No passwords, usernames, or account details</p>
              <p><strong className="text-foreground">Financial Information:</strong> No banking, credit card, or payment details (handled by PayPal)</p>
              <p><strong className="text-foreground">Communication Content:</strong> No monitoring of private community discussions</p>
              <p><strong className="text-foreground">Third-Party Data:</strong> No access to subscription service usage or account information</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We Do Not Share Personal Information except:
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Legal Requirements:</strong> When required by law or legal process</p>
              <p><strong className="text-foreground">Service Providers:</strong> Limited data sharing with PayPal for payment processing</p>
              <p><strong className="text-foreground">Geographic Matching:</strong> Anonymous location data for community organization</p>
              <p><strong className="text-foreground">Aggregated Analytics:</strong> Anonymous usage statistics for service improvement</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Encryption:</strong> All data transmitted using industry-standard encryption</p>
              <p><strong className="text-foreground">Access Controls:</strong> Strict internal access controls and authentication</p>
              <p><strong className="text-foreground">Payment Security:</strong> All payments processed through PCI-compliant PayPal</p>
              <p><strong className="text-foreground">Data Minimization:</strong> We collect only essential information for service operation</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Access:</strong> Request information about your stored data</p>
              <p><strong className="text-foreground">Correction:</strong> Update or correct your account information</p>
              <p><strong className="text-foreground">Deletion:</strong> Request account deletion and data removal</p>
              <p><strong className="text-foreground">Portability:</strong> Export your community activity data</p>
              <p><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Retention</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Active Accounts:</strong> Data retained while membership is active</p>
              <p><strong className="text-foreground">Cancelled Accounts:</strong> Data deleted within 30 days of cancellation</p>
              <p><strong className="text-foreground">Legal Requirements:</strong> Some data may be retained for legal compliance</p>
              <p><strong className="text-foreground">Anonymous Analytics:</strong> Aggregated data may be retained indefinitely</p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;