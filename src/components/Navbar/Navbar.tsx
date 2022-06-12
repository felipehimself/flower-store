import CartIcon from '../SVGs/CartIcon';
import * as Style from './styles';
import { Logo } from '../shared/shared';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleModal } from '../../slices/modalSlice';

const Navbar = () => {
  const { cartState } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Style.Navbar>
      <Logo>reflower</Logo>
      <Style.LinksContainer>
        <Style.Navlink to='/'>Home</Style.Navlink>
        <Style.Navlink to='/'>Products</Style.Navlink>
        <Style.CartContainer onClick={() => dispatch(toggleModal(true))}>
          <CartIcon fill='#373737' />
          {cartState.length > 0 && (
            <Style.CartNumber>{cartState.length}</Style.CartNumber>
          )}
        </Style.CartContainer>
      </Style.LinksContainer>
    </Style.Navbar>
  );
};
export default Navbar;
