import { motion } from "framer-motion";
import { breeds } from "@/data/breeds";

const BreedSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-foreground mb-8"
        >
          Shop by Breed
        </motion.h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6">
          {breeds.map((breed, i) => (
            <motion.a
              key={breed.id}
              href="#"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-3 border-border group-hover:border-primary transition-all duration-300 shadow-card group-hover:shadow-card-hover" style={{ borderWidth: 3 }}>
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-full group-hover:ring-4 group-hover:ring-primary/20 transition-all duration-300" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-foreground text-center">
                {breed.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedSection;
