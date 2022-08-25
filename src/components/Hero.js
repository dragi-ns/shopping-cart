import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="hero flex h-center v-center">
      <div className="container flex col h-center v-center gap">
        <h1 className="title">
          Wake Up Early, <br />
          Eat Fresh & Healthy
        </h1>
        <p className="description">
          Aside from their natural good taste and great crunchy texture
          alongside wonderful colors and fragrances, eating a salad each day can
          have significant health benefits! <br />
          How about something green today?
        </p>
        <a href="#">
          <span className="icon">
            <FontAwesomeIcon icon={faBasketShopping} />
          </span>
          <span>Shop Now</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
