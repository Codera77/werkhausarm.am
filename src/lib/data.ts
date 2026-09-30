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
  icon:
    | "volume"
    | "building"
    | "layers"
    | "briefcase"
    | "palette"
    | "tag"
    | "home";
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

export const socialLinks = {
  facebook: "https://www.facebook.com/diz.art.923",
};

export const contactInfo = {
  title: "Contact Us",
  addressLabel: "Address",
  address:
    "Visit our showroom during business hours, or leave a message and we will respond as soon as possible.",
  addressLine: "Yerevan, Armenia",
  phoneLabel: "Phone",
  phone: "+374 10 00 68 68",
  emailLabel: "Email",
  email: "hello@dizart.am",
  hoursLabel: "Open Hours",
  hoursWeekday: "Monday to Friday 09:30 - 17:30",
  hoursWeekend: "Saturday & Sunday 10:00 - 15:00",
  formTitle: "Send Us A Message",
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
  subtitle: "Construction and design solutions in one place.",
  description:
    "DizArt brings modern sound insulation and construction systems to Armenia — for apartments, houses, offices, and commercial spaces.",
  image: "/dizart/hero/about.jpg",
};

export const aboutTeam = {
  title: "Behind DizArt",
  description:
    "A focused team of construction and design specialists delivering proven acoustic and building technologies across Armenia.",
  members: [
    {
      id: "team-1",
      name: "Armen Petrosyan",
      role: "Ceo",
      image: "/abra/about/avatar_01.jpg",
    },
    {
      id: "team-2",
      name: "Ani Grigoryan",
      role: "Designer",
      image: "/abra/about/avatar_02.jpg",
    },
    {
      id: "team-3",
      name: "David Hakobyan",
      role: "Designer",
      image: "/abra/about/avatar_03.jpg",
    },
  ] satisfies TeamMember[],
};

export const aboutCommitment = {
  title: "We're committing to create the change we want to see in the world",
  image: "/dizart/banner-systems.jpg",
};

export const aboutPolicies = [
  {
    id: "shipping",
    title: "Delivery Across Armenia",
    description: "Retail and wholesale nationwide",
  },
  {
    id: "payments",
    title: "Secure Payments",
    description: "Flexible payment options",
  },
  {
    id: "returns",
    title: "Expert Consultation",
    description: "Professional system selection",
  },
  {
    id: "support",
    title: "Local Availability",
    description: "Products stocked in Armenia",
  },
] as const;

export const categories: Category[] = [
  {
    id: "sound-insulation",
    label: "Sound Insulation",
    href: "/products",
    icon: "volume",
    subcategories: [
      { label: "Wall Systems", href: "/products" },
      { label: "Floor Systems", href: "/products" },
      { label: "Ceiling Systems", href: "/products" },
      { label: "Membranes", href: "/products" },
    ],
  },
  {
    id: "construction",
    label: "Construction",
    href: "/products",
    icon: "building",
    subcategories: [
      { label: "Profiles", href: "/products" },
      { label: "Boards", href: "/products" },
      { label: "Sealants", href: "/products" },
      { label: "Kits", href: "/products" },
    ],
  },
  {
    id: "interior",
    label: "Interior Systems",
    href: "/products",
    icon: "layers",
    subcategories: [
      { label: "Partitions", href: "/products" },
      { label: "Finishing Panels", href: "/products" },
      { label: "Commercial", href: "/products" },
    ],
  },
  {
    id: "design",
    label: "Design Solutions",
    href: "/products",
    icon: "palette",
    subcategories: [
      { label: "Apartments", href: "/products" },
      { label: "Offices", href: "/products" },
      { label: "Homes", href: "/products" },
    ],
  },
  {
    id: "sale",
    label: "Coming Soon",
    href: "/products",
    icon: "tag",
    subcategories: [
      { label: "IdealDom", href: "/#news" },
      { label: "Tonus", href: "/#news" },
    ],
  },
];

