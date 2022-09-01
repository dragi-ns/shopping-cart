import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';
import QuantityInput from './QuantityInput';
import Price from './Price';

function CartItem({ item }, ref) {
  const { updateItem, removeItem } = useContext(CartContext);

  return (
    <motion.div
      ref={ref}
      initial={{ x: '100', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.2 }}
      className="cart-item flex gap--medium">
      <button
        className="btn btn--secondary btn--small cart-item-remove-btn"
        onClick={() => removeItem(item.id)}>
        <span className="icon">
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </span>
      </button>
      <div className="cart-item-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/${item.image}`}
          alt={item.name}
        />
      </div>
      <div className="cart-item-info flex col gap--medium">
        <p className="cart-item-name">{item.name}</p>
        <Price className="cart-item-price" price={item.price} />
      </div>
      <div className="cart-item-quantity flex col">
        <Price
          className="cart-item-total-price"
          price={item.price * item.quantity}
        />
        <QuantityInput
          value={item.quantity}
          setValue={(value) => updateItem(item.id, value)}
        />
      </div>
    </motion.div>
  );
}

export default CartItem;
