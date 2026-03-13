import { motion } from "framer-motion";
import { brands } from "@/data/brands";

const BrandSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-foreground mb-8 text-center"
        >
          Our Trusted Brands
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3 p-4 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all cursor-pointer"
            >
              <div className="w-full aspect-[3/2] rounded-xl overflow-hidden transition-all duration-500">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
