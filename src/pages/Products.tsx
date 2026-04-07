import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageMeta from "@/components/PageMeta";
import { products, categories } from "@/data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageMeta
        title="Cleaning & Housekeeping Products | Wholesale Delhi"
        description="Browse a wide range of cleaning chemicals, hygiene products, and housekeeping materials at wholesale prices."
        canonical="https://bharatadvance.com/products"
      />
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium cleaning products manufactured by Bharat Advance
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    {product.images.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="mb-1 inline-block rounded-full bg-accent px-3 py-0.5 text-[10px] font-semibold text-accent-foreground">
                      {product.category}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-xl font-bold text-primary">
                        ₹{product.sizes[0].price}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        / {product.sizes[0].qty}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <SectionHeading
            title="Need Bulk Orders?"
            description="Contact us for wholesale pricing and custom packaging solutions for your business."
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="tel:9999018783" className="gap-2">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/9199990188783" target="_blank" rel="noopener noreferrer" className="gap-2">
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
