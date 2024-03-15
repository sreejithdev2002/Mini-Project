import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const WishlistIconTrue = () => {
  return <FontAwesomeIcon icon={faHeart} style={{ color: 'red',fontSize: '25px'}} />;
};

const WishlistIconFalse = () => {
  return <FontAwesomeIcon icon={faHeart} style={{ color: '#b9b9b9',fontSize: '25px'}} />;
};

const CartIcon = () => {
  return <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black',fontSize: '22px' }} />;
};

const ProfileIcon = () => {
  return <FontAwesomeIcon icon={faUser} style={{ color: 'black',fontSize: '22px' }}/>
}

export { WishlistIconTrue, WishlistIconFalse ,CartIcon, ProfileIcon};
