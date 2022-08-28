import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import QuantityInput from './QuantityInput';
import salad from '../images/salad-1.png';

function MenuItem() {
  return (
    <div className="menu-item glass-background box-shadow flex col gap">
      <div className="menu-item-img">
        <img src={salad} alt="salad 1" />
      </div>
      <div className="menu-item-title">Fresh and Health Salad</div>
      <div className="menu-item-controls flex gap--medium v-center">
        <div className="menu-item-price">490 din</div>
        <QuantityInput />
      </div>
      <button className="btn btn--primary">
        <span className="icon">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default MenuItem;
