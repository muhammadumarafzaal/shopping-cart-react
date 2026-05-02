import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';
import { withCart } from '../hocs/withCart';
import './Navbar.css';

const Navbar = ({ cart }) => {
  const cartCount = cart.getCartCount();

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-icon">A</div>
          <div className="brand-text">
            <span className="brand-name">ATELIER</span>
            <span className="brand-tagline">Curated Luxury</span>
          </div>
        </div>

        <div className="navbar-actions">
          <motion.button
            className="cart-button"
            onClick={cart.toggleCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Decorative border */}
      <div className="navbar-border" />
    </motion.nav>
  );
};

export default withCart(Navbar);
