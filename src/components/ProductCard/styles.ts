import styled from 'styled-components';
import { STYLES } from '../../constants/styles';
import { Link } from 'react-router-dom';
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 10rem;
  position: relative;
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.02);
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
`;

export const CardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardTextContainer = styled.div``;

export const CardTitle = styled.h4`
  font-size: 1.6rem;
  font-family: ${STYLES.font.fontPrimary};
  font-weight: 700;
`;

export const CardPrice = styled.span`
  font-size: 1.6rem;
  font-family: ${STYLES.font.fontSecondary};
`;

export const AddCartBtn = styled(Link)`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.4rem;
  color: ${STYLES.colors.colorGray};
  border-bottom: 1px dotted ${STYLES.colors.colorPrimary};
  transition: transform 0.3s ease;

  :hover {
    transform: translateY(-4px);
  }
`;
