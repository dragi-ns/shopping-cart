import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import Menu from './Menu';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="menu" element={<Menu />} />
        <Route
          path="*"
          element={
            <div className="error-container glass-background box-shadow flex col gap--medium h-center v-center">
              <p>There's nothing here!</p>
              <Link to="/">Go home</Link>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
