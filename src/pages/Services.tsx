import { SprayCan, Droplets, Brush, Sparkles, Toilet, Utensils, ShieldCheck, Package , Phone , MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PageMeta from "@/components/PageMeta";

const products = [
  {
    icon: Droplets,
    title: "Floor Cleaners",
    features: [
      "Disinfectant phenyl & herbal variants",
      "Suitable for tiles, marble, vitrified",
      "Long-lasting fragrance options",
      "Concentrated formulas for value",
      "Popular brands & our private label",
    ],
  },
  {
    icon: Toilet,
    title: "Toilet & Bathroom Cleaners",
    features: [
      "Harpic-style acid & non-acid formulas",
      "Limescale & stain removers",
      "Toilet rim blocks & in-tank cleaners",
      "Foaming toilet cleaners",
      "Kills 99.9% germs",
    ],
  },
  {
    icon: SprayCan,
    title: "Kitchen Cleaners",
    features: [
      "Degreasers for chimney & stove",
      "Dishwash liquids & gels",
      "Sink & drain cleaners",
      "Multi-purpose kitchen sprays",
      "Tough-on-grease, gentle on hands",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Disinfectants & Surface Cleaners",
    features: [
      "All-purpose disinfectants",
      "Floor & surface wipes",
      "Anti-bacterial sprays",
      "No-rinse formulas",
      "Ideal for high-touch areas",
    ],
  },
  {
    icon: Sparkles,
    title: "Glass & Multi-Purpose Cleaners",
    features: [
      "Streak-free glass & mirror cleaners",
      "Wood polish & furniture sprays",
      "Stainless steel shine",
      "Versatile 3-in-1 formulas",
      "Pleasant fragrance variants",
    ],
  },
  {
    icon: Utensils,
    title: "Dishwashing & Laundry Add-ons",
    features: [
      "Liquid & bar dishwash",
      "Scouring powders & pads",
      "Fabric whitener & stain removers",
      "Eco-friendly options available",
      "Bulk packs for households",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Products = () => {
  return (
    <div>
      <PageMeta 
        title="Our Cleaning Products" 
        description="Buy high-quality floor cleaners, toilet cleaners, kitchen degreasers, disinfectants & more. Fast delivery in Delhi NCR. Call 9582139182 or WhatsApp now." 
      />

      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Cleaning Products
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium household cleaning solutions — effective, long-lasting, and value for money. 
            Trusted formulations for every corner of your home.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                className="rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                  <p.icon className="h-7 w-7" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{p.title}</h2>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
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
          <SectionHeading 
            title="Ready to Stock Up?" 
            description="Browse our full range or get expert suggestions for your home cleaning needs. Bulk orders & dealer enquiries also welcome." 
          />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Button size="lg" asChild>
              <a href="tel:9582139182" className="gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://wa.me/919582139182" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gap-2"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;