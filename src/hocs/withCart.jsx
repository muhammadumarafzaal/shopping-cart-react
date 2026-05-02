import { useCartContext } from '../context/CartContext';

/**
 * Higher Order Component that injects cart functionality into wrapped components
 * Provides: cartItems, addToCart, removeFromCart, updateQuantity, clearCart, 
 *           getCartTotal, getCartCount, isCartOpen, toggleCart
 */
export const withCart = (Component) => {
  return (props) => {
    const cartContext = useCartContext();
    
    return <Component {...props} cart={cartContext} />;
  };
};

// Alternative: Function that returns props directly
export const withCartProps = (Component) => {
  return (props) => {
    const {
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      isCartOpen,
      toggleCart,
      setIsCartOpen,
    } = useCartContext();
    
    return (
      <Component
        {...props}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        getCartTotal={getCartTotal}
        getCartCount={getCartCount}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        setIsCartOpen={setIsCartOpen}
      />
    );
  };
};
