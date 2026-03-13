import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FlashSale from "@/components/FlashSale";
import CategorySection from "@/components/CategorySection";
import BreedSection from "@/components/BreedSection";
import VideoSection from "@/components/VideoSection";
import BrandSection from "@/components/BrandSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const catCategories = [
  { name: "Cat Food", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=500&fit=crop" },
  { name: "Cat Litter", image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=500&fit=crop" },
  { name: "Cat Treats", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=500&fit=crop" },
  { name: "Cat Health & Hygiene", image: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=400&h=500&fit=crop" },
  { name: "Cat Accessories", image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=400&h=500&fit=crop" },
];

const dogCategories = [
  { name: "Dog Food", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=500&fit=crop" },
  { name: "Dog Treats", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=500&fit=crop" },
  { name: "Dog Walking Essentials", image: "https://images.unsplash.com/photo-1558929996-da64ba858215?w=400&h=500&fit=crop" },
  { name: "Dog Health & Hygiene", image: "https://images.squarespace-cdn.com/content/v1/61042cbcc245122bc58574b7/a69a3abc-7664-4d9e-86ed-797a2df3a9da/Untitled+%286%29.png" },
  { name: "Dog Accessories", image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=500&fit=crop" },
];

const Home = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Scroll progress: 0 when overlay top enters viewport bottom, 1 when overlay top reaches viewport top
  const { scrollYProgress } = useScroll({
    target: overlayRef,
    offset: ["start end", "start start"],
  });

  // Hero fades and lifts slightly as overlay slides up (ease-in-out feel)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 0.92, 0.82]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -24]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Sticky hero: stays in viewport until overlay slides over it */}
      <div className="relative">
        <div className="sticky top-0 z-0 min-h-screen min-h-[100dvh]">
          <Hero scrollOpacity={heroOpacity} scrollY={heroY} />
        </div>
        {/* Overlay content: slides up over hero with higher z-index and solid background */}
        <motion.div
          ref={overlayRef}
          className="overlay-content relative z-10 bg-background rounded-t-3xl"
          initial={false}
        >
          <BreedSection />
          <FlashSale />
          <Features />
          <CategorySection title="Shop for Cats" categories={catCategories} />
          <CategorySection title="Shop for Dogs" categories={dogCategories} />
          {/* <VideoSection /> */}
          <BrandSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
