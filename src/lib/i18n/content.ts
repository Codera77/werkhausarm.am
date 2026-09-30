import type { Product } from "@/lib/data";
import type { Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { getMessage } from "@/lib/i18n/utils";

const categoryKeyByLabel: Record<string, string> = {
  "Sound Insulation": "categories.livingRoom",
  Construction: "categories.bedroom",
  "Interior Systems": "categories.dining",
  "Design Solutions": "categories.office",
  Accessories: "categories.decor",
  "Coming Soon": "categories.sale",
  "Living Room": "categories.livingRoom",
  Bedroom: "categories.bedroom",
  Dining: "categories.dining",
  Office: "categories.office",
  Decor: "categories.decor",
  Sale: "categories.sale",
  "Modern Living": "filterCat.modernLiving",
  "Cozy Corner": "filterCat.cozyCorner",
  "Urban Nest": "filterCat.urbanNest",
  "Natural Form": "filterCat.naturalForm",
  "Nordic Home": "filterCat.nordicHome",
  "Pure Comfort": "filterCat.pureComfort",
  "Timeless Space": "filterCat.timelessSpace",
  "Elegant Room": "filterCat.elegantRoom",
  "Warm Habitat": "filterCat.warmHabitat",
  "Luxe Interior": "filterCat.luxeInterior",
  "Soft Shelter": "filterCat.softShelter",
  "Construction Systems": "filterCat.cozyCorner",
  "Interior Finishing": "filterCat.urbanNest",
  "Floor Acoustics": "filterCat.naturalForm",
  "Wall Acoustics": "filterCat.nordicHome",
  "Ceiling Acoustics": "filterCat.pureComfort",
  "Commercial Spaces": "filterCat.timelessSpace",
  Residential: "filterCat.elegantRoom",
};

const subcategoryKeyByLabel: Record<string, string> = {
  "Wall Systems": "sub.sofas",
  "Floor Systems": "sub.coffeeTables",
  "Ceiling Systems": "sub.accentChairs",
  Membranes: "sub.tvUnits",
  Profiles: "sub.beds",
  Boards: "sub.nightstands",
  Sealants: "sub.dressers",
  Kits: "sub.wardrobes",
  Partitions: "sub.diningTables",
  "Finishing Panels": "sub.diningChairs",
  Commercial: "sub.sideboards",
  Accessories: "sub.barStools",
  Apartments: "sub.desks",
  Offices: "sub.officeChairs",
  Homes: "sub.bookshelves",
  Showrooms: "sub.storage",
  IdealDom: "sub.clearance",
  Tonus: "sub.seasonalOffers",
  Sofas: "sub.sofas",
  "Coffee Tables": "sub.coffeeTables",
  "Accent Chairs": "sub.accentChairs",
  "TV Units": "sub.tvUnits",
  Beds: "sub.beds",
  Nightstands: "sub.nightstands",
  Dressers: "sub.dressers",
  Wardrobes: "sub.wardrobes",
  "Dining Tables": "sub.diningTables",
  "Dining Chairs": "sub.diningChairs",
  Sideboards: "sub.sideboards",
  "Bar Stools": "sub.barStools",
  Desks: "sub.desks",
  "Office Chairs": "sub.officeChairs",
  Bookshelves: "sub.bookshelves",
  Storage: "sub.storage",
  Lighting: "sub.lighting",
  Rugs: "sub.rugs",
  Mirrors: "sub.mirrors",
  Vases: "sub.vases",
  Clearance: "sub.clearance",
  "Seasonal Offers": "sub.seasonalOffers",
  Bundles: "sub.bundles",
};

const colorKeyByLabel: Record<string, string> = {
  White: "colors.white",
  Grey: "colors.green",
  Green: "colors.green",
  Black: "colors.black",
  Beige: "colors.beige",
  Natural: "colors.oak",
  Oak: "colors.oak",
};

export function translateLabel(
  locale: Locale,
  map: Record<string, string>,
  label: string
) {
  const key = map[label];
  if (!key) return label;
  return getMessage(dictionaries[locale], key);
}

export function tCategory(locale: Locale, label: string) {
  return translateLabel(locale, categoryKeyByLabel, label);
}

export function tSubcategory(locale: Locale, label: string) {
  return translateLabel(locale, subcategoryKeyByLabel, label);
}

export function tColor(locale: Locale, label: string) {
  return translateLabel(locale, colorKeyByLabel, label);
}

export function localizeProduct(product: Product, locale: Locale): Product {
  const base = `products.${product.id}`;
  const name = getMessage(dictionaries[locale], `${base}.name`);
  const description = getMessage(dictionaries[locale], `${base}.description`);
  const category = getMessage(dictionaries[locale], `${base}.category`);

  return {
    ...product,
    name: name === `${base}.name` ? product.name : name,
    description:
      description === `${base}.description` ? product.description : description,
    category: category === `${base}.category` ? product.category : category,
    imageAlt:
      name === `${base}.name` ? product.imageAlt : name,
  };
}
