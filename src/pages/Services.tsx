import { Home, Trash2, Building2, Package, Sparkles, Wrench, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PageMeta from "@/components/PageMeta";

const services = [
  {
    icon: Home,
    title: "House Cleaning",
    features: ["Deep cleaning", "Kitchen & bathroom scrubbing", "Floor mopping & polishing", "Move-in/out cleaning", "Regular maintenance plans"],
  },
  {
    icon: Trash2,
    title: "Waste Disposal",
    features: ["Household waste removal", "Construction debris", "E-waste disposal", "Garden waste clearance", "Eco-friendly methods"],
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    features: ["Daily office maintenance", "Carpet & upholstery cleaning", "Window cleaning", "Restroom sanitization", "Post-event cleanup"],
  },
  {
    icon: Package,
    title: "Packaging Supplies",
    features: ["Bubble wrap & foam", "Cardboard boxes (all sizes)", "Packing tape & tools", "Custom packaging", "Bulk order discounts"],
  },
  {
    icon: Sparkles,
    title: "Sanitization Services",
    features: ["Full-space disinfection", "Anti-bacterial treatment", "Air purification", "COVID-safe protocols", "Regular schedules available"],
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    features: ["Plumbing fixes", "Electrical repairs", "Painting & touch-ups", "General repairs", "Annual maintenance contracts"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Services = () => {
  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive cleaning and disposal solutions for every need.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{s.title}</h2>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container text-center">
          <SectionHeading title="Need a Custom Solution?" description="Contact us for a tailored cleaning plan that fits your exact requirements." />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="tel:9999018783" className="gap-2"><Phone className="h-5 w-5" /> Call Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/9199990188783" target="_blank" rel="noopener noreferrer" className="gap-2"><MessageCircle className="h-5 w-5" /> WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
