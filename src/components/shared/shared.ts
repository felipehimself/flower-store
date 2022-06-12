import styled from 'styled-components';
import { STYLES } from '../../constants/styles';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  line-height: 1.2;
  font-family: ${STYLES.font.fontPrimary};
`;

export const H2 = styled.h2`
  font-size: 3.6rem;
  text-align: center;
  font-family: ${STYLES.font.fontPrimary};
`;

export const NavBtn = styled.a`
  font-family: ${STYLES.font.fontSecondary};
  text-decoration: none;
  border: 1px solid ${STYLES.colors.colorBlack};
  padding: 1rem 3rem;
  font-size: 1.4rem;
  background-color: ${STYLES.colors.colorBlack};
  color: ${(props) => props.color || STYLES.colors.colorGray};
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.8;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));

  gap: 2rem;
  margin-top: 3rem;
`;

export const Logo = styled.span<{ color?: string }>`
  font-size: 3rem;
  color: ${(props) => props.color || STYLES.colors.colorGray};
  font-family: ${STYLES.font.fontPrimary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 13px;
    right: -10px;
    width: 5px;
    height: 5px;
    background-color: ${STYLES.colors.colorPrimary};
  }
`;

export const P = styled.p`
  font-size: 1.6rem;
`;
