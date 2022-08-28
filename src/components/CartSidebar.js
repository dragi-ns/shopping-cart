import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';

function CartSidebar() {
  return (
    <div className="cart-sidebar glass-background box-shadow flex col">
      <header className="cart-sidebar-header flex v-center">
        <h3 className="cart-sidebar-title">My Cart</h3>
        <button className="btn btn--secondary btn--small">
          <span className="icon">
            <FontAwesomeIcon icon={faClose} />
          </span>
        </button>
      </header>

      <div className="cart-items flex col gap">
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-total">
        <div className="row flex">
          <span>Subtotal:</span>
          <span>980 din</span>
        </div>
        <div className="row flex">
          <span>Delivery:</span>
          <span>Free</span>
        </div>
        <div className="row flex">
          <span>Total:</span>
          <span>980 din</span>
        </div>
      </div>
      <button className="btn btn--primary">
        <span className="icon">
          <FontAwesomeIcon icon={faCashRegister} />
        </span>
        <span>Checkout</span>
      </button>
    </div>
  );
}

export default CartSidebar;
