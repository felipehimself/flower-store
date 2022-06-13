import { createGlobalStyle } from 'styled-components';
import { STYLES } from './../constants/styles';

export const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

@media screen and (max-width:760px) {
  html {
    font-size: 58.5%;
  }
}

@media screen and (max-width:420px) {
  html {
    font-size: 52.5%;
  }
}

body {
  font-family: ${STYLES.font.fontSecondary};
  color: ${STYLES.colors.colorGray};
}

path {
  transition: fill 0.3s ease;
}

svg:hover path {
  fill: ${STYLES.colors.colorPrimary};
}

p, h1, h2, h3, h4, h5, h6, a {
  color: ${STYLES.colors.colorGray}
}

input {
  font-family: ${STYLES.font.fontSecondary};

}

`;
