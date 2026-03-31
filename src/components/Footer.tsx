import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Fabric & Style</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium African attire and traditional fabrics. Crafted for the modern traditionalist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 hello@fabricandstyle.com</li>
              <li>📞 +234 800 123 4567</li>
              <li>📍 Lagos, Nigeria</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>

        {/* Payment & Trust */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Fabric & Style. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="border rounded px-2 py-1 bg-background">🔒 Secure Checkout</span>
            <span className="border rounded px-2 py-1 bg-background">Visa</span>
            <span className="border rounded px-2 py-1 bg-background">Mastercard</span>
            <span className="border rounded px-2 py-1 bg-background">Bank Transfer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
