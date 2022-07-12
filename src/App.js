import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
