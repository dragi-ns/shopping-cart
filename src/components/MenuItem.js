import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';
import QuantityInput from './QuantityInput';
import Price from './Price';

function MenuItem({ item }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddItem() {
    addItem(item, quantity);
    setQuantity(1);
  }

  return (
    <motion.div
      className="menu-item glass-background box-shadow flex col gap"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opaicty: 0 }}
      transition={{ delay: 0.15 }}>
      <div className="menu-item-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/${item.image}`}
          alt={item.name}
        />
      </div>
      <div className="menu-item-title">{item.name}</div>
      <div className="menu-item-controls flex gap--medium v-center">
        <Price className="menu-item-price" price={item.price} />
        <QuantityInput
          value={quantity}
          setValue={(value) => setQuantity(value)}
        />
      </div>
      <button className="btn btn--primary" onClick={handleAddItem}>
        <span className="icon">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        <span>Add to cart</span>
      </button>
    </motion.div>
  );
}

export default MenuItem;
