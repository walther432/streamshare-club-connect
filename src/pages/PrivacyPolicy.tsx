
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">StreamShare Club - Privacy Policy</h1>
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> July 12, 2025<br />
              <strong>Last Updated:</strong> July 12, 2025
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club is committed to protecting your privacy as a member of our community networking platform. This Privacy Policy explains how we collect, use, and protect your information when you use our social networking and community introduction services.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-6">
              <p className="text-sm leading-relaxed">
                <strong>Important:</strong> StreamShare Club operates exclusively as a community platform for networking and discussions. We do not handle subscription payments, manage third-party accounts, or process any financial transactions related to streaming services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Account and Community Information</h3>
            <p className="text-muted-foreground mb-2"><strong>Basic Account Data:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Email address (optional, for account recovery only)</li>
              <li>Telegram username/ID for community access and verification</li>
              <li>Geographic location (city/state/country) for community matching</li>
              <li>Community membership preferences and interests</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Community Platform Access:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Monthly membership payment information (processed securely through authorized payment processors)</li>
              <li>Payment history for community platform access only</li>
              <li>Billing address for payment verification purposes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Community Activity Data</h3>
            <p className="text-muted-foreground mb-2"><strong>Platform Usage Information:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Community participation metrics (engagement levels in discussions)</li>
              <li>Geographic matching preferences and history</li>
              <li>Support ticket communications and help requests</li>
              <li>Community guideline compliance history</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Technical Information:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Device type and operating system (for bot compatibility)</li>
              <li>IP address and general location data (for security purposes)</li>
              <li>Telegram API interaction logs (for bot functionality)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">Community Networking Services</h3>
            <p className="text-muted-foreground mb-2"><strong>Geographic Matching:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Connect members with similar geographic locations for regional discussions</li>
              <li>Facilitate appropriate community channel access based on location</li>
              <li>Optimize community formation algorithms for better networking</li>
              <li>Provide relevant regional content and discussions</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Platform Management:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Verify member eligibility and prevent unauthorized access</li>
              <li>Maintain community guidelines and platform security</li>
              <li>Process membership payments for community access</li>
              <li>Provide customer support for platform-related issues</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Service Improvement</h3>
            <p className="text-muted-foreground mb-2"><strong>Analytics and Optimization:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Analyze community engagement patterns to improve discussions</li>
              <li>Improve matching algorithms and user experience</li>
              <li>Develop new community features and networking tools</li>
              <li>Monitor platform performance and technical issues</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Educational Content:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Provide relevant financial literacy and cost-saving educational materials</li>
              <li>Customize content based on geographic and interest preferences</li>
              <li>Improve discussion quality and community value</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information We Do NOT Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Subscription-Related Data</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>❌ No Subscription Credentials:</strong> We never collect, store, or access passwords, usernames, or account details for any streaming service</li>
              <li><strong>❌ No Financial Account Information:</strong> We do not store banking details, credit card numbers, or payment credentials (all handled by secure payment processors)</li>
              <li><strong>❌ No Third-Party Account Data:</strong> We have no access to your Netflix, Disney+, or other subscription service usage or account information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Private Communications</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>❌ No Communication Monitoring:</strong> We do not monitor, record, or store private discussions between community members</li>
              <li><strong>❌ No Message Content:</strong> We do not access or analyze the content of private conversations</li>
              <li><strong>❌ No Chat History:</strong> We do not maintain logs of community chat discussions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Personal and Behavioral Data</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>❌ No Browsing History:</strong> We do not track your activity on other websites or platforms</li>
              <li><strong>❌ No Device Access:</strong> We do not access your device files, contacts, or other personal information</li>
              <li><strong>❌ No Biometric Data:</strong> We do not collect fingerprints, facial recognition, or other biometric information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-3">We Do Not Share Personal Information Except:</h3>
            
            <p className="text-muted-foreground mb-2"><strong>Legal Requirements:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>When required by valid legal process or court order</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To protect our legal rights and prevent fraud</li>
              <li>In response to lawful requests from public authorities</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Essential Service Providers:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Payment processors (PayPal, Stripe, etc.) for membership fee processing only</li>
              <li>Cloud hosting providers for secure data storage</li>
              <li>Communication platforms (Telegram API) for bot functionality</li>
              <li>Analytics services for anonymous usage statistics only</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Geographic Matching:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Anonymous location data used only for community organization</li>
              <li>No personally identifiable information shared for matching</li>
              <li>Only general region/city information used for grouping</li>
              <li>No sharing of specific addresses or precise locations</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Business Transfers:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>In the unlikely event of merger, acquisition, or sale of assets</li>
              <li>Personal data may be transferred with appropriate privacy protections</li>
              <li>Users will be notified of any such transfers in advance</li>
              <li>Same privacy protections will apply under new ownership</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security and Protection</h2>
            
            <h3 className="text-xl font-semibold mb-3">Technical Safeguards</h3>
            <p className="text-muted-foreground mb-2"><strong>Encryption and Security:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>All data transmitted using industry-standard TLS encryption</li>
              <li>Secure storage with encrypted databases and protected access</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication for administrative access</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Access Controls:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Strict internal access controls and role-based permissions</li>
              <li>Regular access reviews and employee security training</li>
              <li>Logged and monitored access to personal information</li>
              <li>Immediate access revocation for terminated employees</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Payment Security</h3>
            <p className="text-muted-foreground mb-2"><strong>PCI Compliance:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>All membership payments processed through PCI-compliant payment processors</li>
              <li>We do not store credit card or banking information</li>
              <li>Tokenized payment processing for enhanced security</li>
              <li>Regular security assessments of payment systems</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Data Minimization:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>We collect only essential information for community platform operation</li>
              <li>Regular data purging of unnecessary information</li>
              <li>Anonymization of data where possible</li>
              <li>Clear data retention policies and automated deletion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">Data Access and Control</h3>
            <p className="text-muted-foreground mb-2"><strong>Access Rights:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Request information about your stored data</li>
              <li>Review what personal information we maintain</li>
              <li>Understand how your data is being used</li>
              <li>Receive a copy of your data in a portable format</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Correction and Updates:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Update or correct your account information at any time</li>
              <li>Modify community preferences and geographic settings</li>
              <li>Correct inaccurate information in your profile</li>
              <li>Update communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Data Deletion and Portability</h3>
            <p className="text-muted-foreground mb-2"><strong>Deletion Rights:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Request complete account deletion and data removal</li>
              <li>Selective deletion of specific information types</li>
              <li>Automatic data deletion upon account cancellation</li>
              <li>Confirmation of data deletion completion</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Data Portability:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Export your community activity data and preferences</li>
              <li>Receive data in standard, machine-readable formats</li>
              <li>Transfer data to other compatible platforms</li>
              <li>Maintain data backup for personal use</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Communication Preferences</h3>
            <p className="text-muted-foreground mb-2"><strong>Opt-out Options:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Unsubscribe from marketing communications</li>
              <li>Disable non-essential platform notifications</li>
              <li>Control frequency of community updates</li>
              <li>Manage email and message preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention and Deletion</h2>
            
            <h3 className="text-xl font-semibold mb-3">Active Account Data</h3>
            <p className="text-muted-foreground mb-2"><strong>While Membership is Active:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Account information maintained for platform functionality</li>
              <li>Community activity data retained for service improvement</li>
              <li>Payment history kept for billing and support purposes</li>
              <li>Geographic preferences stored for matching optimization</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Account Cancellation</h3>
            <p className="text-muted-foreground mb-2"><strong>Data Deletion Timeline:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Personal data deleted within 30 days of cancellation</li>
              <li>Payment information removed from active systems</li>
              <li>Community activity data anonymized or deleted</li>
              <li>Account access immediately terminated</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Legal and Compliance Requirements</h3>
            <p className="text-muted-foreground mb-2"><strong>Required Retention:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Some data may be retained for legal compliance purposes</li>
              <li>Financial records kept per applicable tax and business laws</li>
              <li>Security logs maintained for fraud prevention</li>
              <li>Anonymized data may be retained indefinitely for analytics</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automated Deletion</h3>
            <p className="text-muted-foreground mb-2"><strong>Systematic Data Purging:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Automated systems delete expired data</li>
              <li>Regular purging of unnecessary information</li>
              <li>Clear retention schedules for different data types</li>
              <li>Verification of deletion completion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            
            <h3 className="text-xl font-semibold mb-3">Data Processing Locations</h3>
            <p className="text-muted-foreground mb-2"><strong>Primary Operations:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Data primarily processed and stored in India</li>
              <li>Compliance with Indian data protection laws</li>
              <li>Secure data centers with appropriate safeguards</li>
              <li>Regular compliance audits and assessments</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>International Transfers:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Data may be transferred to service providers in other countries</li>
              <li>Appropriate safeguards and contractual protections in place</li>
              <li>Compliance with applicable international data transfer regulations</li>
              <li>User notification of any significant changes to data processing locations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            
            <h3 className="text-xl font-semibold mb-3">Age Restrictions</h3>
            <p className="text-muted-foreground mb-2"><strong>Platform Access:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>StreamShare Club is intended for users 18 years and older</li>
              <li>We do not knowingly collect information from children under 18</li>
              <li>Parental consent required for users under 18 in applicable jurisdictions</li>
              <li>Immediate account termination if underage use is discovered</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Child Safety:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>No collection of information from children under 13</li>
              <li>Immediate deletion of any accidentally collected child data</li>
              <li>Clear age verification during account creation</li>
              <li>Reporting mechanisms for suspected underage use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
            
            <h3 className="text-xl font-semibold mb-3">Policy Updates</h3>
            <p className="text-muted-foreground mb-2"><strong>Notification Process:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Users notified of material changes via email and platform notifications</li>
              <li>30-day notice period for significant policy changes</li>
              <li>Clear explanation of what changes mean for users</li>
              <li>Opportunity to review and accept updated terms</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Continued Use:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Continued use of the platform constitutes acceptance of updated policy</li>
              <li>Right to terminate account if you disagree with changes</li>
              <li>Historical versions of privacy policy available upon request</li>
              <li>Regular policy reviews and updates to maintain compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">Privacy Questions and Requests</h3>
            <p className="text-muted-foreground mb-2"><strong>Data Protection Officer:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Email: privacy@streamshareclub.com</li>
              <li>Telegram: @StreamShareSupport</li>
              <li>Response time: 7-14 business days for privacy requests</li>
              <li>Escalation process for unresolved privacy concerns</li>
            </ul>

            <p className="text-muted-foreground mb-2"><strong>Legal and Compliance:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>All privacy-related legal notices must be sent via registered mail</li>
              <li>Include specific privacy concerns and requested remedies</li>
              <li>Allow reasonable time for investigation and response</li>
              <li>Informal resolution preferred before formal proceedings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Geographic Contact Information</h3>
            <p className="text-muted-foreground mb-4"><strong>India Operations:</strong></p>
            <p className="text-muted-foreground">privacy@streamshareclub.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground mb-2"><strong>Jurisdiction:</strong></p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>This privacy policy is governed by Indian privacy and data protection laws</li>
              <li>Disputes subject to Indian legal jurisdiction</li>
              <li>Compliance with applicable international privacy regulations</li>
              <li>Regular legal reviews to ensure continued compliance</li>
            </ul>
          </section>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Important Reminder</h3>
            <p className="text-sm leading-relaxed mb-4">
              <strong>STREAMSHARE CLUB IS EXCLUSIVELY A COMMUNITY NETWORKING PLATFORM.</strong> We facilitate introductions and discussions only. We do not handle subscription payments, manage third-party accounts, or collect any information related to streaming service usage. All arrangements between members are independent personal decisions.
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Your privacy is our priority. If you have any questions about this privacy policy or our privacy practices, please contact us using the information provided above.</strong>
            </p>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              <strong>Contact:</strong> privacy@streamshareclub.com<br />
              <strong>Last Updated:</strong> July 12, 2025
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
