import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Flame } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const tabs = ["Dogs", "Cats", "Fish", "Birds", "Rabbit"];

const FlashSale = () => {
  const [activeTab, setActiveTab] = useState("Dogs");
  const filtered = products.filter((p) => p.category === activeTab);

  return (
    <section id="flash-sale" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Flame className="w-7 h-7 text-sale" />
          <h2 className="text-3xl font-heading font-bold text-foreground">Flash Sale</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-secondary text-foreground hover:bg-accent"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filtered.length > 0
            ? filtered.map((product, i) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} index={i} />
                </SwiperSlide>
              ))
            : products.slice(0, 4).map((product, i) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} index={i} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FlashSale;
