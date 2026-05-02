# 3D Animated Shopping Cart with HOCs

A premium, professional shopping cart experience featuring 3D product visualization and Higher Order Components (HOCs) for logic reuse.

## Features

### Core Foundation
- **CartContext**: Centralized state management for cart operations
- **Premium Dark Theme**: Sophisticated grey/black/gold color palette with elegant typography
- **Responsive Design**: Fully responsive across all device sizes

### Higher Order Components (HOCs)
- **withCart**: Injects cart functionality into any component
- **withCartProps**: Alternative HOC that spreads cart props directly
- **withAnimations**: Adds Framer Motion animations to components
- **withStaggerAnimation**: Creates staggered list animations
- **Animation Presets**: Pre-configured animation patterns (fadeInUp, slideIn, card, button, etc.)

### 3D Components
- **Product3D**: Interactive 3D product models with different geometric shapes
- **Dynamic Colors**: Products change color based on category (luxury, tech, fashion, home)
- **Hover Effects**: Floating animations and auto-rotation on hover
- **Shapes**: Sphere, Torus, Cone, RoundedBox, and Box geometries

### UI Components
- **Navbar**: Sticky navigation with animated cart badge
- **ProductList**: Responsive grid layout with staggered animations
- **ProductCard**: Card with embedded 3D canvas, product info, and add-to-cart
- **CartDrawer**: Slide-in drawer with spring animations
- **CartItem**: Individual cart items with quantity controls

## Technology Stack

- **React 18**: Modern React with hooks
- **Three.js & React Three Fiber**: 3D graphics rendering
- **@react-three/drei**: Helpful Three.js abstractions
- **Framer Motion**: Smooth animations and transitions
- **Vite**: Fast build tool and dev server
- **Lucide React**: Modern icon library

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Navigation with cart indicator
│   ├── Navbar.css
│   ├── ProductList.jsx            # Grid of products
│   ├── ProductList.css
│   ├── ProductCard.jsx            # Product card with 3D canvas
│   ├── ProductCard.css
│   ├── Product3D.jsx              # 3D product model
│   ├── CartDrawer.jsx             # Slide-in cart
│   ├── CartDrawer.css
│   ├── CartItem.jsx               # Individual cart item
│   └── CartItem.css
├── context/
│   └── CartContext.jsx            # Cart state management
├── hocs/
│   ├── withCart.jsx               # Cart HOC
│   └── withAnimations.jsx         # Animation HOCs
├── data/
│   └── products.js                # Sample product data
├── App.jsx                        # Main application
├── App.css
├── main.jsx                       # Entry point
└── index.css                      # Global styles
```

## HOC Usage Examples

### Using withCart HOC

```jsx
import { withCart } from '../hocs/withCart';

const MyComponent = ({ cart }) => {
  return (
    <button onClick={() => cart.addToCart(product)}>
      Add to Cart ({cart.getCartCount()})
    </button>
  );
};

export default withCart(MyComponent);
```

### Using withAnimations HOC

```jsx
import { withAnimations, animationPresets } from '../hocs/withAnimations';

const MyCard = ({ data }) => {
  return <div className="card">{data.title}</div>;
};

// With default animations
export default withAnimations(MyCard);

// With custom config
export default withAnimations(MyCard, {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  whileHover: { scale: 1.05 },
});

// With preset
export default withAnimations(MyCard, animationPresets.fadeInScale);
```

### Using withStaggerAnimation

```jsx
import { withStaggerAnimation } from '../hocs/withAnimations';

