import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
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

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setForm({ name: "", phone: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
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
            className="mt-4 text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in touch for a free quote or any questions.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <motion.div {...fadeUp}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9582139182" className="gap-2">
                    <Phone className="h-5 w-5" /> 95821 39182
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9990188783" className="gap-2">
                    <Phone className="h-5 w-5" /> 99901 88783
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/919990188783" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <a href="mailto:bmnenterprises22@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> bmnenterprises22@gmail.com
                </a>
                <a href="mailto:bharatadvance96@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" /> bharatadvance96@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Find Us</h2>
              <div className="mb-6 flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <p>House No-107, Vijay Vihar Phase-2, Rohini, Delhi-110085</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="BMN Enterprises Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56006.209892715!2d77.0694435!3d28.7324879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ad7cb2e197%3A0x3babba3dfba839f!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="350"
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
