import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function QuantityInput() {
  return (
    <div className="quantity-input-container flex gap--small">
      <button className="btn btn--secondary btn--small">
        <span className="icon">
          <FontAwesomeIcon icon={faMinus} size="2xs" fixedWidth />
        </span>
      </button>
      <input type="number" min={1} max={100} step={1} value={1} />
      <button className="btn btn--secondary btn--small">
        <span className="icon">
          <FontAwesomeIcon icon={faPlus} size="2xs" fixedWidth />
        </span>
      </button>
    </div>
  );
}
export default QuantityInput;
