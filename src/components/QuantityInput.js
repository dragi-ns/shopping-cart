import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function QuantityInput({
  value,
  setValue,
  minValue = 1,
  maxValue = 100,
  stepValue = 1,
}) {
  function isValidQuantity(quantity) {
    return (
      !Number.isNaN(quantity) && quantity >= minValue && quantity <= maxValue
    );
  }

  function handleChange(event) {
    const quantity = parseInt(event.currentTarget.value, 10);
    if (isValidQuantity(quantity)) {
      setValue(quantity);
    }
  }

  function decrease() {
    const newValue = value - 1;
    if (isValidQuantity(newValue)) {
      setValue(newValue);
    }
  }

  function increase() {
    const newValue = value + 1;
    if (isValidQuantity(newValue)) {
      setValue(newValue);
    }
  }

  return (
    <div className="quantity-input-container flex gap--small">
      <button
        className="btn btn--secondary btn--small"
        onClick={decrease}
        disabled={value <= minValue}>
        <span className="icon">
          <FontAwesomeIcon icon={faMinus} size="2xs" fixedWidth />
        </span>
      </button>
      <input
        type="number"
        min={minValue}
        max={maxValue}
        step={stepValue}
        value={value}
        onChange={handleChange}
      />
      <button
        className="btn btn--secondary btn--small"
        onClick={increase}
        disabled={value >= maxValue}>
        <span className="icon">
          <FontAwesomeIcon icon={faPlus} size="2xs" fixedWidth />
        </span>
      </button>
    </div>
  );
}
export default QuantityInput;
