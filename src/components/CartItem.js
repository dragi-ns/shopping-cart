import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import QuantityInput from './QuantityInput';
import salad from '../images/salad-1.png';

function CartItem() {
  return (
    <div className="cart-item flex gap--medium">
      <button className="btn btn--secondary btn--small cart-item-remove-btn">
        <span className="icon">
          <FontAwesomeIcon icon={faTrash} size="sm" />
        </span>
      </button>

      <div className="cart-item-img">
        <img src={salad} alt="salad name" />
      </div>

      <div className="cart-item-info flex col gap--medium">
        <p className="cart-item-name">Fresh and Health Salad</p>
        <p className="cart-item-price">490 din</p>
      </div>

      <div className="cart-item-quantity flex col">
        <p className="cart-item-total-price">980 din</p>
        <QuantityInput />
      </div>
    </div>
  );
}

export default CartItem;
