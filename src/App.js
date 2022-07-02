import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './routes/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
