import styled from 'styled-components';
import { STYLES } from './../../constants/styles';


export const Badge = styled.span`
  font-size: 1.2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${STYLES.colors.colorWhite};
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: ${STYLES.colors.colorPrimary};
  z-index: 100;
`;
