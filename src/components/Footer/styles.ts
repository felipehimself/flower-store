import styled from 'styled-components';
import { STYLES } from '../../constants/styles';

export const Footer = styled.footer`
  background-color: ${STYLES.colors.colorBlack};
`;

export const FooterContainer = styled.div`
  max-width: 120rem;
  padding: 4rem 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterText = styled.p`
  font-size: 1.4rem;
  color: ${STYLES.colors.colorWhite};
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TextContainer = styled.div``;

export const A = styled.a`
  text-decoration: none;
  color: ${STYLES.colors.colorWhite};
`;
