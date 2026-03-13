import { motion, type MotionValue } from "framer-motion";
import heroBanner from "@/assets/Elements Only - Web/Pet-Banner-Design-6---Image-only.png";
import pawImage from "@/assets/Elements Only - Web/Paw feeet - Single image.png";
import dogFoodImage from "@/assets/Elements Only - Web/pngtree-dog-food-png-image_2404540.png";
import peekingCatImage from "@/assets/Elements Only - Web/pngtree-funny-curious-peeking-orange-cat-png-image_11912032.png";

interface HeroProps {
  /** Optional scroll-driven opacity (0–1). When provided, hero fades as overlay slides up. */
  scrollOpacity?: MotionValue<number>;
  /** Optional scroll-driven translateY in px. When provided, hero moves up slightly as overlay slides. */
  scrollY?: MotionValue<number>;
}

const Hero = ({ scrollOpacity, scrollY }: HeroProps) => {
  return (
    <motion.section
      className="hero-section relative overflow-hidden min-h-screen w-full flex flex-col justify-center"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--background)) 45%, hsl(var(--secondary)) 100%)",
        opacity: scrollOpacity ?? 1,
        y: scrollY ?? 0,
      }}
    >
      {/* Top-left corner: dog food image cropped 20% from top & left for 3D peek effect */}
      <div className="hidden md:block absolute top-0 left-0 w-[28vw] max-w-[200px] h-[28vw] max-h-[200px] overflow-hidden z-0 pointer-events-none">
        <motion.img
          src={dogFoodImage}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute w-[125%] min-w-[125%] h-[125%] min-h-[125%] object-cover drop-shadow-lg"
          style={{ left: "-25%", top: "-25%" }}
        />
      </div>

      {/* Bottom-right corner: peeking cat at same bottom line as hero banner */}
      <div className="hidden md:flex absolute bottom-16 lg:bottom-20 right-0 w-[36vw] max-w-[280px] h-[36vw] max-h-[280px] z-0 pointer-events-none items-end justify-end">
        <motion.img
          src={peekingCatImage}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="w-full h-full object-contain object-right-bottom drop-shadow-lg"
        />
      </div>

      <div className="w-full max-w-full mx-auto pl-0 pr-4 lg:pr-8 py-12 lg:py-20 flex flex-col relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-stretch flex-1 min-h-0 lg:min-h-[calc(100vh-8rem)]">
          {/* Image - flush left corner, stretches to hero bottom */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            className="relative flex justify-start items-end order-2 lg:order-1 h-full min-h-[280px] lg:min-h-0"
          >
            <div className="relative w-full max-w-sm lg:max-w-lg xl:max-w-xl h-full min-h-[280px] lg:min-h-0">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-110" />
              <img
                src={heroBanner}
                alt="Premium pet supplies banner"
                className="relative z-10 w-full h-full min-h-[280px] lg:min-h-0 object-contain object-left-bottom drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text - full width remainder, padding only on this side */}
          <div className="space-y-6 order-1 lg:order-2 min-w-0 pl-4 lg:pl-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold"
            >
              🐾 #1 Pet Store in Sri Lanka
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-foreground"
            >
              Premium Pet Supplies for Your{" "}
              <span className="text-gradient-primary">Furry Friends</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Food, grooming, treats and accessories delivered across Sri Lanka.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#flash-sale"
                className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-2xl shadow-elevated transition-shadow hover:shadow-card-hover"
              >
                Shop Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#categories"
                className="px-8 py-3.5 bg-card text-foreground font-semibold rounded-2xl shadow-card border border-border transition-all hover:shadow-card-hover"
              >
                Browse Categories
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative paw prints on background - smooth pop-in, staggered (hidden on very small screens) */}
      <div className="hidden md:block">
        {[
          { pos: "top-16 right-12", size: "w-16 h-16 lg:w-20 lg:h-20", op: 0.14, rot: "", delay: 0.15 },
          { pos: "top-20 right-1/3", size: "w-24 h-24 lg:w-32 lg:h-32", op: 0.08, rot: "rotate-12", delay: 0.22 },
          { pos: "top-1/4 right-20", size: "w-20 h-20 lg:w-28 lg:h-28", op: 0.1, rot: "-rotate-[8deg]", delay: 0.28 },
          { pos: "top-1/3 right-8", size: "w-28 h-28 lg:w-36 lg:h-36", op: 0.06, rot: "rotate-[-15deg]", delay: 0.35 },
          { pos: "top-2/5 right-1/4", size: "w-14 h-14 lg:w-20 lg:h-20", op: 0.12, rot: "rotate-6", delay: 0.4 },
          { pos: "top-1/2 right-16", size: "w-32 h-32 lg:w-40 lg:h-40", op: 0.07, rot: "rotate-3", delay: 0.46 },
          { pos: "top-[55%] right-1/3", size: "w-[4.5rem] h-[4.5rem] lg:w-24 lg:h-24", op: 0.09, rot: "-rotate-12", delay: 0.52 },
          { pos: "bottom-40 right-12", size: "w-[5.5rem] h-[5.5rem] lg:w-28 lg:h-28", op: 0.1, rot: "rotate-[10deg]", delay: 0.58 },
          { pos: "bottom-28 right-1/4", size: "w-36 h-36 lg:w-44 lg:h-44", op: 0.08, rot: "-rotate-6", delay: 0.64 },
          { pos: "bottom-20 right-20", size: "w-20 h-20 lg:w-24 lg:h-24", op: 0.11, rot: "rotate-15", delay: 0.7 },
          { pos: "top-32 left-1/4", size: "w-20 h-20 lg:w-24 lg:h-24", op: 0.06, rot: "-rotate-[5deg]", delay: 0.2 },
          { pos: "top-1/2 left-1/5", size: "w-24 h-24 lg:w-32 lg:h-32", op: 0.05, rot: "rotate-20", delay: 0.38 },
          { pos: "bottom-48 left-1/3", size: "w-14 h-14 lg:w-20 lg:h-20", op: 0.07, rot: "rotate-[-10deg]", delay: 0.5 },
          { pos: "bottom-24 left-1/4", size: "w-28 h-28 lg:w-36 lg:h-36", op: 0.06, rot: "rotate-8", delay: 0.62 },
          { pos: "top-40 left-1/2", size: "w-16 h-16 lg:w-24 lg:h-24", op: 0.05, rot: "-rotate-18", delay: 0.3 },
          { pos: "bottom-36 left-1/2", size: "w-20 h-20 lg:w-26 lg:h-26", op: 0.06, rot: "rotate-[12deg]", delay: 0.55 },
        ].map((paw, i) => (
          <motion.img
            key={i}
            src={pawImage}
            alt=""
            aria-hidden
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: paw.op, scale: 1 }}
            transition={{
              delay: paw.delay,
              duration: 0.55,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className={`absolute ${paw.pos} ${paw.size} ${paw.rot} object-contain pointer-events-none select-none`}
          />
        ))}
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
    </motion.section>
  );
};

export default Hero;
