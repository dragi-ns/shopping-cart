import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './components/CartContext';
import AnimatedRoutes from './components/AnimatedRoutes';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

function App() {
  const [showCartSidebar, setShowCartSidebar] = useState(false);

  function toggleCartSidebar() {
    setShowCartSidebar((prevState) => !prevState);
  }

  return (
    <div className="app flex col">
      <CartProvider>
        <BrowserRouter>
          <Header toggleCartSidebar={toggleCartSidebar} />
          <AnimatePresence>
            {showCartSidebar && (
              <CartSidebar toggleCartSidebar={toggleCartSidebar} />
            )}
          </AnimatePresence>
          <main className="app-main flex">
            <AnimatedRoutes />
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
