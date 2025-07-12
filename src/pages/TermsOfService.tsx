
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
            <h1 className="text-2xl font-bold">📜 Terms of Service</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-8 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          
          <div className="mb-8">
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Effective Date:</strong> 12th July, 2025
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Welcome to StreamShare Club — a private platform for coordinating digital subscription cost-sharing in a compliant, transparent, and community-driven manner. Please read these Terms carefully before using our services.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Service Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club is a private online platform that connects individuals looking to share the cost of digital subscriptions in a legally compliant and community-managed environment. Our services include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Telegram-based community management</li>
              <li>Region-based group coordination</li>
              <li>Automated subscription payment facilitation via smart escrow</li>
              <li>Support for safe, secure and transparent participation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Community Purpose</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform helps members:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Discover and join regional subscription-sharing groups</li>
              <li>Coordinate group purchases in a legally neutral and compliant manner</li>
              <li>Use smart escrow tools to manage shared payments</li>
              <li>Connect with others who value ethical cost optimization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. What We Do Not Provide</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To maintain full compliance and white-label status, StreamShare Club does NOT:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Sell or resell digital subscriptions</li>
              <li>Provide or manage login credentials for any third-party service</li>
              <li>Store, transmit, or access user-submitted credentials</li>
              <li>Violate or encourage violation of any digital platform's Terms of Use</li>
              <li>Act as a subscription broker or reseller</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Member Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using StreamShare Club, all members agree that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Participation is voluntary and community-coordinated</li>
              <li>Payments are submitted into an automated escrow mechanism only</li>
              <li>No user should directly share or solicit credentials outside escrow-approved channels</li>
              <li>Any decision to join a group is made at the user's own discretion and risk</li>
              <li>They will comply with all applicable laws and digital platform policies</li>
              <li>They will only provide accurate geographic and identity details for fair matching</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Community Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To protect every user, the following standards must be maintained:
            </p>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Respectful Behavior:</strong> Be courteous and constructive at all times</p>
              <p><strong className="text-foreground">Privacy First:</strong> Do not share financial or sensitive personal data in group chats</p>
              <p><strong className="text-foreground">No Credential Sharing:</strong> Never exchange login details directly</p>
              <p><strong className="text-foreground">One Region, One Identity:</strong> Do not impersonate users or falsify region/state</p>
              <p><strong className="text-foreground">Leave Quietly, Rejoin Respectfully:</strong> Escrow exits are processed respectfully</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Subscription Escrow & Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All payments are coordinated via a secure escrow mechanism. Users agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Deposit monthly or annual share into escrow (depending on the group plan)</li>
              <li>Only receive access when full group payments are confirmed</li>
              <li>Automatic monthly release from escrow to fund subscription renewals</li>
              <li>No manual payment transfers are allowed between users</li>
              <li>StreamShare Club never directly collects or redistributes payments</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Cancellation & Refund Policy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Cancel Anytime:</strong> Users can exit a group with 7-day notice (next cycle)</p>
              <p><strong className="text-foreground">No Partial Refunds:</strong> Once escrow disburses, no refunds are processed</p>
              <p><strong className="text-foreground">Failed Renewal:</strong> If not enough users renew, the escrow halts payment and users are refunded unused portions automatically</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Data & Privacy Protection</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>We collect minimal data: name, region, email (optional), and Telegram ID</li>
              <li>We do NOT store: financial details, credentials, passwords</li>
              <li>Group matches are geographic only, never based on personal identifiers</li>
              <li>Your chats are private: No moderation or logging inside Telegram groups</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club is a neutral coordinating platform. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Platform bans or suspensions from third-party services</li>
              <li>Disputes between members (although we aim to minimize them)</li>
              <li>Payment processing errors caused by third-party services</li>
              <li>Downtime or service interruptions due to Telegram or subscription platforms</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our total liability is limited to the amount of your most recent monthly subscription fee.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All branding, logos, bots, and platform IP belong to StreamShare Club</li>
              <li>User-submitted content (e.g., feedback or group chats) remains yours</li>
              <li>You may not use our brand or system without written permission</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Termination</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Voluntary Exit:</strong> Cancel via the bot or dashboard at any time</p>
              <p><strong className="text-foreground">Breach-Based Termination:</strong> We may remove users for guideline violations</p>
              <p><strong className="text-foreground">Immediate Access Loss:</strong> Once terminated, community access ends</p>
              <p><strong className="text-foreground">Data Deletion:</strong> Your data is purged within 30 days unless required for legal audit</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact & Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or disputes, please contact us via Telegram or our support email. All disputes are resolved via binding arbitration under [Indian Arbitration Act or your chosen neutral law].
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: July 12, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
