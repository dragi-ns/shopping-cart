import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      key="hero"
      className="hero flex h-center v-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div className="container flex col h-center v-center gap">
        <h1 className="title">
          Wake Up Early, <br />
          Eat Fresh & Healthy
        </h1>
        <p className="description">
          Aside from their natural good taste and great crunchy texture
          alongside wonderful colors and fragrances, eating a salad each day can
          have significant health benefits! <br />
          How about something green today?
        </p>
        <Link to="/menu" className="btn btn--primary btn--big">
          <span className="icon">
            <FontAwesomeIcon icon={faBasketShopping} />
          </span>
          <span>Shop Now</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default Hero;
