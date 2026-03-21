import whitePhenyl from "@/assets/products/white-phenyl.jpg";
import whitePhenylBack from "@/assets/products/white-phenyl-back.jpg";
import whitePhenylSide from "@/assets/products/white-phenyl-side.jpg";
import toiletCleaner from "@/assets/products/toilet-cleaner.jpg";
import toiletCleanerBack from "@/assets/products/toilet-cleaner-back.jpg";
import floorCleanerConcentrate from "@/assets/products/floor-cleaner-concentrate.jpg";
import glossyGlassCleaner from "@/assets/products/glossy-glass-cleaner.jpg";
import everydayHandwash from "@/assets/products/everyday-handwash.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  sizes: { qty: string; price: number }[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "white-phenyl",
    name: "White Phenyl Floor Cleaner",
    category: "Floor Care",
    description:
      "Professional-grade white phenyl floor cleaner specially prepared for dengue mosquito protection. Ideal for bathrooms, floors, tiles, kitchens, and all types of flooring.",
    features: [
      "Repels insects, cockroaches & termites",
      "Removes odor from toilets, drains & sickrooms",
      "Provides perfect hygiene & protection",
      "Safe for marble, mosaic, tiles & glass surfaces",
      "Very effective if used as spray",
    ],
    sizes: [
      { qty: "5 Ltr", price: 399 },
    ],
    images: [whitePhenyl, whitePhenylSide, whitePhenylBack],
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Bathroom Care",
    description:
      "Powerful toilet cleaning solution with 10X cleaning power. Removes tough stains, protects from germs, and fights odour effectively.",
    features: [
      "10X cleaning power",
      "Removes tough stains",
      "Protects from germs",
      "Fights odour",
      "Easy-to-use nozzle bottle",
    ],
    sizes: [
      { qty: "500 ml", price: 199 },
      { qty: "5 Ltr (Refill)", price: 390 },
    ],
    images: [toiletCleaner, toiletCleanerBack],
  },
  {
    id: "floor-cleaner-concentrate",
    name: "White Floor Cleaner Concentrate",
    category: "Floor Care",
    description:
      "2-in-1 phenolic cleaner concentrate for floors and bathrooms. Highly effective and economical — just dilute and use.",
    features: [
      "2-in-1 floor & bathroom cleaner",
      "Concentrated formula — lasts longer",
      "Phenolic disinfectant action",
      "Pleasant fragrance",
      "Best before 2 years from manufacturing",
    ],
    sizes: [
      { qty: "500 ml", price: 149 },
      { qty: "5 Ltr", price: 399 },
    ],
    images: [floorCleanerConcentrate],
  },
  {
    id: "glossy-glass-cleaner",
    name: "Glossy Glass & Household Cleaner",
    category: "Surface Care",
    description:
      "Ultra shine formula glass and household cleaner. Leaves surfaces sparkling clean with a streak-free finish.",
    features: [
      "2X ultra shine formula",
      "Streak-free cleaning",
      "Safe for glass, mirrors & surfaces",
      "Spray bottle for easy application",
      "Pleasant fragrance",
    ],
    sizes: [
      { qty: "500 ml", price: 199 },
      { qty: "5 Ltr (Refill)", price: 380 },
    ],
    images: [glossyGlassCleaner],
  },
  {
    id: "everyday-handwash",
    name: "Everyday+ Liquid Hand Wash",
    category: "Hand Hygiene",
    description:
      "Specially formulated & scientifically blended liquid hand wash. Contains coconut derivatives, surfactants, anti-bacterial and moisturizing agents.",
    features: [
      "Protects from germs and bacteria",
      "Leaves soft & clean hands",
      "Soothing fragrances",
      "Rich lather with just one drop",
      "Contains moisturizing agents",
    ],
    sizes: [
      { qty: "5 Ltr", price: 1197 },
    ],
    images: [everydayHandwash],
  },
  {
    id: "black-phenyl",
    name: "Black Phenyl",
    category: "Floor Care",
    description:
      "Heavy-duty black phenyl for deep cleaning and disinfection of floors, drains, and outdoor areas.",
    features: [
      "Strong disinfectant action",
      "Ideal for drains & outdoor areas",
      "Removes tough grime",
      "Long-lasting fragrance",
      "Bulk 5 Ltr pack",
    ],
    sizes: [
      { qty: "5 Ltr", price: 320 },
    ],
    images: [],
  },
  {
    id: "laijol-floor-cleaner",
    name: "Laijol Floor Cleaner",
    category: "Floor Care",
    description:
      "Effective floor cleaner for everyday mopping. Keeps floors clean, fresh, and germ-free.",
    features: [
      "Daily floor cleaning",
      "Fresh fragrance",
      "Anti-bacterial formula",
      "Safe for all floor types",
      "Economical 5 Ltr pack",
    ],
    sizes: [
      { qty: "5 Ltr", price: 240 },
    ],
    images: [],
  },
  {
    id: "room-freshener",
    name: "Room Freshener",
    category: "Air Care",
    description:
      "Long-lasting room freshener to keep your spaces smelling pleasant all day long.",
    features: [
      "Long-lasting fragrance",
      "Eliminates bad odours",
      "Suitable for homes & offices",
      "Available in refill packs",
      "Multiple fragrances",
    ],
    sizes: [
      { qty: "5 Ltr (Refill)", price: 1350 },
      { qty: "1 Pc", price: 140 },
    ],
    images: [],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

export const getProductById = (id: string) => products.find((p) => p.id === id);
