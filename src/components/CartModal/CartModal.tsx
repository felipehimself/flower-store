import { useEffect, useState } from 'react';
import * as Style from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { toggleModal } from '../../slices/modalCartSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { clearCart } from '../../slices/cartSlice';
import { ICart } from '../../interfaces/DataInterface';
import { groupItems } from '../../utils/functions';

const CartModal = () => {
  const [groupedItems, setGrupedItems] = useState<ICart[] | null>(null);
  const { cartState } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setGrupedItems(groupItems(cartState));
  }, [cartState]);

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
      <Style.ModalContainer>
        <Style.ModalContent>
          <Style.BtnClose onClick={() => dispatch(toggleModal(false))}>
            &times;
          </Style.BtnClose>
          {cartState.length === 0 ? (
            <Style.CartEmpty>Your cart is empty</Style.CartEmpty>
          ) : (
            <>
              <Style.ModalHeader>
                <Style.CartTitle>CART ({cartState.length})</Style.CartTitle>
                <Style.RemoveBtn onClick={handleClearCart}>
                  remove all
                </Style.RemoveBtn>
              </Style.ModalHeader>
              {groupedItems?.map((cartItem) => {
                return (
                  <Style.CartItemContainer key={cartItem.id}>
                    <Style.CartImg src={cartItem.img} />
                    <Style.CartDetailsContainer>
                      <Style.CartItemName>{cartItem.name}</Style.CartItemName>
                      <Style.CartPriceContainer>
                        <Style.CartItemPrice>
                          $ {cartItem.price}
                        </Style.CartItemPrice>
                        <Style.CartItemPrice>
                          x {cartItem.total}
                        </Style.CartItemPrice>
                      </Style.CartPriceContainer>
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
            </>
          )}
        </Style.ModalContent>
      </Style.ModalContainer>
    </Style.OverLay>
  );
};
export default CartModal;
