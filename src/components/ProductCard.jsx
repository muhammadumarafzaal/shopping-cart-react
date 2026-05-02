import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Product3D } from './Product3D';
import { withCart } from '../hocs/withCart';
import { ShoppingBag, Plus } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, cart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    cart.addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
      cart.setIsCartOpen(true);
    }, 600);
  };

  return (
    <motion.div
      className="product-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="product-canvas-container">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Product3D product={product} isHovered={isHovered} />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={isHovered}
            autoRotateSpeed={2}
          />
        </Canvas>
        
        {isAdding && (
          <motion.div
            className="adding-indicator"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <ShoppingBag size={24} />
          </motion.div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="currency">$</span>
            <span className="amount">{product.price.toLocaleString()}</span>
          </div>
          
          <motion.button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAdding}
          >
            <Plus size={16} />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default withCart(ProductCard);
