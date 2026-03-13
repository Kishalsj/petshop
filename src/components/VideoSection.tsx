import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-bold text-foreground mb-8"
        >
          How To Order
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/5"
        >
          <img
            src="https://images.unsplash.com/photo-1450778869180-e24010c4f8d8?w=800&h=450&fit=crop"
            alt="How to order"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-elevated animate-pulse-glow"
            >
              <Play className="w-8 h-8 ml-1" />
            </motion.button>
          </div>
        </motion.div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#flash-sale"
          className="inline-block mt-8 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
        >
          Shop All Products
        </motion.a>
      </div>
    </section>
  );
};

export default VideoSection;
