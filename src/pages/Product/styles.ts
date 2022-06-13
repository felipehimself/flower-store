import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { STYLES } from '../../constants/styles';

export const NavLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${STYLES.colors.colorGray};

  :hover {
    color: ${STYLES.colors.colorPrimary};
    text-decoration: underline;
  }
`;

export const ProductContainer = styled.article`
  margin-top: 3rem;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  margin-bottom: 6rem;

  @media screen and (max-width: 1050px) {
    flex-direction: column-reverse;
  }
`;

export const ProductImgContainer = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;

`;

export const ProductImg = styled.img`
  display: block;
  width: 100%;
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.02)
  }


`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* padding: 0 3rem; */
  align-items: flex-start;
`;

export const ProductTitle = styled.h2`
  font-size: 3rem;
  color: ${STYLES.colors.colorGray};
`;

export const ProuctSubTitleContainer = styled.div``;

export const ProductSubTitle = styled.h4`
  font-size: 2rem;
  color: ${STYLES.colors.colorGray};
`;

export const ProductList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

export const ProductListItem = styled.li`
  font-size: 1.6rem;
  position: relative;
  margin-left: 1.4rem;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    margin-right: 1rem;
    background-color: ${STYLES.colors.colorGray};
  }
`;

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: ${STYLES.colors.colorBlack};
  border: none;
  padding: 1rem 3rem;
  font-size: 1.8rem;
  color: ${STYLES.colors.colorWhite};
  cursor: pointer;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.9;
  }
`;
