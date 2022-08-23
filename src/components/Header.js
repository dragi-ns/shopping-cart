import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <div className="cart-container">
              <span className="cart-count">99</span>
              <button className="cart-btn">
                <span className="icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span>My Cart</span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
