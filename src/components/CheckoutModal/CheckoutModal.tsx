import * as Style from './style';
import CheckIcon from '../SVGs/CheckIcon';
import { P } from '../shared/shared';
import { toggleCheckoutModal } from '../../slices/modalCheckoutSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';

const CheckoutModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    dispatch(toggleCheckoutModal(false));
    navigate('/');
  };

  return (
    <Style.OverLay>
      <Style.ModalContent>
        <CheckIcon />
        <Style.ModalHeading>
          Thank you <br /> for your order
        </Style.ModalHeading>
        <P>You will receive an e-mail confirmation soon.</P>
        <Style.BtnModal onClick={handleCloseModal}>Back home</Style.BtnModal>
      </Style.ModalContent>
    </Style.OverLay>
  );
};
export default CheckoutModal;
