import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingCart, Menu, X, ChevronDown, Trash2 } from "lucide-react";

// Mock cart items for preview (replace with real cart state/context later)
const MOCK_CART_ITEMS = [
  { id: "1", name: "Premium Dog Food 2kg", price: 2490, qty: 1, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop" },
  { id: "2", name: "Cat Treats Salmon", price: 890, qty: 2, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=80&h=80&fit=crop" },
  { id: "3", name: "Pet Grooming Brush", price: 1250, qty: 1, image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=80&h=80&fit=crop" },
];

const menuItems = [
  {
    label: "Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
    submenu: ["Cat Food", "Cat Litter", "Cat Treats", "Cat Accessories", "Cat Health"],
  },
  {
    label: "Dogs",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200&fit=crop",
    submenu: ["Dog Food", "Dog Treats", "Dog Walking", "Dog Accessories", "Dog Health"],
  },
  {
    label: "Fish",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=300&h=200&fit=crop",
    submenu: ["Fish Food", "Aquariums", "Filters", "Decorations"],
  },
  {
    label: "Birds",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=300&h=200&fit=crop",
    submenu: ["Bird Food", "Cages", "Bird Toys", "Bird Health"],
  },
  {
    label: "Rabbit",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=300&h=200&fit=crop",
    submenu: ["Rabbit Food", "Hay", "Rabbit Accessories"],
  },
  {
    label: "Hamster",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=300&h=200&fit=crop",
    submenu: ["Hamster Food", "Hamster Cages", "Hamster Toys"],
  },
  {
    label: "Guinea Pig",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=300&h=200&fit=crop",
    submenu: ["Guinea Pig Food", "Hay", "Accessories"],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems] = useState(MOCK_CART_ITEMS);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  };

  const activeItem = menuItems.find((m) => m.label === activeMenu);

  useEffect(() => {
    if (activeItem) {
      setActiveSubmenu(activeItem.submenu[0] ?? null);
    } else {
      setActiveSubmenu(null);
    }
  }, [activeItem]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-card-hover" : "bg-card shadow-card"
      }`}
    >
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-1.5 text-center">
          <p className="text-sm font-medium text-primary-foreground">
            🐾 Free delivery on orders over Rs. 5,000 | Island-wide delivery 🐾
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-heading font-bold text-foreground">
              Pet<span className="text-primary">Shop</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === item.label}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.1 }} className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <User className="w-5 h-5 text-foreground" />
            </motion.button>
            <motion.button
              onClick={() => setCartOpen(true)}
              whileHover={{ scale: 1.1 }}
              className="relative p-2 rounded-xl hover:bg-secondary transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 w-full bg-card/95 backdrop-blur-xl shadow-elevated border-t border-border z-50"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1">
                  <AnimatePresence mode="wait">
                    {activeItem && (
                      <motion.div
                        key={activeSubmenu || activeItem.label}
                        initial={{ opacity: 0, x: -12, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                        className="relative overflow-hidden rounded-2xl bg-muted/40 group"
                      >
                        <motion.img
                          src={activeItem.image}
                          alt={`${activeItem.label} - ${(activeSubmenu || activeItem.submenu[0] || activeItem.label)}`}
                          loading="lazy"
                          className="w-full h-48 object-cover origin-center"
                          initial={false}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent pointer-events-none" />
                        <div className="absolute inset-x-4 bottom-4 space-y-1.5 overflow-hidden">
                          <motion.p
                            key={`cat-${activeItem.label}`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06, duration: 0.2, ease: "easeOut" }}
                            className="text-xs font-semibold uppercase tracking-wide text-primary/90"
                          >
                            {activeItem.label}
                          </motion.p>
                          <motion.h3
                            key={`sub-${activeSubmenu || activeItem.submenu[0]}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08, duration: 0.22, ease: "easeOut" }}
                            className="text-sm font-semibold text-foreground"
                          >
                            {activeSubmenu || activeItem.submenu[0]}
                          </motion.h3>
                          <motion.p
                            key={`desc-${activeSubmenu || activeItem.submenu[0]}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.24, ease: "easeOut" }}
                            className="text-xs text-muted-foreground"
                          >
                            Explore curated {((activeSubmenu || activeItem.submenu[0]) || "").toLowerCase()} essentials
                            for happy {activeItem.label.toLowerCase()}s.
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  {activeItem.submenu.map((sub, i) => (
                    <motion.a
                      key={sub}
                      href="#"
                      onMouseEnter={() => setActiveSubmenu(sub)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
                      whileHover={{ x: 6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300 ease-out ${
                        activeSubmenu === sub
                          ? "text-foreground shadow-md shadow-black/5"
                          : "text-foreground hover:bg-accent/80"
                      }`}
                    >
                      {activeSubmenu === sub && (
                        <motion.span
                          layoutId="dropdown-active"
                          className="absolute inset-0 rounded-xl bg-accent border border-border/50"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          style={{ zIndex: -1 }}
                        />
                      )}
                      <span className="relative z-0">{sub}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-2">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart preview side panel */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
              onClick={() => setCartOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-border shadow-elevated z-[70] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Cart preview"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <h2 className="text-lg font-heading font-semibold text-foreground">Your Cart</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingCart className="w-14 h-14 text-muted-foreground/50 mb-3" />
                    <p className="text-muted-foreground font-medium">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground mt-1">Add some paw-some products!</p>
                    <a
                      href="/"
                      onClick={() => setCartOpen(false)}
                      className="mt-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Continue shopping
                    </a>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50"
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-16 h-16 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground line-clamp-2">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Qty: {item.qty}</p>
                          <p className="text-sm font-semibold text-primary mt-1">
                            Rs. {(item.price * item.qty).toLocaleString()}
                          </p>
                        </div>
                        <button
                          className="p-1.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors self-start"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {cartItems.length > 0 && (
                <div className="border-t border-border px-4 py-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">Rs. {cartSubtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="/cart"
                      onClick={() => setCartOpen(false)}
                      className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors text-center"
                    >
                      View cart
                    </a>
                    <a
                      href="/checkout"
                      onClick={() => setCartOpen(false)}
                      className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity text-center"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
