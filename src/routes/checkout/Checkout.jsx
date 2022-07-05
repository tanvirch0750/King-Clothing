import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import './Checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <span>{cartItem.quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            <br />
            <span>Decrement</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
