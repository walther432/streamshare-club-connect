
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
              <strong className="text-foreground">Effective Date:</strong> July 12, 2025
            </p>
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Last Updated:</strong> July 12, 2025
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. PLATFORM DEFINITION</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club is a <strong className="text-foreground">private social networking and community platform</strong> that connects individuals with shared interests in digital subscription cost optimization and financial planning. We operate exclusively as a <strong className="text-foreground">community introduction service</strong> similar to other social platforms like Discord servers, Reddit communities, or Facebook groups.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. SERVICE SCOPE - WHAT WE ARE</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Community Networking Platform Only:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We provide Telegram-based community access and introductions</li>
                <li>We facilitate geographic matching between like-minded individuals</li>
                <li>We offer discussion forums focused on subscription cost optimization</li>
                <li>We maintain private community spaces for financial planning discussions</li>
                <li>We operate automated bots for member verification and community management</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Educational and Social Purpose:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Teaching cost-saving strategies and financial literacy</li>
                <li>Providing networking opportunities for budget-conscious individuals</li>
                <li>Creating discussion spaces for digital subscription market analysis</li>
                <li>Facilitating knowledge sharing about cost optimization techniques</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. ABSOLUTE SERVICE LIMITATIONS - WHAT WE ARE NOT</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">StreamShare Club explicitly DOES NOT:</strong>
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Financial Services</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>❌ Process, handle, or manage any payments for subscriptions</li>
                <li>❌ Act as escrow, payment processor, or financial intermediary</li>
                <li>❌ Collect, transfer, or distribute funds between members</li>
                <li>❌ Provide financial advice or financial planning services</li>
                <li>❌ Operate as a money service business or financial institution</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Subscription Services</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>❌ Sell, resell, or distribute digital subscriptions</li>
                <li>❌ Provide access to Netflix, Disney+, or any streaming platform</li>
                <li>❌ Manage, store, or transmit login credentials</li>
                <li>❌ Act as authorized reseller or distributor for any service</li>
                <li>❌ Facilitate or coordinate subscription account sharing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Business Operations</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>❌ Broker arrangements between members</li>
                <li>❌ Mediate disputes or conflicts between community members</li>
                <li>❌ Guarantee outcomes of member interactions</li>
                <li>❌ Provide customer service for third-party platforms</li>
                <li>❌ Monitor or moderate private member communications</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. MEMBER INDEPENDENCE AND RESPONSIBILITY</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Complete Member Autonomy:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All member interactions are independent personal decisions</li>
                <li>Any arrangements made between members are private contracts</li>
                <li>Members act solely on their own behalf and at their own risk</li>
                <li>StreamShare Club has no involvement in member agreements</li>
                <li>All financial arrangements are between individual members only</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Member Responsibilities:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect third-party platform terms of service</li>
                <li>Make independent decisions about all arrangements</li>
                <li>Handle all personal financial matters independently</li>
                <li>Maintain respectful behavior in community spaces</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. COMMUNITY GUIDELINES</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Acceptable Use:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respectful discussion of cost-saving strategies</li>
                <li>Sharing educational content about subscription optimization</li>
                <li>Networking with like-minded community members</li>
                <li>Participating in financial literacy discussions</li>
                <li>Geographic networking for local connections</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Prohibited Activities:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Sharing login credentials or account information</li>
                <li>Soliciting or facilitating terms of service violations</li>
                <li>Impersonating other members or providing false information</li>
                <li>Harassment, spam, or disruptive behavior</li>
                <li>Commercial promotion without permission</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. PRIVACY AND DATA PROTECTION</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Minimal Data Collection:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Telegram username/ID for community access</li>
                <li>Geographic region for appropriate community matching</li>
                <li>Optional email for account recovery purposes only</li>
                <li>Payment information for community membership fees only</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Data Protection:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>No storage of financial or credential information</li>
                <li>No monitoring of private member communications</li>
                <li>Geographic data used only for community matching</li>
                <li>All data deleted within 30 days of account termination</li>
                <li>No sharing of member data with third parties</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. COMMUNITY MEMBERSHIP FEES</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Access Fee:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Monthly subscription for community platform access</li>
                <li>Payment covers community management, bot maintenance, and platform costs</li>
                <li>Fees are for community membership only, not for any subscription services</li>
                <li>No refunds for community access fees once services are provided</li>
                <li>Membership can be cancelled at any time with 7-day notice</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fee Structure:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Standard membership fees are clearly disclosed during signup</li>
                <li>All fees are for community platform access and management</li>
                <li>No additional fees for introductions or networking services</li>
                <li>Payment processing handled by standard payment processors</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. DISCLAIMER OF LIABILITY</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Limitations:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>StreamShare Club is a social networking platform only</li>
                <li>We provide no warranties about member interactions or outcomes</li>
                <li>All member activities are independent and at their own risk</li>
                <li>We are not responsible for third-party platform policies or changes</li>
                <li>No liability for member disputes or arrangement failures</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Maximum Liability:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Our total liability is limited to the amount of your most recent monthly membership fee</li>
                <li>We disclaim all warranties, express or implied</li>
                <li>Members assume all risks of community participation</li>
                <li>No liability for indirect, consequential, or punitive damages</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. THIRD-PARTY PLATFORMS</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">No Affiliation:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>StreamShare Club is not affiliated with Netflix, Disney+, or any streaming service</li>
                <li>We do not represent or act on behalf of any subscription platform</li>
                <li>All third-party trademarks are property of their respective owners</li>
                <li>Members must comply with all third-party terms of service independently</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Changes:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We are not responsible for changes to third-party platform policies</li>
                <li>Community discussions may become outdated due to platform updates</li>
                <li>Members must stay informed about relevant platform terms</li>
                <li>No guarantees about continued availability of cost-saving strategies</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. COMMUNITY MANAGEMENT</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Automated Systems:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Bots handle routine community management tasks</li>
                <li>Automated matching based on geographic preferences</li>
                <li>Automated member verification for community access</li>
                <li>No human intervention in private member communications</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Community Standards:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respectful behavior required at all times</li>
                <li>Educational and networking focus maintained</li>
                <li>No tolerance for harassment or disruptive behavior</li>
                <li>Violations may result in community access termination</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. INTELLECTUAL PROPERTY</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Rights:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All StreamShare Club branding, logos, and technology are our property</li>
                <li>Community platform code and systems are proprietary</li>
                <li>Members may not reproduce or distribute our technology</li>
                <li>Fair use allowed for educational and discussion purposes</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Member Content:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Members retain rights to their own contributed content</li>
                <li>By participating, members grant us license to use content for community purposes</li>
                <li>No commercial use of member content without explicit permission</li>
                <li>Members responsible for ensuring they have rights to shared content</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. TERMINATION</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Voluntary Termination:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Members may cancel community access at any time</li>
                <li>7-day notice required for membership cancellation</li>
                <li>Access ends immediately upon cancellation</li>
                <li>No refunds for unused membership periods</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Involuntary Termination:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violations of community guidelines may result in termination</li>
                <li>Disruptive behavior or harassment grounds for removal</li>
                <li>Immediate termination for illegal activities</li>
                <li>No refunds for terminated memberships</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. LEGAL COMPLIANCE</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Regulatory Compliance:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>StreamShare Club operates as a legitimate social networking platform</li>
                <li>Full compliance with applicable data protection laws</li>
                <li>Adherence to platform terms of service requirements</li>
                <li>No facilitation of illegal activities</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Dispute Resolution:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All disputes resolved through binding arbitration</li>
                <li>Arbitration conducted under Indian Arbitration and Conciliation Act</li>
                <li>English language proceedings with Indian legal standards</li>
                <li>Individual arbitration only, no class actions permitted</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. GEOGRAPHIC OPERATIONS</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Regional Communities:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Community matching based on geographic regions</li>
                <li>Compliance with local laws and regulations</li>
                <li>Regional community standards may vary</li>
                <li>No operations in prohibited jurisdictions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">International Considerations:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Members responsible for compliance with local laws</li>
                <li>Platform terms subject to Indian jurisdiction</li>
                <li>Cross-border interactions at member discretion</li>
                <li>No legal advice provided for international compliance</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. MODIFICATIONS AND UPDATES</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Terms Updates:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Terms may be updated with 30-day notice</li>
                <li>Continued use constitutes acceptance of updated terms</li>
                <li>Major changes will be prominently announced</li>
                <li>Members may terminate if they disagree with updates</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Platform Evolution:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Community features may be added or modified</li>
                <li>Core community networking purpose will remain consistent</li>
                <li>No obligation to maintain specific features indefinitely</li>
                <li>Members notified of significant platform changes</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. CONTACT AND SUPPORT</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Community Support:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Support provided for community platform issues only</li>
                <li>No support for third-party platform problems</li>
                <li>Response times vary based on inquiry complexity</li>
                <li>Support available through Telegram and designated channels</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Legal Contact:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All legal notices must be sent via registered mail</li>
                <li>Include specific platform terms and policy references</li>
                <li>Allow reasonable time for response and resolution</li>
                <li>Informal resolution preferred before formal proceedings</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. SEVERABILITY AND INTERPRETATION</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Terms Interpretation:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>If any provision is found unenforceable, remainder remains valid</li>
                <li>Terms interpreted under Indian law and jurisdiction</li>
                <li>English language version controls in case of translation differences</li>
                <li>Headings are for convenience only and do not affect interpretation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Entire Agreement:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>These terms constitute the complete agreement between parties</li>
                <li>No modifications except through written platform updates</li>
                <li>Previous agreements or communications superseded by these terms</li>
                <li>No waiver of rights unless explicitly stated in writing</li>
              </ul>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border bg-gradient-to-r from-accent/10 to-red-400/10 p-6 rounded-lg">
            <p className="text-foreground font-semibold mb-4">
              <strong>IMPORTANT NOTICE:</strong> StreamShare Club is exclusively a community networking platform. We facilitate introductions and discussions only. All arrangements between members are independent personal decisions. We provide no subscription services, handle no payments for subscriptions, and take no responsibility for member activities outside our community platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">By using StreamShare Club, you acknowledge that you understand we are solely a social networking platform and that all your interactions with other members are independent personal decisions made at your own discretion and risk.</strong>
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">
              <em>Contact: support@streamshareclub.com</em>
            </p>
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
