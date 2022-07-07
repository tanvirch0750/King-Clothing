import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import { CartContext } from '../../context/Cart.context';
import { UserContext } from '../../context/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../cart-icon/CartIcon';
import './Header.styles.jsx';
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './Header.styles.jsx';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <KingLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Signout
            </NavLink>
          ) : (
            <NavLink to="auth">Signin</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Header;
