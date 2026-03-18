import { Link } from "react-router-dom";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-warm-gold" />
              <span className="font-display text-xl font-bold">Aroma di Indi</span>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Dumka's favourite spot for handcrafted coffee, fresh-baked croissants, and wood-fired pizzas. Made with love, served with a smile.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Our Menu" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm opacity-70 hover:opacity-100 hover:text-warm-gold transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Specialties</h4>
            <div className="flex flex-col gap-2 font-body text-sm opacity-70">
              <span>Signature Coffee Lattes</span>
              <span>Artisan Croissants</span>
              <span>Wood-Fired Pizzas</span>
              <span>Fresh Bakery Items</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Visit Us</h4>
            <div className="flex flex-col gap-3 font-body text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 text-warm-gold" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@aromadiindi.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 text-warm-gold" />
                hello@aromadiindi.com
              </a>
              <div className="flex items-start gap-2 opacity-70">
                <MapPin className="w-4 h-4 text-warm-gold mt-0.5" />
                <span>Main Road, Dumka, Jharkhand</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-warm-gold/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-warm-gold/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Aroma di Indi. All rights reserved.
          </p>
          <p className="font-body text-xs opacity-50">
            Serving Dumka with warmth, one cup at a time ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
