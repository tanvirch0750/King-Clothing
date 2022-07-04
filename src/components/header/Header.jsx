import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './Header.styles.scss';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className="nav-link" onClick={signOutHandler}>
              Signout
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Signin
            </Link>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
