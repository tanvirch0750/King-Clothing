import { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';
import './Checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantitu</span>
        </div>
        <div className="header-block"></div>
        <div className="header-block"></div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <div key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <span>{cartItem.quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
