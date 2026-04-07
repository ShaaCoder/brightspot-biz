import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon, Film } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageMeta from "@/components/PageMeta";

import whitePhenyl from "@/assets/products/white-phenyl.jpg";
import whitePhenylBack from "@/assets/products/white-phenyl-back.jpg";
import whitePhenylSide from "@/assets/products/white-phenyl-side.jpg";
import toiletCleaner from "@/assets/products/toilet-cleaner.jpg";
import toiletCleanerBack from "@/assets/products/toilet-cleaner-back.jpg";
import floorCleanerConcentrate from "@/assets/products/floor-cleaner-concentrate.jpg";
import glossyGlassCleaner from "@/assets/products/glossy-glass-cleaner.jpg";
import everydayHandwash from "@/assets/products/everyday-handwash.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryReel {
  url: string;
  title: string;
}

const images: GalleryImage[] = [
  { src: whitePhenyl, alt: "White Phenyl Floor Cleaner", category: "Products" },
  { src: toiletCleaner, alt: "Toilet Cleaner - 10X Cleaning Power", category: "Products" },
  { src: glossyGlassCleaner, alt: "Glossy Glass & Household Cleaner", category: "Products" },
  { src: everydayHandwash, alt: "Everyday+ Liquid Hand Wash", category: "Products" },
  { src: floorCleanerConcentrate, alt: "White Floor Cleaner Concentrate", category: "Products" },
  { src: whitePhenylSide, alt: "White Phenyl - Side View", category: "Products" },
  { src: whitePhenylBack, alt: "White Phenyl - Special Features", category: "Products" },
  { src: toiletCleanerBack, alt: "Toilet Cleaner - Usage Instructions", category: "Products" },
];

const reels: GalleryReel[] = [
  // Add Instagram / YouTube reels here
  { url: "https://www.instagram.com/stackbyshaan/reel/DTyA2H1Enwb/", title: "Product Showcase" },
  { url: "https://www.instagram.com/stackbyshaan/reel/DTvbnO5Eg8t/", title: "Cleaning Solutions" },
  { url: "https://www.instagram.com/stackbyshaan/reel/DTSzWgbEq1g/", title: "Behind the Scenes" },
];

const tabs = ["All", "Images", "Reels"] as const;
type Tab = (typeof tabs)[number];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div>
      <PageMeta
        title="Gallery | BMN Enterprises Cleaning Products Delhi"
        description="See photos and videos of Bharat Advance cleaning products, packaging, and our team in action across Delhi NCR."
        canonical="https://bharatadvance.com/gallery"
      />
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="mt-4 text-primary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore our products, work, and behind-the-scenes moments
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 flex items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {tab === "Images" && <ImageIcon className="h-4 w-4" />}
                {tab === "Reels" && <Film className="h-4 w-4" />}
                {tab}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          {(activeTab === "All" || activeTab === "Images") && (
            <div>
              {activeTab === "All" && (
                <SectionHeading title="Photos" description="Our products and services in action" />
              )}
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-card"
                    onClick={() => setLightboxImage(img.src)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-foreground line-clamp-1">{img.alt}</p>
                      <span className="text-xs text-muted-foreground">{img.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Reels Section */}
          {(activeTab === "All" || activeTab === "Reels") && (
            <div className={activeTab === "All" ? "mt-16" : ""}>
              {activeTab === "All" && (
                <SectionHeading title="Reels & Videos" description="Watch our latest reels and product demos" />
              )}
              {reels.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {reels.map((reel, i) => {
                    const embedUrl = reel.url.replace(/\/$/, "") + "/embed";
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
                      >
                        <div className="aspect-[9/16]">
                          <iframe
                            src={embedUrl}
                            className="h-full w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            title={reel.title}
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-medium text-foreground line-clamp-1">{reel.title}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
                  <Film className="mb-4 h-12 w-12 text-muted-foreground/30" />
                  <p className="font-heading text-lg font-semibold text-foreground">Reels Coming Soon!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Follow us on social media for the latest updates.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-background hover:bg-background/40"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Gallery preview"
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
