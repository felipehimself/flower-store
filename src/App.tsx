import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './global/GlobalStyles';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import CartModal from './components/CartModal/CartModal';
import CheckoutModal from './components/CheckoutModal/CheckoutModal';

import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { toggleCheckoutModal } from './slices/modalCheckoutSlice';

const App = () => {
  const { modalCheckoutState } = useSelector((state: RootState) => state.modalCheckout);
  const { modalState } = useSelector((state: RootState) => state.modal);

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop>
            {modalState && <CartModal />}
            {modalCheckoutState && <CheckoutModal />}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
