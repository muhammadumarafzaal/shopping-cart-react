import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { withCart } from '../hocs/withCart';
import './CartItem.css';

const CartItem = ({ item, cart }) => {
  const handleIncrement = () => {
    cart.updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      cart.updateQuantity(item.id, item.quantity - 1);
    } else {
      cart.removeFromCart(item.id);
    }
  };

  const handleRemove = () => {
    cart.removeFromCart(item.id);
  };

  return (
    <motion.div
      className="cart-item"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      layout
    >
      <div className="cart-item-info">
        <div className={`item-color-indicator ${item.category}`} />
        <div className="item-details">
          <h4 className="item-name">{item.name}</h4>
          <p className="item-category">{item.category}</p>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <motion.button
            className="quantity-btn"
            onClick={handleDecrement}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
          </motion.button>
          
          <span className="quantity-value">{item.quantity}</span>
          
          <motion.button
            className="quantity-btn"
            onClick={handleIncrement}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus size={14} />
          </motion.button>
        </div>

        <div className="item-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{(item.price * item.quantity).toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default withCart(CartItem);