const MyList = ({ items }) => {
  return (
    <div>
      {items.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
};

// Items will animate in with 0.1s delay between each
export default withStaggerAnimation(MyList, 0.1);
```

## Verification Plan

### Manual Testing Checklist

#### 1. Initial Load
- [ ] Page loads without errors
- [ ] 3D models render smoothly
- [ ] Hero section animates in with fade-up effect
- [ ] Product cards appear with staggered animation
- [ ] Premium dark theme displays correctly

#### 2. 3D Product Interaction
- [ ] Each product shows correct 3D shape based on type
- [ ] Products rotate continuously when idle
- [ ] Hovering triggers float animation
- [ ] Auto-rotation speeds up on hover
- [ ] Wireframe overlay appears on hover
- [ ] Colors match product categories (gold=luxury, blue=tech, pink=fashion, green=home)

#### 3. Add to Cart
- [ ] Click "Add to Cart" button
- [ ] Cart badge appears in navbar with correct count
- [ ] Adding animation plays (shopping bag icon)
- [ ] Cart drawer opens automatically after adding
- [ ] Item appears in cart with correct details
- [ ] Adding same item increments quantity

#### 4. Cart Drawer
- [ ] Drawer slides in from right with spring animation
- [ ] Overlay appears behind drawer
- [ ] Clicking overlay closes drawer
- [ ] Cart items display with correct formatting
- [ ] Category color indicators show correctly
- [ ] Total calculates correctly

#### 5. Quantity Controls
- [ ] Plus button increments quantity
- [ ] Minus button decrements quantity
- [ ] When quantity is 1, minus button shows trash icon
- [ ] Clicking trash removes item from cart
- [ ] Price updates correctly with quantity
- [ ] Total updates when quantities change

#### 6. Cart Badge
- [ ] Badge appears when cart has items
- [ ] Badge animates in with spring effect
- [ ] Count updates correctly
- [ ] Badge disappears when cart is empty

#### 7. Responsive Design
- [ ] Desktop (>1024px): Multi-column grid
- [ ] Tablet (768-1024px): 2-column grid
- [ ] Mobile (<768px): Single column
- [ ] Cart drawer is full-width on mobile
- [ ] All interactions work on touch devices
- [ ] 3D canvases scale properly

#### 8. Animations & Performance
- [ ] Page load animations are smooth
- [ ] Hover effects respond instantly
- [ ] Drawer animations feel natural (spring physics)
- [ ] No janky scrolling
- [ ] 3D models maintain 60fps
- [ ] Transitions are smooth across all interactions

#### 9. Aesthetics
- [ ] Dark theme feels premium and luxurious
- [ ] Gold accent color is used consistently
- [ ] Typography hierarchy is clear (Cormorant Garamond + Montserrat)
- [ ] Spacing and padding feel balanced
- [ ] Glass morphism effects work correctly
- [ ] Shadows and glows enhance depth

#### 10. Edge Cases
- [ ] Empty cart shows appropriate message
- [ ] Clear cart button removes all items
- [ ] Cart persists when closing and reopening drawer
- [ ] Multiple rapid clicks don't break anything
- [ ] Long product names don't break layout

## Design System

### Color Palette
- **Background**: `#0a0a0a` (Pure black base)
- **Surface**: `#1a1a1a` to `#222222` (Elevated surfaces)
- **Border**: `#2a2a2a` to `#333333` (Subtle dividers)
- **Accent**: `#c9a961` (Luxurious gold)
- **Text**: `#f5f5f5` (Primary), `#b0b0b0` (Secondary), `#707070` (Muted)

### Typography
- **Display Font**: Cormorant Garamond (Elegant serif for headings)
- **Body Font**: Montserrat (Modern sans-serif for content)

### Animations
- **Smooth**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Spring**: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)

## Advanced Features

### Cart Context API
The CartContext provides these methods to all child components:

```javascript
{
  cartItems,           // Array of cart items
  addToCart,          // (product) => void
  removeFromCart,     // (productId) => void
  updateQuantity,     // (productId, quantity) => void
  clearCart,          // () => void
  getCartTotal,       // () => number
  getCartCount,       // () => number
  isCartOpen,         // boolean
  toggleCart,         // () => void
  setIsCartOpen,      // (boolean) => void
}
```

### Product Data Schema
```javascript
{
  id: number,              // Unique identifier
  name: string,            // Product name
  category: string,        // 'luxury' | 'tech' | 'fashion' | 'home'
  shape: string,           // 'sphere' | 'torus' | 'cone' | 'rounded' | 'box'
  price: number,           // Price in dollars
  description: string,     // Short description
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

## Performance Tips

1. **3D Performance**: Limited to 9 products per page for optimal performance
2. **Animation Performance**: Uses CSS transforms and Framer Motion for GPU acceleration
3. **Code Splitting**: Vite automatically code-splits for optimal loading

## Future Enhancements

- [ ] Persistent cart storage (localStorage)
- [ ] Product filtering and search
- [ ] Checkout flow integration
- [ ] User authentication
- [ ] Product detail pages
- [ ] Wishlist functionality
- [ ] Custom 3D model uploads
- [ ] AR preview mode

## License

MIT License - Feel free to use this project as a learning resource or starting point for your own applications.
It is completed By Muhammad Umar Afzaal
