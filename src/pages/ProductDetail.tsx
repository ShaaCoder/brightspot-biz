import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageMeta from "@/components/PageMeta";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground/30" />
        <h1 className="font-heading text-2xl font-bold text-foreground">Product Not Found</h1>
        <p className="mt-2 text-muted-foreground">The product you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in "${product.name}" (${product.sizes[0].qty} - ₹${product.sizes[0].price}). Please share more details.`
  );

  return (
    <div>
      <PageMeta
        title={`Buy ${product.name} Online | Cleaning Products Delhi`}
        description={`Buy ${product.name} at best price from BMN Enterprises. Bulk cleaning and hygiene products supplier in Delhi.`}
        canonical={`https://bharatadvance.com/products/${product.id}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.images.length > 0 ? product.images[0] : undefined,
          "brand": { "@type": "Brand", "name": "Bharat Advance" },
          "offers": product.sizes.map((s) => ({
            "@type": "Offer",
            "price": s.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "BMN Enterprises Bharat Advance" },
          })),
        }}
      />
      <div className="container py-8">
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="aspect-square overflow-hidden rounded-xl border border-border bg-muted">
              {product.images.length > 0 ? (
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ShoppingBag className="h-24 w-24 text-muted-foreground/20" />
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage === i ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
              {product.category}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Sizes & Pricing */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground">Available Sizes</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.sizes.map((s) => (
                  <div
                    key={s.qty}
                    className="rounded-lg border border-border bg-muted px-5 py-3 text-center"
                  >
                    <div className="text-xs text-muted-foreground">{s.qty}</div>
                    <div className="mt-1 text-xl font-bold text-primary">₹{s.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground">Key Features</h3>
              <ul className="mt-3 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="tel:9999018783" className="gap-2">
                  <Phone className="h-5 w-5" /> Call to Order
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/9199990188783?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="h-5 w-5" /> Order on WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Mfg. by: B M N Enterprises, I-107 Vijay Vihar, Phase-2, Rohini, Sector-4, Delhi-110085
            </p>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-foreground">Related Products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/products/${rp.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {rp.images.length > 0 ? (
                      <img src={rp.images[0]} alt={rp.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground/30" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-foreground">{rp.name}</h3>
                    <div className="mt-1 text-lg font-bold text-primary">₹{rp.sizes[0].price}<span className="text-xs font-normal text-muted-foreground"> / {rp.sizes[0].qty}</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
