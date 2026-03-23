import { Users, Target, Heart, Award, ShieldCheck, FileCheck, Stamp, MapPin, Factory, Leaf, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PageMeta from "@/components/PageMeta";

const values = [
  { icon: Heart, title: "Customer Satisfaction", desc: "Your clean home is our success — we prioritize quality & value." },
  { icon: Target, title: "Superior Quality", desc: "Effective formulas that actually work — no shortcuts." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Safer ingredients & sustainable packaging whenever possible." },
  { icon: Award, title: "Trusted Since 2022", desc: "Proudly serving Delhi NCR households & businesses." },
];

const credentials = [
  { icon: ShieldCheck, title: "Udyam Registered", detail: "UDYAM-DL-06-0142080", desc: "MSME Micro Enterprise – Govt. of India" },
  { icon: FileCheck, title: "GST Registered", detail: "07DQNPR1437Q1ZZ", desc: "Fully compliant since incorporation" },
  { icon: Stamp, title: "Trademark Applied", detail: "Bharat Advance™", desc: "Protected brand for cleaning products (Class 03)" },
  { icon: MapPin, title: "Our Location", detail: "Vijay Vihar Phase-2, Rohini", desc: "House No-107, Block I, Delhi-110085" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => {
  return (
    <div>
      <PageMeta 
        title="About Bharat Advance | Premium Cleaning Products in Delhi NCR"
        description="Discover Bharat Advance – trusted manufacturer & supplier of high-quality floor cleaners, toilet cleaners, kitchen degreasers & disinfectants in Rohini, Delhi since 2022. Udyam & GST registered. Buy effective household cleaning products online or locally today."
      />

      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Bharat Advance
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium cleaning products made with care — for homes and businesses in Delhi NCR.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl prose prose-lg prose-headings:text-foreground prose-strong:text-foreground">
            <motion.div {...fadeUp} className="space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
              <p>
                <strong>Bharat Advance (BMN Enterprises)</strong> is a proud Delhi-based manufacturer and supplier of high-quality <strong>household cleaning products</strong>. Founded by <strong>Nitin Rathor</strong> on <strong>15th October 2022</strong> and headquartered in Rohini, Delhi, we are a fully <strong>Udyam-registered MSME</strong> and <strong>GST-compliant</strong> business dedicated to delivering effective, affordable, and reliable cleaning solutions.
              </p>

              <p>
                What began as a mission to provide dependable <strong>cleaning products in Delhi NCR</strong> has grown into a trusted name for thousands of households and small businesses across Rohini, North Delhi, and the wider NCR region. We specialize in manufacturing and selling premium formulations including <a href="/products/floor-cleaners" className="text-primary hover:underline">floor cleaners</a>, <a href="/products/toilet-cleaners" className="text-primary hover:underline">toilet & bathroom cleaners</a>, kitchen degreasers, disinfectants, glass cleaners, and multi-purpose surface solutions under the <strong>Bharat Advance™</strong> brand.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">Our Product Philosophy</h2>
              <p>
                At Bharat Advance, we believe cleaning should be <strong>effective without compromise</strong>. Our products are formulated to tackle tough Indian household challenges — from stubborn kitchen grease and bathroom limescale to daily floor dirt on marble, tiles, and vitrified surfaces. We focus on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Powerful yet value-for-money concentrated formulas</li>
                <li>Long-lasting fragrances that keep homes fresh</li>
                <li>Safer, skin-friendly ingredients where possible</li>
                <li>Eco-conscious packaging options</li>
                <li>99.9% germ-kill claims backed by real performance</li>
              </ul>

              <p>
                Whether you're looking for <strong>best floor cleaners in Delhi</strong>, reliable <strong>toilet cleaners in Rohini</strong>, or bulk <strong>disinfectants for home and office</strong>, we aim to be your go-to source for consistent quality.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">Why Families & Businesses in Delhi NCR Choose Us</h2>
              <p>
                Living in a fast-paced city like Delhi means dust, pollution, and hard water are everyday battles. Our locally made products are designed with Delhi NCR conditions in mind — better results, better value, and faster availability. We serve customers directly from our Rohini base and through quick local delivery — making it easy to <strong>buy cleaning products online in Delhi</strong> or pick up in person.
              </p>
              <p>
                Over the years, we've earned trust through consistent quality, transparent pricing, and genuine care for customer satisfaction. From small apartments in Vijay Vihar to offices in Rohini Sector- Asc, our <strong>cleaning supplies</strong> help keep spaces hygienic and welcoming.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <SectionHeading 
            badge="Verified & Compliant" 
            title="Our Business Credentials" 
            description="Government-recognized and fully transparent — shop with complete confidence." 
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-card-hover transition-all"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-1 text-sm font-mono text-primary">{c.detail}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <SectionHeading badge="Our Core" title="What Drives Bharat Advance" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex flex-col items-center text-center"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-md">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA-ish section */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <SectionHeading 
            title="Ready for a Cleaner Home?" 
            description="Explore our range of powerful, affordable cleaning products today — made in Delhi, for Delhi NCR." 
          />
          <div className="mt-8">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow transition hover:bg-primary/90"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Shop Cleaning Products Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;