import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';

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
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <KingLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
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
