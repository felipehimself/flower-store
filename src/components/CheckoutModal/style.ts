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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  max-width: 40rem;
  width: 100%;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ModalHeading = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
`;

export const BtnModal = styled.button`
  background-color: ${STYLES.colors.colorPrimary};
  border: none;
  padding: 1.8rem;
  color: ${STYLES.colors.colorWhite};
  text-align: center;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  transition: opacity 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;
  
  :hover {
    opacity: 0.9;
  }
`;
