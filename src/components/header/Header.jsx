import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import { CartContext } from '../../context/Cart.context';
import { UserContext } from '../../context/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import './Header.styles.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <KingLogo className="logo" />
        </Link>

        <nav className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Signin
            </Link>
          )}
          <CartIcon />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
