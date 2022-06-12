import * as Style from './styles';
import { Logo } from '../shared/shared';
import FbIcon from '../SVGs/FbIcon';
import TwitterIcon from '../SVGs/TwitterIcon';

import InstaIcon from '../SVGs/InstaIcon';
const Footer = () => {
  return (
    <Style.Footer>
      <Style.FooterContainer>
        <Style.TextContainer>
          <Logo color='#fff'>reflower</Logo>
          <Style.FooterText>{new Date().getFullYear()} &copy;</Style.FooterText>
        </Style.TextContainer>
        <Style.IconsContainer>
          <Style.A href='https://www.facebook.com/' target="_blank">
            <FbIcon />
          </Style.A>
          <Style.A href='https://www.twitter.com' target="_blank">
            <TwitterIcon />
          </Style.A>
          <Style.A href='https://www.instagram.com' target="_blank">
            <InstaIcon />
          </Style.A>
        </Style.IconsContainer>
      </Style.FooterContainer>
    </Style.Footer>
  );
};
export default Footer;
