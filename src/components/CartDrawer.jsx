import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { withCart } from '../hocs/withCart';
import CartItem from './CartItem';
import './CartDrawer.css';

const CartDrawer = ({ cart }) => {
  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      }
    },
    exit: { 
      x: '100%',
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <AnimatePresence>
      {cart.isCartOpen && (
        <>
          <motion.div
            className="cart-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={cart.toggleCart}
          />
          
          <motion.div
            className="cart-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="cart-header">
              <div className="cart-title-section">
                <ShoppingBag size={24} />
                <div>
                  <h2 className="cart-title">Your Cart</h2>
                  <p className="cart-subtitle">
                    {cart.getCartCount()} {cart.getCartCount() === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              
              <div className="cart-header-actions">
                {cart.cartItems.length > 0 && (
                  <motion.button
                    className="clear-cart-btn"
                    onClick={cart.clearCart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 size={16} />
                  </motion.button>
                )}
                
                <motion.button
                  className="close-btn"
                  onClick={cart.toggleCart}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            <div className="cart-content">
              {cart.cartItems.length === 0 ? (
                <motion.div
                  className="empty-cart"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="empty-cart-icon">
                    <ShoppingBag size={48} />
                  </div>
                  <h3 className="empty-cart-title">Your cart is empty</h3>
                  <p className="empty-cart-text">
                    Add some items to get started
                  </p>
                </motion.div>
              ) : (
                <div className="cart-items">
                  <AnimatePresence>
                    {cart.cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cart.cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span className="total-label">Total</span>
                  <div className="total-amount">
                    <span className="total-currency">$</span>
                    <span className="total-value">
                      {cart.getCartTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <motion.button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default withCart(CartDrawer);
