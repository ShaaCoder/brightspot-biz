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
              <img src={logo} alt="Bharat Advance Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading font-bold">Bharat Advance</span>
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

        <div className="mt-10 border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <span>© {new Date().getFullYear()} Bharat Advance (BMN Enterprises). All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/welcome_bmnenterpriese?utm_source=qr&igsh=YmR4dGVtN2UxZWQ5" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.indiamart.com/bmnenterprises-newdelhi/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity" aria-label="IndiaMart">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h2v8H8V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