export const heroSlides = [
  {
    id: "slide-1",
    eyebrow: "DizArt.am",
    title: "Construction & design\nsolutions in one place",
    cta: "View assortment",
    image: "/dizart/hero/hero-1.jpg",
    imageAlt: "Modern architectural construction and design space",
  },
  {
    id: "slide-2",
    eyebrow: "Coming soon in Armenia",
    title: "Sound insulation & building\nsystems: IdealDom · Tonus",
    cta: "Contact us",
    image: "/dizart/hero/hero-2.jpg",
    imageAlt: "Contemporary building systems and interiors",
  },
];

export const collections: Collection[] = [
  {
    id: "tonus-systems",
    name: "Tonus Systems",
    image: "/dizart/products/p01.jpg",
    href: "/products",
  },
  {
    id: "idealdom",
    name: "IdealDom",
    image: "/dizart/products/p02.jpg",
    href: "/products",
  },
  {
    id: "acoustic-layers",
    name: "Acoustic Layers",
    image: "/dizart/products/p04.jpg",
    href: "/products",
  },
  {
    id: "design-finishes",
    name: "Design Finishes",
    image: "/dizart/products/p07.jpg",
    href: "/products",
  },
];

export const catalogFilterCategories = [
  "Sound Insulation",
  "Construction Systems",
  "Interior Finishing",
  "Floor Acoustics",
  "Wall Acoustics",
  "Ceiling Acoustics",
  "Commercial Spaces",
  "Residential",
  "Design Solutions",
  "Coming Soon",
  "Accessories",
] as const;

export const catalogTags = [
  "Hot",
  "New",
  "IdealDom",
  "Tonus",
  "Professional",
  "Wholesale",
] as const;

export const catalogBrands = [
  "IdealDom",
  "Tonus",
  "DizArt",
  "AcousticPro",
  "BuildCore",
  "FormLine",
] as const;

export const catalogColors = ["White", "Grey", "Black", "Beige", "Natural"] as const;

