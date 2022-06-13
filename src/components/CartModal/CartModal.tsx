import * as Style from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { toggleModal } from '../../slices/modalSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { clearCart } from '../../slices/cartSlice';

const CartModal = () => {
  const { cartState } = useSelector((state: RootState) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckout = () => {
    navigate('/checkout');
    dispatch(toggleModal(false));
  };

  const handleClearCart = () => {
    dispatch(toggleModal(false));
    dispatch(clearCart(null));
  };

  return (
    <Style.OverLay>
      <Style.ModalContent>
        <Style.BtnClose onClick={()=>dispatch(toggleModal(false))}>&times;</Style.BtnClose>
        <Style.ModalHeader>
          <Style.CartTitle>CART ({cartState.length})</Style.CartTitle>
          <Style.RemoveBtn onClick={handleClearCart}>
            remove all
          </Style.RemoveBtn>
        </Style.ModalHeader>

        {cartState.map((cartItem) => {
          return (
            <Style.CartItemContainer key={cartItem.id}>
              <Style.CartImg src={cartItem.img} />
              <Style.CartDetailsContainer>
                <Style.CartItemName>{cartItem.name}</Style.CartItemName>
                <Style.CartItemPrice>$ {cartItem.price}</Style.CartItemPrice>
              </Style.CartDetailsContainer>
            </Style.CartItemContainer>
          );
        })}
        <Style.TotalContainer>
          <Style.Total>TOTAL</Style.Total>
          <Style.TotalAmount>
            $ {cartState.reduce((acc, curr) => acc + curr.price, 0)}
          </Style.TotalAmount>
        </Style.TotalContainer>
        <Style.BtnCheckout onClick={handleCheckout}>
          CHECKOUT
        </Style.BtnCheckout>
      </Style.ModalContent>
    </Style.OverLay>
  );
};
export default CartModal;
