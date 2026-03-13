import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-border/50"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-secondary">
        {product.onSale && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-sale text-sale-foreground text-xs font-bold rounded-lg">
            -{discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-3 right-3 p-2.5 bg-card rounded-xl shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ShoppingCart className="w-4 h-4 text-primary" />
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <p className="text-xs font-medium text-primary uppercase tracking-wide">{product.brand}</p>
        <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl mt-2 transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
