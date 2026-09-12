export type NavLink = {
  label: string;
  href: string;
};

export type SubCategory = {
  label: string;
  href: string;
};

export type Category = {
  id: string;
  label: string;
  href: string;
  icon: "sofa" | "bed" | "utensils" | "briefcase" | "lamp" | "tag" | "home";
  subcategories: SubCategory[];
};

export type Collection = {
  id: string;
  name: string;
  image: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  badge?: "Sale" | "New" | "Hot";
  image: string;
  imageAlt: string;
  brand?: string;
  tags?: string[];
  colors?: string[];
  images?: string[];
  longDescription?: string;
  features?: string[];
  /** Instagram post/reel from @werkhausarm */
  instagramUrl?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  comments: number;
  image: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  title: "Contact Us",
  addressLabel: "Address",
  address:
    "Visit our showroom during business hours, or leave a message and we will respond as soon as possible.",
  addressLine: "Northern Avenue 1, Yerevan 0001, Armenia",
  phoneLabel: "Phone",
  phone: "+374 10 00 68 68",
  emailLabel: "Email",
  email: "hello@lumahome.am",
  hoursLabel: "Open Hours",
  hoursWeekday: "Monday to Friday 09:30 - 17:30",
  hoursWeekend: "Saturday & Sunday 10:00 - 15:00",
  formTitle: "Send Us A Message",
  /** OpenStreetMap embed centered on Yerevan */
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=44.492%2C40.165%2C44.535%2C40.195&layer=mapnik&marker=40.181%2C44.514",
  mapLinkUrl:
    "https://www.openstreetmap.org/?mlat=40.181&mlon=44.514#map=15/40.181/44.514",
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const aboutStory = {
  title: "Our Story",
  subtitle: "Cenean imperdiet. Fusce vel dui Praesent adipiscing.",
  description:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Maecenas egestas arcu quis ligula mattis placerat. Quisque id mi. Sed a libero. Vestibulum ullamcorper mauris at ligula. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Suspendisse non nisl sit amet velit hendrerit rutrum. Nulla porta dolor. Nunc interdum lacus sit amet orci.",
  image: "/abra/about/about3_1.jpg",
};

export const aboutTeam = {
  title: "Behind The Brands",
  description:
    "We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.",
  members: [
    {
      id: "adrian-stone",
      name: "Adrian Stone",
      role: "Ceo",
      image: "/abra/about/avatar_01.jpg",
    },
    {
      id: "karen-ryan",
      name: "Karen Ryan",
      role: "Designer",
      image: "/abra/about/avatar_02.jpg",
    },
    {
      id: "ferguson",
      name: "Ferguson",
      role: "Designer",
      image: "/abra/about/avatar_03.jpg",
    },
  ] satisfies TeamMember[],
};

export const aboutCommitment = {
  title: "We're committing to create the change we want to see in the world",
  image: "/abra/about/about1_3.jpg",
};

export const aboutPolicies = [
  {
    id: "shipping",
    title: "Free Shipping",
    description: "Capped at $39 per order",
  },
  {
    id: "payments",
    title: "Security Payments",
    description: "Up to 12 months installments",
  },
  {
    id: "returns",
    title: "14-Day Returns",
    description: "Shop with confidence",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Delivered to your door",
  },
] as const;

export const categories: Category[] = [
  {
    id: "living-room",
    label: "Living Room",
    href: "#living-room",
    icon: "sofa",
    subcategories: [
      { label: "Sofas", href: "#sofas" },
      { label: "Coffee Tables", href: "#coffee-tables" },
      { label: "Accent Chairs", href: "#accent-chairs" },
      { label: "TV Units", href: "#tv-units" },
    ],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    href: "#bedroom",
    icon: "bed",
    subcategories: [
      { label: "Beds", href: "#beds" },
      { label: "Nightstands", href: "#nightstands" },
      { label: "Dressers", href: "#dressers" },
      { label: "Wardrobes", href: "#wardrobes" },
    ],
  },
  {
    id: "dining",
    label: "Dining",
    href: "#dining",
    icon: "utensils",
    subcategories: [
      { label: "Dining Tables", href: "#dining-tables" },
      { label: "Dining Chairs", href: "#dining-chairs" },
      { label: "Sideboards", href: "#sideboards" },
      { label: "Bar Stools", href: "#bar-stools" },
    ],
  },
  {
    id: "office",
    label: "Office",
    href: "#office",
    icon: "briefcase",
    subcategories: [
      { label: "Desks", href: "#desks" },
      { label: "Office Chairs", href: "#office-chairs" },
      { label: "Bookshelves", href: "#bookshelves" },
      { label: "Storage", href: "#storage" },
    ],
  },
  {
    id: "decor",
    label: "Decor",
    href: "#decor",
    icon: "lamp",
    subcategories: [
      { label: "Lighting", href: "#lighting" },
      { label: "Rugs", href: "#rugs" },
      { label: "Mirrors", href: "#mirrors" },
      { label: "Vases", href: "#vases" },
    ],
  },
  {
    id: "sale",
    label: "Sale",
    href: "#sale",
    icon: "tag",
    subcategories: [
      { label: "Clearance", href: "#clearance" },
      { label: "Seasonal Offers", href: "#seasonal" },
      { label: "Bundles", href: "#bundles" },
    ],
  },
];

export const heroSlides = [
  {
    id: "slide-1",
    eyebrow: "Minimal Interior",
    title: "Hardwood Storage for\nHigh-Use Spaces",
    cta: "Shop Collection",
    image: "/abra/s1-1.jpg",
    imageAlt: "Warm modern bedroom with bouclé seating and wood cabinetry",
  },
  {
    id: "slide-2",
    eyebrow: "Quiet Living",
    title: "Architectural Builds in\nOak and Walnut",
    cta: "Explore Now",
    image: "/abra/s1-2.jpg",
    imageAlt: "Contemporary living space with sculptural furniture",
  },
];

export const collections: Collection[] = [
  {
    id: "sofa-living",
    name: "Sofa Living",
    image: "/abra/co1-1.jpg",
    href: "#sofa-living",
  },
  {
    id: "chic-residence",
    name: "Chic Residence",
    image: "/abra/co1-2.jpg",
    href: "#chic-residence",
  },
  {
    id: "dreamy-decor",
    name: "Dreamy Decor",
    image: "/abra/co1-3.jpg",
    href: "#dreamy-decor",
  },
  {
    id: "fine-furnish",
    name: "Fine Furnish",
    image: "/abra/co1-4.jpg",
    href: "#fine-furnish",
  },
];

export const catalogFilterCategories = [
  "Modern Living",
  "Cozy Corner",
  "Urban Nest",
  "Natural Form",
  "Nordic Home",
  "Pure Comfort",
  "Timeless Space",
  "Elegant Room",
  "Warm Habitat",
  "Luxe Interior",
  "Soft Shelter",
] as const;

export const catalogTags = [
  "Hot",
  "Innovation",
  "Lifestyle",
  "Quality",
  "Solutions",
  "Sustainability",
] as const;

export const catalogBrands = [
  "EcoSphere",
  "HorizonEdge",
  "LuxeVibe",
  "NovaCrest",
  "TrueHaven",
  "VertexCore",
] as const;

export const catalogColors = ["White", "Green", "Black", "Beige", "Oak"] as const;

export const catalogSortOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-selling", label: "Best selling" },
  { value: "title-asc", label: "Alphabetically, A-Z" },
  { value: "title-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
] as const;

/** Catalog for /products — Abra grid-4-columns style (prices in AMD). */
export const catalogProducts: Product[] = [
  {
    id: "zafira-loft",
    name: "Zafira Loft",
    category: "Timeless Space",
    description: "Sculptural seating for modern loft interiors",
    price: 80000,
    compareAtPrice: 90000,
    badge: "Sale",
    brand: "EcoSphere",
    tags: ["Sustainability"],
    colors: ["Beige", "White", "Green", "Black"],
    image: "/instagram/01.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdJjBxbABf_/",
    images: [
      "/instagram/01.jpg",
      "/instagram/02.jpg",
      "/instagram/03.jpg",
      "/instagram/04.jpg",
      "/instagram/12.jpg",
    ],
    longDescription:
      "Cheer on quiet living with sculptural comfort. Each Zafira Loft piece is made for a breathable everyday fit and easily adaptable presence — whether your room is a loft, a calm corner, or a weekend gathering space. Soft silhouettes and considered materials leave a lasting impression without visual noise.",
    features: [
      "Flexible design suited for multiple spaces and daily routines",
      "Long-lasting warranty: product covered for 2 years",
      "Impact-resistant construction for everyday durability",
      "Premium materials selected for lasting comfort",
      "Dedicated support for sizing, delivery, and care",
    ],
  },
  {
    id: "tavira-loom",
    name: "Tavira Loom",
    category: "Modern Living",
    description: "Woven texture with refined oak accents",
    price: 80000,
    compareAtPrice: 90000,
    badge: "Sale",
    brand: "LuxeVibe",
    tags: ["Quality"],
    colors: ["Oak", "Beige"],
    image: "/instagram/02.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdHBi_SilNF/",
  },
  {
    id: "norvi-lane",
    name: "Norvi Lane",
    category: "Nordic Home",
    description: "Clean lines for quiet everyday living",
    price: 70000,
    compareAtPrice: 80000,
    badge: "Sale",
    brand: "NovaCrest",
    tags: ["Innovation"],
    colors: ["White", "Black"],
    image: "/instagram/03.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/DdEhs61HN3U/",
  },
  {
    id: "elvora-mist-catalog",
    name: "Elvora Mist",
    category: "Soft Shelter",
    description: "Soft mist tones for layered comfort",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Sale",
    brand: "VertexCore",
    tags: ["Lifestyle"],
    colors: ["White", "Beige"],
    image: "/instagram/04.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc_je3YFQYj/",
  },
  {
    id: "zento-vale",
    name: "Zento Vale",
    category: "Urban Nest",
    description: "Compact form with warm material depth",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Hot",
    brand: "HorizonEdge",
    tags: ["Hot"],
    colors: ["Green", "Black"],
    image: "/instagram/15.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/Dc58WRnHG7J/",
  },
  {
    id: "ravelo-form",
    name: "Ravelo Form",
    category: "Natural Form",
    description: "Organic silhouette in sustainable wood",
    price: 80000,
    compareAtPrice: 90000,
    badge: "Sale",
    brand: "EcoSphere",
    tags: ["Sustainability"],
    colors: ["Oak"],
    image: "/instagram/06.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc3gPjdEV05/",
  },
  {
    id: "mivora-oak",
    name: "Mivora Oak",
    category: "Warm Habitat",
    description: "Solid oak character for living spaces",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Sale",
    brand: "VertexCore",
    tags: ["Lifestyle"],
    colors: ["Oak", "Beige"],
    image: "/instagram/12.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc1RGRkPrAO/",
  },
  {
    id: "solven-arc",
    name: "Solven Arc",
    category: "Elegant Room",
    description: "Arched profile with soft modern finish",
    price: 70000,
    compareAtPrice: 80000,
    badge: "Sale",
    brand: "NovaCrest",
    tags: ["Innovation"],
    colors: ["White", "Black"],
    image: "/instagram/12.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/DcyZm_gHL5t/",
  },
  {
    id: "velari-room",
    name: "Velari Room",
    category: "Luxe Interior",
    description: "Refined seating for curated rooms",
    price: 70000,
    compareAtPrice: 80000,
    badge: "Sale",
    brand: "NovaCrest",
    tags: ["Innovation"],
    colors: ["Beige", "Green"],
    image: "/instagram/01.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DcvStmuEeLL/",
  },
  {
    id: "orvian-line",
    name: "Orvian Line",
    category: "Pure Comfort",
    description: "Linear design with inviting soft touch",
    price: 70000,
    compareAtPrice: 80000,
    badge: "Sale",
    brand: "NovaCrest",
    tags: ["Innovation"],
    colors: ["White"],
    image: "/instagram/15.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/Dcu3HnqiKxH/",
  },
  {
    id: "lunero-frame",
    name: "Lunero Frame",
    category: "Cozy Corner",
    description: "Framed silhouette for intimate corners",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Hot",
    brand: "HorizonEdge",
    tags: ["Hot"],
    colors: ["Black", "Oak"],
    image: "/instagram/11.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dctp2nZCtq_/",
  },
  {
    id: "tivano-space",
    name: "Tivano Space",
    category: "Urban Nest",
    description: "Compact essential for city apartments",
    price: 40000,
    compareAtPrice: 50000,
    badge: "Sale",
    brand: "TrueHaven",
    tags: ["Solutions"],
    colors: ["White", "Green"],
    image: "/instagram/12.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DcloR8DDMoK/",
  },
  {
    id: "revora-muse",
    name: "Revora Muse",
    category: "Modern Living",
    description: "Statement piece with quiet elegance",
    price: 70000,
    compareAtPrice: 80000,
    badge: "Sale",
    brand: "NovaCrest",
    tags: ["Innovation"],
    colors: ["Beige", "White"],
    image: "/instagram/13.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdJjBxbABf_/",
  },
  {
    id: "calvi-stone",
    name: "Calvi Stone",
    category: "Natural Form",
    description: "Stone-inspired calm for living areas",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Hot",
    brand: "HorizonEdge",
    tags: ["Hot"],
    colors: ["White", "Black"],
    image: "/instagram/14.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdHBi_SilNF/",
  },
  {
    id: "novira-home",
    name: "Novira Home",
    category: "Timeless Space",
    description: "Home essentials with lasting craft",
    price: 80000,
    compareAtPrice: 90000,
    badge: "Sale",
    brand: "EcoSphere",
    tags: ["Sustainability"],
    colors: ["Oak", "Green"],
    image: "/instagram/15.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/DdEhs61HN3U/",
  },
  {
    id: "lorven-edge",
    name: "Lorven Edge",
    category: "Luxe Interior",
    description: "Sharp detailing with soft material contrast",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Hot",
    brand: "HorizonEdge",
    tags: ["Hot"],
    colors: ["Black", "Beige"],
    image: "/instagram/16.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc_je3YFQYj/",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "elvora-mist",
    name: "Elvora Mist",
    category: "Decor",
    description: "Soft linen cushion in warm mist tone",
    price: 60000,
    compareAtPrice: 70000,
    badge: "Sale",
    image: "/instagram/01.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdJjBxbABf_/",
  },
  {
    id: "nordic-clock",
    name: "Nordic Clock",
    category: "Decor",
    description: "Minimal wall clock with oak frame",
    price: 50000,
    compareAtPrice: 70000,
    badge: "Sale",
    image: "/instagram/02.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/DdHBi_SilNF/",
  },
  {
    id: "aida-accent-chair",
    name: "Aida Accent Chair",
    category: "Living Room",
    description: "Sculpted oak frame with soft linen upholstery",
    price: 295000,
    compareAtPrice: 340000,
    badge: "Sale",
    image: "/instagram/03.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/DdEhs61HN3U/",
  },
  {
    id: "linden-stool",
    name: "Linden Stool",
    category: "Living Room",
    description: "Charcoal-stained wood with soft rounded edges",
    price: 80000,
    compareAtPrice: 90000,
    badge: "Sale",
    image: "/instagram/04.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc_je3YFQYj/",
  },
  {
    id: "jasper-sofa",
    name: "Jasper Sofa",
    category: "Living Room",
    description: "Low-profile three-seater in warm stone bouclé",
    price: 890000,
    badge: "New",
    image: "/instagram/15.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/Dc58WRnHG7J/",
  },
  {
    id: "astra-floor-lamp",
    name: "Astra Floor Lamp",
    category: "Decor",
    description: "Brushed brass stem with linen shade",
    price: 128000,
    badge: "Hot",
    image: "/instagram/06.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc3gPjdEV05/",
  },
  {
    id: "nord-oak-bed",
    name: "Nord Oak Bed",
    category: "Bedroom",
    description: "Solid oak headboard with quiet, tapered legs",
    price: 675000,
    image: "/instagram/12.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/reel/Dc1RGRkPrAO/",
  },
  {
    id: "haven-dining-set",
    name: "Haven Dining Set",
    category: "Dining",
    description: "Six-seat oak table with woven seat chairs",
    price: 980000,
    image: "/instagram/12.jpg",
    imageAlt: "Werkhaus product from Instagram",
    instagramUrl: "https://www.instagram.com/werkhausarm/p/DcyZm_gHL5t/",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "natural-materials",
    title: "Everything You Didn't Know About Natural Materials",
    date: "May 13, 2026",
    comments: 0,
    image: "/abra/ba3-1.jpg",
  },
  {
    id: "mix-and-match",
    title: "Mix and Match Adds Incredible Value to Your Life",
    date: "May 13, 2026",
    comments: 0,
    image: "/abra/ba3-2.jpg",
  },
  {
    id: "quiet-spaces",
    title: "How Quiet Spaces Shape Everyday Comfort",
    date: "May 10, 2026",
    comments: 2,
    image: "/abra/co1-5.jpg",
  },
];

export const philosophyText =
  "We believe a home should feel calm, considered, and enduring. Every Luma Home piece is chosen for atmosphere, comfort, and timeless style — soft wood tones, charcoal accents, and quiet craftsmanship.";

export const quoteText =
  "Welcome to dolor sit amet, consectetur adipiscing elit, sed for warm, sophisticatons, soft wood tones, and charcoal.";

const defaultFeatures = [
  "Flexible design suited for multiple spaces and daily routines",
  "Long-lasting warranty: product covered for 2 years",
  "Impact-resistant construction for everyday durability",
  "Premium materials selected for lasting comfort",
  "Dedicated support for sizing, delivery, and care",
];

export function getProductById(id: string): Product | undefined {
  const product = catalogProducts.find((item) => item.id === id);
  if (!product) return undefined;

  return {
    ...product,
    images: product.images?.length ? product.images : [product.image],
    longDescription:
      product.longDescription ??
      `${product.description}. Crafted for calm, modern interiors with soft wood tones and considered proportions — made to settle into everyday life.`,
    features: product.features?.length ? product.features : defaultFeatures,
    colors: product.colors?.length
      ? product.colors
      : ["White", "Beige", "Black"],
  };
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const current = catalogProducts.find((item) => item.id === id);
  const pool = catalogProducts.filter((item) => item.id !== id);
  if (!current) return pool.slice(0, limit);

  const sameCategory = pool.filter((item) => item.category === current.category);
  const rest = pool.filter((item) => item.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAllProductIds(): string[] {
  return catalogProducts.map((product) => product.id);
}
