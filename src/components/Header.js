import {
  useRef,
  useContext,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';

function Header({ toggleCartSidebar }) {
  const navigationIcon = useRef(null);
  const { pathname } = useLocation();
  const { getTotalItems } = useContext(CartContext);
  const [showLogo, setShowLogo] = useState(true);
  const totalItems = getTotalItems();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    let left = '50%';
    switch (pathname) {
      case '/':
        left = '50%';
        break;
      case '/menu':
        left = '180%';
        break;
      // no default
    }
    navigationIcon.current.style.left = left;
  }, [pathname]);

  function handleScroll() {
    const currentWidth = window.innerWidth;
    const currentScroll = window.scrollY;
    if (currentWidth <= 500 && currentScroll >= 20) {
      setShowLogo(false);
    } else {
      setShowLogo(true);
    }
  }

  return (
    <header className="app-header glass-background box-shadow">
      <div className="container flex v-center gap--small">
        <AnimatePresence mode="popLayout" initial={false}>
          {showLogo && (
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
              className="logo">
              <Link to="/">
                <span>Sweet & Green</span>
                <br />
                <span>Creative Salad co.</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <nav>
          <ul className="flex gap v-center">
            <li className="active">
              <Link to="/">Home</Link>
              <span
                className="navigation-icon icon"
                style={{ left: '50%' }}
                ref={navigationIcon}>
                <FontAwesomeIcon icon={faPepperHot} />
              </span>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <div className="cart-container">
                <span className="cart-count">{totalItems}</span>
                <button
                  className="btn btn--primary btn--big"
                  onClick={toggleCartSidebar}>
                  <span className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  <span>My Cart</span>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
