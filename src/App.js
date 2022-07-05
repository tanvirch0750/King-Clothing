import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Authentication from './routes/authentication/Authentication';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
