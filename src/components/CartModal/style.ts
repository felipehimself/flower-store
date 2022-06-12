import styled from 'styled-components';
import { STYLES } from '../../constants/styles';

export const OverLay = styled.div`
  position: fixed;
  inset: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 100;
`;

export const ModalContent = styled.article`
  background-color: ${STYLES.colors.colorWhite};
  position: absolute;
  top: 8rem;
  right: 8rem;
  padding: 2rem 2rem;
  max-width: 34rem;
  width: 100%;
  border-radius: 0.6rem;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartTitle = styled.h2`
  font-size: 1.6rem;
  text-align: left;
`;

export const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  color: ${STYLES.colors.colorGray};
  text-decoration: underline;
  cursor: pointer;
`;

export const CartItemContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const CartImg = styled.img`
  width: 5rem;
`;

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CartItemName = styled.h3`
  font-size: 1.3rem;
`;

export const CartItemPrice = styled.span`
  font-size: 1.4rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const Total = styled.span`
  font-size: 1.4rem;
  display: block;
  color: ${STYLES.colors.colorGray};
`;

export const TotalAmount = styled.span`
  font-weight: 700;
  font-size: 1.6rem;
`;

export const CheckoutButton = styled.button`
  background-color: ${STYLES.colors.colorPrimary};
  border: none;
  width: 100%;
  padding: 1rem;
  color: ${STYLES.colors.colorWhite};
  font-weight: 700;
  cursor: pointer;

`