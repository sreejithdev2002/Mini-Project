import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const WishlistIcon = () => {
  return <FontAwesomeIcon icon={faHeart} style={{ color: 'red',fontSize: '20px'}} />;
};

const CartIcon = () => {
  return <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black',fontSize: '20px' }} />;
};

export { WishlistIcon, CartIcon};
