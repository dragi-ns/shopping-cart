import { forwardRef, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import CartContext from './CartContext';
import CartItem from './CartItem';
import Price from './Price';

// So we can use mode='popLayout'
const CartItemForwardRef = forwardRef(CartItem);

function CartSidebar({ toggleCartSidebar }) {
  const { items, getTotalPrice } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <motion.div
      key="cart-sidebar"
      className="cart-sidebar glass-background box-shadow flex col"
      initial={{ x: '375px' }}
      animate={{ x: '0' }}
      exit={{ x: '375px' }}>
      <header className="cart-sidebar-header flex v-center">
        <h3 className="cart-sidebar-title">My Cart</h3>
        <button
          className="btn btn--secondary btn--small"
          onClick={toggleCartSidebar}>
          <span className="icon">
            <FontAwesomeIcon icon={faClose} />
          </span>
        </button>
      </header>

      <div className="cart-items flex col gap">
        <AnimatePresence initial={false} mode="popLayout">
          {items.length < 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              Your cart is empty!
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false}>
          {items.map((item) => (
            <CartItemForwardRef key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>
      <div className="cart-total">
        <div className="row flex">
          <span>Subtotal:</span>
          <Price price={totalPrice} />
        </div>
        <div className="row flex">
          <span>Delivery:</span>
          <span>Free</span>
        </div>
        <div className="row flex">
          <span>Total:</span>
          <Price price={totalPrice} />
        </div>
      </div>
      <button className="btn btn--primary">
        <span className="icon">
          <FontAwesomeIcon icon={faCashRegister} />
        </span>
        <span>Checkout</span>
      </button>
    </motion.div>
  );
}

export default CartSidebar;
