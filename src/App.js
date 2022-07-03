import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Authentication from './routes/authentication/Authentication';
import Home from './routes/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
