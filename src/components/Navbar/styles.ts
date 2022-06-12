import styled from 'styled-components';
import { STYLES } from '../../constants/styles';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const Logo = styled.h3`
  font-size: 3rem;
  color: ${STYLES.colors.colorGray};
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

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  position: relative;
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGray};

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background-color: ${STYLES.colors.colorPrimary};
    left: 0;
    bottom: -2px;
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const CartContainer = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;

`;

export const CartNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  content: '';
  position: absolute;
  top: -8px;
  right: -6px;
  border-radius: 100%;
  min-width: 1.6rem;
  min-height: 1.6rem;
  background-color: ${STYLES.colors.colorPrimary};
  font-size: 1rem;
  color: ${STYLES.colors.colorWhite};
  
`;
