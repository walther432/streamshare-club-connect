
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
          
          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Effective Date:</strong> July 12, 2025<br />
              <strong className="text-foreground">Last Updated:</strong> July 12, 2025
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              StreamShare Club is committed to protecting your privacy as a member of our community networking platform. This Privacy Policy explains how we collect, use, and protect your information when you use our social networking and community introduction services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Important:</strong> StreamShare Club operates exclusively as a community platform for networking and discussions. We do not handle subscription payments, manage third-party accounts, or process any financial transactions related to streaming services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Account and Community Information</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Basic Account Data:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Email address (optional, for account recovery only)</li>
              <li>Telegram username/ID for community access and verification</li>
              <li>Geographic location (city/state/country) for community matching</li>
              <li>Community membership preferences and interests</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 text-foreground">Community Platform Access:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Monthly membership payment information (processed securely through authorized payment processors)</li>
              <li>Payment history for community platform access only</li>
              <li>Billing address for payment verification purposes</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">Community Activity Data</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Platform Usage Information:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Community participation metrics (engagement levels in discussions)</li>
              <li>Geographic matching preferences and history</li>
              <li>Support ticket communications and help requests</li>
              <li>Community guideline compliance history</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 text-foreground">Technical Information:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Device type and operating system (for bot compatibility)</li>
              <li>IP address and general location data (for security purposes)</li>
              <li>Telegram API interaction logs (for bot functionality)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Community Networking Services</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Geographic Matching:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Connect members with similar geographic locations for regional discussions</li>
              <li>Facilitate appropriate community channel access based on location</li>
              <li>Optimize community formation algorithms for better networking</li>
              <li>Provide relevant regional content and discussions</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 text-foreground">Platform Management:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Verify member eligibility and prevent unauthorized access</li>
              <li>Maintain community guidelines and platform security</li>
              <li>Process membership payments for community access</li>
              <li>Provide customer support for platform-related issues</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-foreground">Service Improvement</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Analytics and Optimization:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Analyze community engagement patterns to improve discussions</li>
              <li>Improve matching algorithms and user experience</li>
              <li>Develop new community features and networking tools</li>
              <li>Monitor platform performance and technical issues</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 text-foreground">Educational Content:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide relevant financial literacy and cost-saving educational materials</li>
              <li>Customize content based on geographic and interest preferences</li>
              <li>Improve discussion quality and community value</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Information We Do NOT Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Subscription-Related Data</h3>
            <div className="space-y-3 text-muted-foreground mb-6">
              <p><strong className="text-red-400">❌ No Subscription Credentials:</strong> We never collect, store, or access passwords, usernames, or account details for any streaming service</p>
              <p><strong className="text-red-400">❌ No Financial Account Information:</strong> We do not store banking details, credit card numbers, or payment credentials (all handled by secure payment processors)</p>
              <p><strong className="text-red-400">❌ No Third-Party Account Data:</strong> We have no access to your Netflix, Disney+, or other subscription service usage or account information</p>
            </div>

            <h3 className="text-xl font-medium mb-3 text-foreground">Private Communications</h3>
            <div className="space-y-3 text-muted-foreground mb-6">
              <p><strong className="text-red-400">❌ No Communication Monitoring:</strong> We do not monitor, record, or store private discussions between community members</p>
              <p><strong className="text-red-400">❌ No Message Content:</strong> We do not access or analyze the content of private conversations</p>
              <p><strong className="text-red-400">❌ No Chat History:</strong> We do not maintain logs of community chat discussions</p>
            </div>

            <h3 className="text-xl font-medium mb-3 text-foreground">Personal and Behavioral Data</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-red-400">❌ No Browsing History:</strong> We do not track your activity on other websites or platforms</p>
              <p><strong className="text-red-400">❌ No Device Access:</strong> We do not access your device files, contacts, or other personal information</p>
              <p><strong className="text-red-400">❌ No Biometric Data:</strong> We do not collect fingerprints, facial recognition, or other biometric information</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">We Do Not Share Personal Information Except:</h3>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Legal Requirements:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>When required by valid legal process or court order</li>
                  <li>To comply with applicable laws and regulations</li>
                  <li>To protect our legal rights and prevent fraud</li>
                  <li>In response to lawful requests from public authorities</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Essential Service Providers:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment processors (PayPal, Stripe, etc.) for membership fee processing only</li>
                  <li>Cloud hosting providers for secure data storage</li>
                  <li>Communication platforms (Telegram API) for bot functionality</li>
                  <li>Analytics services for anonymous usage statistics only</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security and Protection</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">Technical Safeguards</h3>
            <div className="space-y-3 text-muted-foreground mb-6">
              <p><strong className="text-foreground">Encryption and Security:</strong> All data transmitted using industry-standard TLS encryption</p>
              <p><strong className="text-foreground">Access Controls:</strong> Strict internal access controls and role-based permissions</p>
              <p><strong className="text-foreground">Payment Security:</strong> All membership payments processed through PCI-compliant payment processors</p>
              <p><strong className="text-foreground">Data Minimization:</strong> We collect only essential information for community platform operation</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Privacy Rights</h2>
            
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Access:</strong> Request information about your stored data</p>
              <p><strong className="text-foreground">Correction:</strong> Update or correct your account information</p>
              <p><strong className="text-foreground">Deletion:</strong> Request complete account deletion and data removal</p>
              <p><strong className="text-foreground">Portability:</strong> Export your community activity data</p>
              <p><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Data Retention and Deletion</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Active Account Data:</h4>
                <p>Data retained while membership is active for platform functionality and service improvement.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Account Cancellation:</h4>
                <p>Personal data deleted within 30 days of cancellation, with immediate access termination.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Legal Requirements:</h4>
                <p>Some data may be retained for legal compliance, with anonymized analytics retained indefinitely.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Contact Information</h2>
            
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Privacy Questions:</strong> privacy@streamshareclub.com</p>
              <p><strong className="text-foreground">Telegram Support:</strong> @StreamShareSupport</p>
              <p><strong className="text-foreground">Response Time:</strong> 7-14 business days for privacy requests</p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-card p-6 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground font-medium mb-2">
                <strong className="text-foreground">IMPORTANT REMINDER:</strong>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                StreamShare Club is exclusively a community networking platform. We facilitate introductions and discussions only. We do not handle subscription payments, manage third-party accounts, or collect any information related to streaming service usage. All arrangements between members are independent personal decisions.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Contact: privacy@streamshareclub.com<br />
              Last updated: July 12, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
