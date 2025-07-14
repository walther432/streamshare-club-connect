
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Home
            </Button>
            <h1 className="text-2xl font-bold">Terms of Service</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">StreamShare Club - Terms of Service</h1>
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> July 12, 2025<br />
              <strong>Last Updated:</strong> July 12, 2025
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to StreamShare Club, a community networking platform that facilitates connections between individuals interested in coordinating legal sharing of streaming service group/family plans. These Terms of Service ("Terms") govern your use of our community platform and related services.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-6">
              <p className="text-sm leading-relaxed">
                <strong>Important:</strong> StreamShare Club operates exclusively as a community introduction and networking platform. We do not manage subscriptions, handle payments to streaming services, or control any third-party accounts. All streaming arrangements are independent decisions between community members.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Platform Definition and Service Scope</h2>
            
            <h3 className="text-xl font-semibold mb-3">What StreamShare Club Is:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Community networking platform</strong> for meeting like-minded individuals interested in cost-sharing</li>
              <li><strong>Introduction service</strong> connecting members with similar geographic locations and preferences</li>
              <li><strong>Educational resource</strong> providing information about legal streaming plan sharing</li>
              <li><strong>Communication facilitator</strong> through Telegram-based community channels and matching</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">What StreamShare Club is NOT:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Subscription management service</strong> - We do not create, manage, or control any streaming accounts</li>
              <li><strong>Payment processor for streaming services</strong> - We do not handle payments to Netflix, Disney+, or other platforms</li>
              <li><strong>Account credential handler</strong> - We never access or store streaming service login information</li>
              <li><strong>Streaming service reseller</strong> - We do not sell or provide access to streaming content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Limitations and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold mb-3">Platform Limitations:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>No guarantee of matches</strong> - We cannot guarantee you will find compatible sharing partners</li>
              <li><strong>No control over member arrangements</strong> - All sharing agreements are solely between members</li>
              <li><strong>No liability for sharing outcomes</strong> - We are not responsible for any disputes or issues between members</li>
              <li><strong>Geographic limitations</strong> - Service availability depends on local laws and member presence</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Important Disclaimers:</h3>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>StreamShare Club does not provide streaming service subscriptions or access</li>
                <li>We do not guarantee the reliability or behavior of community members</li>
                <li>All arrangements between members are independent of StreamShare Club</li>
                <li>Members must comply with all applicable streaming service terms and local laws</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Member Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-3">Legal Compliance:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Adhere to streaming platform terms</strong> - Ensure all sharing arrangements comply with the terms of service of Netflix, Disney+, and other platforms</li>
              <li><strong>Follow local laws</strong> - Comply with all applicable laws in your jurisdiction regarding digital content sharing</li>
              <li><strong>Respect geographic restrictions</strong> - Do not circumvent regional content restrictions or licensing agreements</li>
              <li><strong>Maintain account security</strong> - Protect login credentials and personal information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Community Responsibilities:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Honest communication</strong> - Provide accurate information about your location and sharing preferences</li>
              <li><strong>Respectful behavior</strong> - Treat all community members with respect and professionalism</li>
              <li><strong>Timely communication</strong> - Respond to messages and arrangements in a reasonable timeframe</li>
              <li><strong>Financial responsibility</strong> - Honor any payment arrangements made with other members</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Community Guidelines</h2>
            
            <h3 className="text-xl font-semibold mb-3">Prohibited Activities:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Fraudulent behavior</strong> - No misrepresentation of identity, location, or intentions</li>
              <li><strong>Spam or harassment</strong> - No unwanted messages, spam, or harassment of other members</li>
              <li><strong>Illegal activities</strong> - No promotion of piracy, account theft, or other illegal activities</li>
              <li><strong>Commercial abuse</strong> - No using the platform for unauthorized commercial purposes</li>
              <li><strong>Multiple accounts</strong> - One account per person to maintain community integrity</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Community Standards:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Be genuine</strong> - Represent yourself honestly and authentically</li>
              <li><strong>Be helpful</strong> - Share knowledge and assist fellow community members when appropriate</li>
              <li><strong>Be reliable</strong> - Follow through on commitments and arrangements</li>
              <li><strong>Be patient</strong> - Understand that finding compatible matches may take time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Privacy and Data Handling</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your privacy is important to us. Our data collection and usage practices are detailed in our Privacy Policy, which forms part of these Terms. Key points include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Minimal data collection</strong> - We collect only essential information for platform functionality</li>
              <li><strong>No streaming credentials</strong> - We never collect or store streaming service login information</li>
              <li><strong>Geographic matching</strong> - Location data used only for member matching purposes</li>
              <li><strong>Communication facilitation</strong> - Telegram integration for community access and communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Fees and Payment Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3">Platform Access Fees:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Monthly membership</strong> - Fee for access to community matching platform and features</li>
              <li><strong>Payment processing</strong> - Payments handled securely through authorized payment processors</li>
              <li><strong>No streaming payments</strong> - Platform fees are separate from any arrangements between members</li>
              <li><strong>Refund policy</strong> - Detailed refund terms available upon request</li>
            </ul>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
              <p className="text-sm"><strong>Important:</strong> Platform membership fees are for community access only and do not include streaming service subscriptions or guarantees of successful matches.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Platform Disclaimers and Limitations</h2>
            
            <h3 className="text-xl font-semibold mb-3">Service Availability:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Geographic limitations</strong> - Service may not be available in all regions</li>
              <li><strong>Platform maintenance</strong> - Temporary service interruptions for updates and maintenance</li>
              <li><strong>Third-party dependencies</strong> - Reliance on Telegram and other third-party services</li>
              <li><strong>Member availability</strong> - Matching success depends on active member participation</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Liability Limitations:</h3>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <p className="text-sm leading-relaxed">
                <strong>IMPORTANT LEGAL NOTICE:</strong> StreamShare Club provides a networking platform only. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>Disputes between members or sharing arrangement outcomes</li>
                <li>Violations of streaming platform terms by members</li>
                <li>Financial losses related to member arrangements</li>
                <li>Changes to streaming platform policies or pricing</li>
                <li>Technical issues with third-party streaming services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Platform Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Members must independently ensure their sharing arrangements comply with the terms of service of streaming platforms including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Netflix</strong> - Household sharing and geographic restrictions</li>
              <li><strong>Disney+</strong> - Account sharing policies and regional limitations</li>
              <li><strong>Amazon Prime Video</strong> - Household member definitions and sharing rules</li>
              <li><strong>HBO Max/Discovery+</strong> - User limits and geographic restrictions</li>
              <li><strong>Other platforms</strong> - Any additional streaming services and their respective terms</li>
            </ul>
            
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <p className="text-sm"><strong>Member Responsibility:</strong> It is the responsibility of each member to understand and comply with the terms of service of any streaming platforms they choose to share. StreamShare Club does not monitor or enforce compliance with third-party terms.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Community Management and Moderation</h2>
            
            <h3 className="text-xl font-semibold mb-3">Moderation Approach:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Community-driven</strong> - Emphasis on self-moderation and member reporting</li>
              <li><strong>Educational focus</strong> - Priority on education about legal sharing practices</li>
              <li><strong>Responsive support</strong> - Active response to reported issues and disputes</li>
              <li><strong>Fair enforcement</strong> - Consistent application of community guidelines</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Enforcement Actions:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Warnings</strong> - First-time violations typically receive educational warnings</li>
              <li><strong>Temporary suspension</strong> - Serious or repeated violations may result in temporary access suspension</li>
              <li><strong>Permanent removal</strong> - Severe violations or continued non-compliance may result in permanent removal</li>
              <li><strong>Legal cooperation</strong> - Cooperation with law enforcement when required by applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Platform Content:</strong> All content on the StreamShare Club platform, including but not limited to text, graphics, logos, and software, is the property of StreamShare Club or our licensors and is protected by intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Member Content:</strong> Members retain ownership of content they share on the platform but grant StreamShare Club a license to use such content for platform operation and improvement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Third-Party Trademarks:</strong> References to streaming platform names and logos are for identification purposes only and do not imply endorsement or affiliation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Account Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3">Voluntary Termination:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Members may cancel their accounts at any time through platform settings</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>Access to community features ceases upon cancellation</li>
              <li>Personal data deletion handled according to Privacy Policy terms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Involuntary Termination:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club reserves the right to terminate accounts for violations of these Terms, including but not limited to fraudulent activity, harassment, or repeated violations of community guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Legal Compliance and Jurisdiction</h2>
            
            <h3 className="text-xl font-semibold mb-3">Applicable Law:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms are governed by Indian law and any disputes will be subject to the jurisdiction of Indian courts.
            </p>

            <h3 className="text-xl font-semibold mb-3">International Compliance:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Members must comply with all applicable local laws in their jurisdiction</li>
              <li>Platform operations adapt to meet legal requirements in different regions</li>
              <li>Service may be restricted or unavailable in certain jurisdictions</li>
              <li>Legal cooperation provided when required by applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Geographic Operations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Primary Operations:</strong> StreamShare Club operates primarily in India but serves an international community. Regional variations in service availability, features, and pricing may apply based on local regulations and market conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Regional Adaptation:</strong> Service features and availability may be modified to comply with local laws and streaming platform policies in different geographic regions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club reserves the right to modify these Terms at any time. Material changes will be communicated to members via email and platform notifications at least 30 days before taking effect.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Continued use of the platform after changes take effect constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms or platform-related issues:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li><strong>General Support:</strong> support@streamshareclub.com</li>
              <li><strong>Legal Inquiries:</strong> legal@streamshareclub.com</li>
              <li><strong>Telegram Support:</strong> @StreamShareSupport</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </section>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Important Notice</h3>
            <p className="text-sm leading-relaxed mb-4">
              <strong>STREAMSHARE CLUB IS A COMMUNITY NETWORKING PLATFORM ONLY.</strong> We facilitate connections between individuals interested in legal cost-sharing of streaming services. We do not provide, manage, or guarantee streaming service access or subscriptions.
            </p>
            <p className="text-sm leading-relaxed">
              All arrangements between members are independent personal decisions. Members are responsible for ensuring their arrangements comply with applicable streaming platform terms and local laws.
            </p>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              <strong>Contact:</strong> support@streamshareclub.com<br />
              <strong>Last Updated:</strong> July 12, 2025
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
