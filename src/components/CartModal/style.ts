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
  padding: 2rem;
  max-width: 36rem;
  width: 100%;
  border-radius: 0.6rem;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnClose = styled.button`
  border: none;
  background-color: ${STYLES.colors.colorBlack};
  color: ${STYLES.colors.colorWhite};
  padding: 0.3rem 0.8rem;
  border-radius: 100%;
  font-size: 1.6rem;
  position: absolute;
  top: -1rem;
  right: -1rem;
  cursor: pointer;
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
  gap: 0.6rem;
`;

export const CartItemName = styled.h3`
  font-size: 1.3rem;
`;

export const CartPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const BtnCheckout = styled.button`
  background-color: ${STYLES.colors.colorPrimary};
  border: none;
  width: 100%;
  padding: 1.4rem;
  color: ${STYLES.colors.colorWhite};
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.3s ease;
  border-radius: 0.5rem;

  :hover {
    opacity: 0.9;
  }
`;

export const CartEmpty = styled.h4`
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0;

`