import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/bmn-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <span className="text-sm font-bold text-primary-foreground">B</span>
              </div>
              <span className="font-heading font-bold">BMN Enterprises</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Professional cleaning and disposal services in Rohini, Delhi. 
              Trusted by hundreds of homes and businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "Gallery", path: "/gallery" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a href="tel:9582139182" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4" /> 95821 39182
              </a>
              <a href="tel:9990188783" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4" /> 99901 88783
              </a>
              <a href="https://wa.me/919990188783" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="mailto:bmnenterprises22@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4" /> bmnenterprises22@gmail.com
              </a>
              <a href="mailto:bharatadvance96@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4" /> bharatadvance96@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> House No-107, Vijay Vihar Phase-2, Rohini, Delhi-110085
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} BMN Enterprises Bharat Advance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
