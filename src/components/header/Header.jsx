import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as KingLogo } from '../../assets/crown.svg';
import './Header.styles.scss';

const Header = () => {
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
          <Link className="nav-link" to="auth">
            Signin
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
