export interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  category: string;
  variants: ProductVariant[];
  tags: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  available: boolean;
  options: Record<string, string>;
}

export interface CartItem {
  product: Product;
  variantId: string;
  variantTitle: string;
  price: number;
  quantity: number;
}

const IMG = (seed: string) =>
  `https://images.unsplash.com/${seed}?w=800&h=1000&fit=crop&q=80`;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Royal Agbada Set — Ivory Gold",
    description: "Hand-embroidered ivory agbada with gold threading. Comes with matching trousers and cap. Perfect for weddings and ceremonies.",
    handle: "royal-agbada-ivory-gold",
    price: 189.99,
    currency: "USD",
    images: [IMG("photo-1590735213920-68192a487bc2"), IMG("photo-1594938298603-c8148c4dae35")],
    category: "men",
    tags: ["agbada", "traditional", "wedding"],
    variants: [
      { id: "1-m", title: "Medium", price: 189.99, available: true, options: { Size: "M" } },
      { id: "1-l", title: "Large", price: 189.99, available: true, options: { Size: "L" } },
      { id: "1-xl", title: "XL", price: 199.99, available: true, options: { Size: "XL" } },
    ],
  },
  {
    id: "2",
    title: "Senator Suit — Charcoal",
    description: "Sleek tailored senator suit in charcoal cashmere-blend fabric. Modern cut with traditional collar detailing.",
    handle: "senator-suit-charcoal",
    price: 149.99,
    currency: "USD",
    images: [IMG("photo-1507003211169-0a1dd7228f2d")],
    category: "men",
    tags: ["senator", "formal", "men"],
    variants: [
      { id: "2-m", title: "Medium", price: 149.99, available: true, options: { Size: "M" } },
      { id: "2-l", title: "Large", price: 149.99, available: true, options: { Size: "L" } },
      { id: "2-xl", title: "XL", price: 149.99, available: false, options: { Size: "XL" } },
    ],
  },
  {
    id: "3",
    title: "Ankara Maxi Dress — Sunset Print",
    description: "Flowing maxi dress in bold Ankara sunset print. Flattering wrap silhouette with statement puff sleeves.",
    handle: "ankara-maxi-sunset",
    price: 89.99,
    currency: "USD",
    images: [IMG("photo-1590735213408-9a74e194f041")],
    category: "women",
    tags: ["ankara", "dress", "women"],
    variants: [
      { id: "3-s", title: "Small", price: 89.99, available: true, options: { Size: "S" } },
      { id: "3-m", title: "Medium", price: 89.99, available: true, options: { Size: "M" } },
      { id: "3-l", title: "Large", price: 89.99, available: true, options: { Size: "L" } },
    ],
  },
  {
    id: "4",
    title: "Luxury Kaftan — Emerald Silk",
    description: "Floor-length emerald silk kaftan with intricate beadwork along the neckline. Effortless elegance for any occasion.",
    handle: "kaftan-emerald-silk",
    price: 129.99,
    currency: "USD",
    images: [IMG("photo-1596755094514-f87e34085b2c")],
    category: "women",
    tags: ["kaftan", "silk", "women", "luxury"],
    variants: [
      { id: "4-s", title: "Small", price: 129.99, available: true, options: { Size: "S" } },
      { id: "4-m", title: "Medium", price: 129.99, available: true, options: { Size: "M" } },
    ],
  },
  {
    id: "5",
    title: "Premium Aso Oke Fabric — 5 Yards",
    description: "Handwoven Aso Oke fabric in royal blue and gold. Perfect for owambe celebrations. 5-yard cut.",
    handle: "aso-oke-royal-blue",
    price: 75.00,
    currency: "USD",
    images: [IMG("photo-1558171813-4c088753af8f")],
    category: "fabrics",
    tags: ["aso oke", "fabric", "handwoven"],
    variants: [
      { id: "5-5y", title: "5 Yards", price: 75.00, available: true, options: { Length: "5 Yards" } },
      { id: "5-10y", title: "10 Yards", price: 140.00, available: true, options: { Length: "10 Yards" } },
    ],
  },
  {
    id: "6",
    title: "Guinea Brocade — Champagne",
    description: "Premium imported Guinea brocade in champagne tone. Soft, breathable, and perfect for formal attire.",
    handle: "guinea-brocade-champagne",
    price: 55.00,
    currency: "USD",
    images: [IMG("photo-1586075010923-2dd4570fb338")],
    category: "fabrics",
    tags: ["guinea brocade", "fabric", "yard"],
    variants: [
      { id: "6-5y", title: "5 Yards", price: 55.00, available: true, options: { Length: "5 Yards" } },
    ],
  },
  {
    id: "7",
    title: "Embroidered Kufi Cap — White & Gold",
    description: "Handcrafted embroidered kufi cap with gold accents. Complements any traditional outfit.",
    handle: "kufi-cap-white-gold",
    price: 24.99,
    currency: "USD",
    images: [IMG("photo-1521369909029-2afed882baee")],
    category: "accessories",
    tags: ["kufi", "cap", "accessories"],
    variants: [
      { id: "7-os", title: "One Size", price: 24.99, available: true, options: { Size: "One Size" } },
    ],
  },
  {
    id: "8",
    title: "Urban Runner Sneakers — Black/Gold",
    description: "Fabric & Style original streetwear sneakers. African-print accents on premium leather. Comfortable all-day wear.",
    handle: "urban-runner-black-gold",
    price: 89.99,
    currency: "USD",
    images: [IMG("photo-1542291026-7eec264c27ff")],
    category: "accessories",
    tags: ["sneakers", "footwear", "streetwear"],
    variants: [
      { id: "8-9", title: "US 9", price: 89.99, available: true, options: { Size: "US 9" } },
      { id: "8-10", title: "US 10", price: 89.99, available: true, options: { Size: "US 10" } },
      { id: "8-11", title: "US 11", price: 89.99, available: true, options: { Size: "US 11" } },
    ],
  },
  {
    id: "9",
    title: "Dashiki Shirt — Ocean Blue",
    description: "Classic dashiki shirt in vibrant ocean blue with bold embroidery. Relaxed fit for everyday style.",
    handle: "dashiki-ocean-blue",
    price: 45.99,
    currency: "USD",
    images: [IMG("photo-1503341504253-dff4f94032a1")],
    category: "men",
    tags: ["dashiki", "men", "casual"],
    variants: [
      { id: "9-m", title: "Medium", price: 45.99, available: true, options: { Size: "M" } },
      { id: "9-l", title: "Large", price: 45.99, available: true, options: { Size: "L" } },
      { id: "9-xl", title: "XL", price: 45.99, available: true, options: { Size: "XL" } },
    ],
  },
  {
    id: "10",
    title: "Hijab Set — Soft Blush",
    description: "Premium chiffon hijab set in soft blush. Includes matching inner cap. Lightweight and breathable.",
    handle: "hijab-soft-blush",
    price: 34.99,
    currency: "USD",
    images: [IMG("photo-1583743814966-8936f5b7be1a")],
    category: "women",
    tags: ["hijab", "women", "modest"],
    variants: [
      { id: "10-os", title: "One Size", price: 34.99, available: true, options: { Size: "One Size" } },
    ],
  },
  {
    id: "11",
    title: "Ankara Wax Print — 6 Yards",
    description: "Authentic Dutch-quality Ankara wax print in geometric patterns. Vibrant colors that last wash after wash.",
    handle: "ankara-wax-geometric",
    price: 35.00,
    currency: "USD",
    images: [IMG("photo-1594938298603-c8148c4dae35")],
    category: "fabrics",
    tags: ["ankara wax", "fabric", "yard"],
    variants: [
      { id: "11-6y", title: "6 Yards", price: 35.00, available: true, options: { Length: "6 Yards" } },
    ],
  },
  {
    id: "12",
    title: "Luxury Streetwear Hoodie — Earth Tone",
    description: "Fabric & Style original oversized hoodie in earth tones. Heavy cotton with Ankara-print pocket detail.",
    handle: "streetwear-hoodie-earth",
    price: 69.99,
    currency: "USD",
    images: [IMG("photo-1556821840-3a63f95609a7")],
    category: "men",
    tags: ["streetwear", "hoodie", "men", "women"],
    variants: [
      { id: "12-m", title: "Medium", price: 69.99, available: true, options: { Size: "M" } },
      { id: "12-l", title: "Large", price: 69.99, available: true, options: { Size: "L" } },
      { id: "12-xl", title: "XL", price: 69.99, available: true, options: { Size: "XL" } },
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function searchProducts(query: string, category: string): Product[] {
  let result = category ? getProductsByCategory(category) : PRODUCTS;
  if (query.trim()) {
    const q = query.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    );
  }
  return result;
}
