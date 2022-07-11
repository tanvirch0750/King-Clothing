import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  selectCartCounts,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import './CartIcon.styles.jsx';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles.jsx';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCounts);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
