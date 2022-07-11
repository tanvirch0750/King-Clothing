import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './CartDropdown.styles.jsx';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles.jsx';

const CartDropdown = () => {
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => navigate('/checkout')}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
