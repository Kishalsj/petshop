import { motion } from "framer-motion";
import { HeartHandshake, Truck, Users, ShieldCheck } from "lucide-react";

const features = [
  { icon: HeartHandshake, title: "Friendly Pet Support", desc: "Expert advice for all your pet needs" },
  { icon: Truck, title: "Fast & Free Delivery", desc: "Free island-wide delivery over Rs. 5,000" },
  { icon: Users, title: "Refer a Friend", desc: "Earn rewards when friends shop with us" },
  { icon: ShieldCheck, title: "Secure Payments", desc: "100% secure checkout experience" },
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group text-center p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all border border-border/50"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4 group-hover:animate-bounce-subtle"
              >
                <feat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-heading font-semibold text-foreground mb-1 text-sm md:text-base">{feat.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
