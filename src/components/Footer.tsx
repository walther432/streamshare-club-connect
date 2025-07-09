import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "mailto:support@streamshareclub.com" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Start <span className="bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent">Saving?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already saving money on their streaming subscriptions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-premium text-lg px-8 py-4 font-semibold"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Now for $3.99
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 font-semibold border-border hover:bg-secondary"
              >
                Start Matching
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">StreamShare Club</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                The legal way to reduce streaming costs by connecting verified users for cost-sharing coordination.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">📧 support@streamshareclub.com</p>
                <p>🌍 Available worldwide</p>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>© 2024 StreamShare Club. All rights reserved.</p>
              <p className="mt-4 md:mt-0 max-w-md text-center md:text-right">
                StreamShare Club is not affiliated with Netflix, Prime Video, Hotstar, or HBO Max. All trademarks belong to their respective owners. We only connect users who wish to coordinate sharing legally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;