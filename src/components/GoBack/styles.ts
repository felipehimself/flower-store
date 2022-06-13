import styled from 'styled-components';
import { STYLES } from './../../constants/styles';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
  color: ${STYLES.colors.colorGray};

  :hover {
    color: ${STYLES.colors.colorPrimary};
    text-decoration: underline;
  }
`;
