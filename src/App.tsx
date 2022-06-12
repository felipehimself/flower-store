import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global/GlobalStyles';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import CartModal from './components/CartModal/CartModal';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const { modalState } = useSelector((state: RootState) => state.modal);

  return (
    <>
      <GlobalStyles />
      <Router>
        {modalState && <CartModal />}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
