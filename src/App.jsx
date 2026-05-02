import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <div className="app-background" />
        <Navbar />
        
        <main className="main-content">
          <section className="hero-section">
            <h1 className="hero-title">Curated Excellence</h1>
            <p className="hero-subtitle">
              Experience luxury through the lens of three-dimensional artistry
            </p>
          </section>
          
          <ProductList products={products} />
        </main>
        
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
