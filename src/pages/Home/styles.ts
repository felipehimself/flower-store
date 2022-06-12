import styled from 'styled-components';
import { STYLES } from '../../constants/styles';

export const Hero = styled.section`
  max-width: 120rem;
  margin: 2rem auto;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const HeroTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const ImgContainer = styled.div`
  flex: 0.8;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const A = styled.a`
  font-family: ${STYLES.font.fontSecondary};
  text-decoration: none;
  border: 1px solid ${STYLES.colors.colorBlack};
  padding: 1rem 3rem;
  font-size: 1.4rem;
`;