export const catalogSortOptions = [
  { value: "featured", label: "Featured" },
  { value: "best-selling", label: "Best selling" },
  { value: "title-asc", label: "Alphabetically, A-Z" },
  { value: "title-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
] as const;

const defaultFeatures = [
  "Suitable for apartments, houses, offices, and commercial spaces",
  "Retail and wholesale availability in Armenia",
  "Professional guidance on correct system layers",
  "Delivery across the Republic of Armenia",
  "Dedicated support for selection and application",
];

/** Catalog for /products — DizArt sound insulation & construction systems. */
export const catalogProducts: Product[] = [
  {
    id: "tonus-wall-panel",
    name: "Tonus Wall Panel",
    category: "Wall Acoustics",
    description: "Modern wall acoustic panel system for residential quiet",
    price: 48000,
    badge: "New",
    brand: "Tonus",
    tags: ["Tonus", "New"],
    colors: ["Grey", "Beige", "White"],
    image: "/dizart/products/p01.jpg",
    imageAlt: "Tonus wall acoustic panel",
    images: [
      "/dizart/products/p01.jpg",
      "/dizart/products/p09.jpg",
      "/dizart/products/p08.jpg",
    ],
    longDescription:
      "Tonus wall panels deliver layered acoustic performance for apartments and homes. Designed for clean installation and lasting comfort without visual noise.",
    features: defaultFeatures,
  },
  {
    id: "tonus-ceiling",
    name: "Tonus Ceiling System",
    category: "Ceiling Acoustics",
    description: "Ceiling acoustic assembly for rooms with overhead noise",
    price: 62000,
    badge: "New",
    brand: "Tonus",
    tags: ["Tonus", "Professional"],
    colors: ["White", "Grey"],
    image: "/dizart/products/p03.jpg",
    imageAlt: "Tonus ceiling acoustic system",
    images: ["/dizart/products/p03.jpg", "/dizart/products/p10.jpg"],
  },
  {
    id: "idealdom-floor",
    name: "IdealDom Floor System",
    category: "Floor Acoustics",
    description: "Floor sound insulation for impact and structure-borne noise",
    price: 55000,
    badge: "Hot",
    brand: "IdealDom",
    tags: ["IdealDom", "Hot"],
    colors: ["Natural", "Grey"],
    image: "/dizart/products/p02.jpg",
    imageAlt: "IdealDom floor insulation system",
    images: ["/dizart/products/p02.jpg", "/dizart/products/p11.jpg"],
  },
  {
    id: "idealdom-wall",
    name: "IdealDom Wall System",
    category: "Sound Insulation",
    description: "Complete wall insulation stack for apartments and offices",
    price: 72000,
    badge: "New",
    brand: "IdealDom",
    tags: ["IdealDom", "New"],
    colors: ["White", "Grey"],
    image: "/dizart/products/p09.jpg",
    imageAlt: "IdealDom wall insulation system",
    images: ["/dizart/products/p09.jpg", "/dizart/products/p01.jpg"],
  },
  {
    id: "idealdom-partition",
    name: "IdealDom Partition",
    category: "Interior Finishing",
    description: "Acoustic partition solution for offices and commercial rooms",
    price: 89000,
    badge: "Hot",
    brand: "IdealDom",
    tags: ["IdealDom", "Wholesale"],
    colors: ["White", "Beige"],
    image: "/dizart/products/p07.jpg",
    imageAlt: "IdealDom acoustic partition",
  },
  {
    id: "membrane-pro",
    name: "Acoustic Membrane Pro",
    category: "Accessories",
    description: "High-density sound membrane for multi-layer assemblies",
    price: 28000,
    brand: "AcousticPro",
    tags: ["Professional"],
    colors: ["Black", "Grey"],
    image: "/dizart/products/p06.jpg",
    imageAlt: "Acoustic membrane roll",
  },
  {
    id: "mineral-wool",
    name: "Acoustic Mineral Wool",
    category: "Construction Systems",
    description: "Dense mineral wool for professional sound insulation layers",
    price: 22000,
    brand: "BuildCore",
    tags: ["Wholesale"],
    colors: ["Natural"],
    image: "/dizart/products/p04.jpg",
    imageAlt: "Acoustic mineral wool insulation",
  },
  {
    id: "drywall-acoustic",
    name: "Acoustic Drywall Board",
    category: "Construction Systems",
    description: "Specialized board for quieter wall and ceiling builds",
    price: 18000,
    brand: "BuildCore",
    tags: ["Professional"],
    colors: ["White"],
    image: "/dizart/products/p05.jpg",
    imageAlt: "Acoustic drywall board",
  },
  {
    id: "sealant-kit",
    name: "Acoustic Sealant Kit",
    category: "Accessories",
    description: "Sealing kit for junctions, sockets, and frame edges",
    price: 12000,
    brand: "DizArt",
    tags: ["New"],
    colors: ["Grey", "White"],
    image: "/dizart/products/p12.jpg",
    imageAlt: "Acoustic sealant kit",
  },
  {
    id: "frame-profile",
    name: "Metal Frame Profiles",
    category: "Construction Systems",
    description: "Profiles for framed acoustic and partition assemblies",
    price: 9000,
    brand: "FormLine",
    tags: ["Wholesale"],
    colors: ["Grey"],
    image: "/dizart/products/p05.jpg",
    imageAlt: "Metal frame profiles for construction",
  },
  {
    id: "design-finish-panel",
    name: "Design Finish Panel",
    category: "Design Solutions",
    description: "Premium interior finish panels paired with acoustic stacks",
    price: 45000,
    badge: "Sale",
    compareAtPrice: 52000,
    brand: "DizArt",
    tags: ["New"],
    colors: ["Beige", "White", "Natural"],
    image: "/dizart/products/p08.jpg",
    imageAlt: "Design finish panel for interiors",
  },
  {
    id: "commercial-system",
    name: "Commercial Acoustic Pack",
    category: "Commercial Spaces",
    description: "Turnkey acoustic package for offices and retail interiors",
    price: 145000,
    badge: "Hot",
    brand: "IdealDom",
    tags: ["IdealDom", "Professional", "Hot"],
    colors: ["Grey", "White"],
    image: "/dizart/products/p10.jpg",
    imageAlt: "Commercial acoustic system package",
    images: [
      "/dizart/products/p10.jpg",
      "/dizart/products/p11.jpg",
      "/dizart/products/p07.jpg",
    ],
  },
  {
    id: "residential-kit",
    name: "Residential Quiet Kit",
    category: "Residential",
    description: "Ready kit for apartment bedrooms and living rooms",
    price: 98000,
    badge: "New",
    brand: "Tonus",
    tags: ["Tonus", "New"],
    colors: ["White", "Beige"],
    image: "/dizart/products/p13.jpg",
    imageAlt: "Residential sound insulation kit",
  },
  {
    id: "office-liner",
    name: "Office Acoustic Liner",
    category: "Commercial Spaces",
    description: "Absorptive liner panels for open-plan and meeting rooms",
    price: 38000,
    brand: "AcousticPro",
    tags: ["Professional"],
    colors: ["Grey", "Black", "Beige"],
    image: "/dizart/products/p14.jpg",
    imageAlt: "Office acoustic liner panels",
  },
  {
    id: "home-envelope",
    name: "Home Envelope System",
    category: "Residential",
    description: "Whole-home insulation approach for private houses",
    price: 168000,
    badge: "Sale",
    compareAtPrice: 189000,
    brand: "IdealDom",
    tags: ["IdealDom", "Wholesale"],
    colors: ["Natural", "White"],
    image: "/dizart/products/p15.jpg",
    imageAlt: "Home envelope insulation system",
  },
  {
    id: "coming-soon-pack",
    name: "IdealDom · Coming Soon",
    category: "Coming Soon",
    description: "Full IdealDom range arriving soon across Armenia",
    price: 1,
    badge: "New",
    brand: "IdealDom",
    tags: ["IdealDom", "New"],
    colors: ["White"],
    image: "/dizart/products/p16.jpg",
    imageAlt: "IdealDom coming soon product range",
  },
];

export const featuredProducts: Product[] = [
  catalogProducts[0],
  catalogProducts[2],
  catalogProducts[3],
  catalogProducts[1],
  catalogProducts[4],
  catalogProducts[11],
  catalogProducts[12],
  catalogProducts[10],
];

export const blogPosts: BlogPost[] = [
  {
    id: "acoustic-layers",
    title: "How acoustic layers transform apartment comfort",
    date: "May 13, 2026",
    comments: 0,
    image: "/dizart/products/p01.jpg",
  },
  {
    id: "idealdom-arrival",
    title: "IdealDom systems are coming to Armenia",
    date: "May 13, 2026",
    comments: 0,
    image: "/dizart/banner-systems.jpg",
  },
  {
    id: "office-quiet",
    title: "Quiet offices: systems for commercial spaces",
    date: "May 10, 2026",
    comments: 2,
    image: "/dizart/banner-quality.jpg",
  },
];

export const philosophyText =
  "DizArt unites construction and design — modern sound insulation and building systems for calmer homes, offices, and commercial spaces across Armenia.";

export const quoteText =
  "Comfort starts not only with beautiful design, but with the right sound insulation and quality construction solutions.";

export function getProductById(id: string): Product | undefined {
  const product = catalogProducts.find((item) => item.id === id);
  if (!product) return undefined;

  return {
    ...product,
    images: product.images?.length ? product.images : [product.image],
    longDescription:
      product.longDescription ??
      `${product.description}. Selected for professional use in Armenia — retail and wholesale, with guidance on correct application.`,
    features: product.features?.length ? product.features : defaultFeatures,
    colors: product.colors?.length
      ? product.colors
      : ["White", "Grey", "Black"],
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
