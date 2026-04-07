import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import PageMeta from "@/components/PageMeta";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Build pre-filled WhatsApp message
    const whatsappMessage = 
      `Hello Bharat Advance!\n\n` +
      `Name: ${form.name.trim()}\n` +
      `Phone: ${form.phone.trim()}\n` +
      `Message:\n${form.message.trim()}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "919582139182"; // 9582139182 without + or 0
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Optional: show success toast (user still sees WhatsApp open)
    toast.success("Opening WhatsApp — your message is ready to send!");

    // Reset form after short delay
    setTimeout(() => {
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <PageMeta 
        title="Contact Us | Bharat Advance Cleaning Products" 
        description="Get in touch for cleaning products enquiries in Delhi NCR. WhatsApp or call 9582139182, email bmnenterprises22@gmail.com. Premium floor cleaners, toilet cleaners & more."
      />

      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Have questions about our cleaning products? Send us a message on WhatsApp or give us a call — we reply quickly!
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Message via WhatsApp</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message * (e.g. enquiry about floor cleaner, bulk order, etc.)"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={submitting} 
                  className="w-full gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </Button>
              </form>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9582139182" className="gap-2">
                    <Phone className="h-5 w-5" /> 95821 39182
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a 
                    href="https://wa.me/919582139182" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gap-2"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp Chat
                  </a>
                </Button>
              </div>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <a href="mailto:bmnenterprises22@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> bmnenterprises22@gmail.com
                </a>
                <a href="mailto:bharatadvance96@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> bharatadvance96@gmail.com
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="https://www.instagram.com/welcome_bmnenterpriese?utm_source=qr&igsh=YmR4dGVtN2UxZWQ5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/80 transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
                <a href="https://www.indiamart.com/bmnenterprises-newdelhi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/80 transition-colors">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h2v8H8V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8z"/></svg>
                  IndiaMart
                </a>
              </div>
            </motion.div>

            {/* Map & Address */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Location</h2>
              <div className="mb-6 flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <p>House No-107, Vijay Vihar Phase-2, Rohini, Delhi-110085</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  title="Bharat Advance Location - Rohini Delhi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56006.209892715!2d77.0694435!3d28.7324879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ad7cb2e197%3A0x3babba3dfba839f!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;