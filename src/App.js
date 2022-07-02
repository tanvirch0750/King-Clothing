import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/home/Home';
import SignIn from './routes/sign-in/SignIn';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
