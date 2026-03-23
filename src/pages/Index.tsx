import { Phone, MessageCircle, Home, Trash2, Building2, Package, Shield, Clock, BadgeCheck, ThumbsUp, Star, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-cleaning.jpg";
import { products } from "@/data/products";

const services = [
  { icon: Home, title: "House Cleaning", desc: "Deep cleaning, regular maintenance, and move-in/out cleaning for homes across Delhi." },
  { icon: Trash2, title: "Waste Disposal", desc: "Safe and eco-friendly waste collection and disposal for residential and commercial areas." },
  { icon: Building2, title: "Office Cleaning", desc: "Professional office and commercial space cleaning to keep your workplace spotless." },
  { icon: Package, title: "Packaging Supplies", desc: "Quality packaging materials and supplies for moving, storage, and shipping needs." },
];

const whyUs = [
  { icon: Clock, title: "Fast Service", desc: "Same-day service available across Delhi NCR" },
  { icon: BadgeCheck, title: "Trained Staff", desc: "Experienced and background-verified professionals" },
  { icon: ThumbsUp, title: "Affordable Rates", desc: "Competitive pricing with no hidden charges" },
  { icon: Shield, title: "100% Reliable", desc: "Trusted by 500+ families and businesses" },
];

const testimonials = [
  { name: "Priya Sharma", text: "BMN Enterprises did an amazing deep clean of our 3BHK in Rohini. Highly recommend!", rating: 5 },
  { name: "Rajesh Kumar", text: "Very professional waste disposal service. On time and hassle-free. Will use again.", rating: 5 },
  { name: "Anita Gupta", text: "Our office has never looked better! The team is polite, fast, and thorough.", rating: 5 },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const featuredProducts = products.filter((p) => p.images.length > 0).slice(0, 4);

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional cleaning services in Delhi" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
          <motion.span
            className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Serving Delhi NCR Since 2020
          </motion.span>
          <motion.h1
            className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Professional Cleaning &<br />Disposal Services in Delhi
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Fast, Affordable, Reliable — Your trusted partner for spotless spaces.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" asChild>
              <a href="tel:9582139182" className="gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="https://wa.me/919990188783" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <SectionHeading badge="Our Services" title="What We Offer" description="From deep cleaning to waste disposal, we've got Delhi covered." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <SectionHeading badge="Our Products" title="Featured Products" description="Premium cleaning products manufactured by Bharat Advance" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-bold text-foreground line-clamp-1">{product.name}</h3>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-primary">₹{product.sizes[0].price}</span>
                      <span className="text-xs text-muted-foreground">/ {product.sizes[0].qty}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products" className="gap-2">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container">
          <SectionHeading badge="Why Us" title="Why Choose BMN Enterprises?" description="We go above and beyond to deliver the best cleaning experience." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <SectionHeading badge="Reviews" title="What Our Clients Say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
                {...fadeUp}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <p className="mt-4 font-heading text-sm font-semibold text-foreground">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl"
            {...fadeUp}
          >
            Ready for a Sparkling Clean Space?
          </motion.h2>
          <motion.p
            className="mt-4 text-primary-foreground/80"
            {...fadeUp}
            transition={{ delay: 0.1 }}
          >
            Get a free quote today. We serve all areas in Delhi NCR.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            {...fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:9582139182" className="gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="https://wa.me/9199990188783" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
