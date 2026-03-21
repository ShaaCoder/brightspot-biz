import { Users, Target, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Customer First", desc: "Every decision we make is with our customers in mind." },
  { icon: Target, title: "Quality Focused", desc: "We never cut corners — only dirt." },
  { icon: Users, title: "Trusted Team", desc: "Verified, trained, and dedicated professionals." },
  { icon: Award, title: "3+ Years Experience", desc: "Serving Delhi NCR with pride since 2020." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => {
  return (
    <div>
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your local, trusted cleaning partner in Rohini, Delhi.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <motion.div {...fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">BMN Enterprises Bharat Advance</strong> is a Delhi-based cleaning and disposal service company headquartered in Rohini. With over 3 years of hands-on experience, we have served hundreds of homes, offices, and commercial spaces across Delhi NCR.
              </p>
              <p>
                We started with a simple mission: to make professional cleaning services accessible, affordable, and reliable for everyone. From a small team serving our local neighborhood, we've grown into a trusted name that businesses and families rely on for their cleaning needs.
              </p>
              <p>
                Our trained and background-verified staff use modern equipment and eco-friendly products to deliver results that speak for themselves. Whether it's a one-time deep clean or a long-term maintenance contract, we treat every job with the same dedication and attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container">
          <SectionHeading badge="Our Values" title="What Drives Us" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex flex-col items-center text-center"
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
