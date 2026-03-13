export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  onSale?: boolean;
}

export const products: Product[] = [
  { id: 1, name: "Premium Dog Food - Chicken & Rice 3kg", brand: "SmartHeart", price: 2850, originalPrice: 3200, image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop", category: "Dogs", onSale: true },
  { id: 2, name: "Kitten Dry Food - Ocean Fish 1.5kg", brand: "Me-O", price: 1450, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop", category: "Cats" },
  { id: 3, name: "Adult Cat Food - Tuna Flavor 3kg", brand: "Classic Pets", price: 2100, originalPrice: 2500, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop", category: "Cats", onSale: true },
  { id: 4, name: "Puppy Dry Food - Beef & Vegetable 2kg", brand: "SmartHeart", price: 1950, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop", category: "Dogs" },
  { id: 5, name: "Tropical Fish Flakes 100g", brand: "Trillium", price: 650, originalPrice: 800, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=400&fit=crop", category: "Fish", onSale: true },
  { id: 6, name: "Bird Seed Mix Premium 500g", brand: "Canis", price: 890, image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=400&h=400&fit=crop", category: "Birds" },
  { id: 7, name: "Rabbit Pellets - Timothy Hay 1kg", brand: "Vetzyme", price: 1200, originalPrice: 1400, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop", category: "Rabbit", onSale: true },
  { id: 8, name: "Dog Dental Chew Sticks Pack", brand: "SmartHeart", price: 750, image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop", category: "Dogs" },
  { id: 9, name: "Cat Grooming Brush Set", brand: "Classic Pets", price: 1100, image: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&h=400&fit=crop", category: "Cats" },
  { id: 10, name: "Aquarium LED Light Bar 60cm", brand: "Trillium", price: 3500, originalPrice: 4200, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop", category: "Fish", onSale: true },
  { id: 11, name: "Premium Dog Shampoo 500ml", brand: "Vetzyme", price: 980, image: "https://www.dogslove.com/en/media/catalog/product/cache/86a2f7b8f8cf4ed32bd6695dfeb9ada3/d/s/dsc06241-960x960.webp", category: "Dogs" },
  { id: 12, name: "Cat Litter - Clumping Clay 5L", brand: "Me-O", price: 1650, originalPrice: 1900, image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=400&h=400&fit=crop", category: "Cats", onSale: true },
];
