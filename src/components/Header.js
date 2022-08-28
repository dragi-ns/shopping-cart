import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPepperHot } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="app-header glass-background box-shadow">
      <div className="container flex v-center gap--small">
        <div className="logo">
          <a href="#">
            <span>Sweet & Green</span>
            <br />
            <span>Creative Salad co.</span>
          </a>
        </div>
        <nav>
          <ul className="flex gap v-center">
            <li className="active">
              <a href="#">Home</a>
              <span className="icon">
                <FontAwesomeIcon icon={faPepperHot} />
              </span>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <div className="cart-container">
                <span className="cart-count">99</span>
                <button className="btn btn--primary btn--big">
                  <span className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </span>
                  <span>My Cart</span>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
