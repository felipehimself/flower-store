import {
  H1,
  H2,
  NavBtn,
  Section,
  CardsContainer,
} from '../../components/shared/shared';
import { STYLES } from '../../constants/styles';
import heroImg from './../../assets/hero-img.jpg';
import { useSelector } from 'react-redux';
import * as Style from './styles';
import { RootState } from '../../store/store';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const { data } = useSelector((state: RootState) => state.data);

  return (
    <>
      <Style.Hero>
        <Style.HeroTextContainer>
          <H1>
            Beautiful Flowers <br />
            For Your Loved Ones
          </H1>
          <NavBtn color={STYLES.colors.colorWhite} href='#products'>
            Best Sellers
          </NavBtn>
        </Style.HeroTextContainer>
        <Style.ImgContainer>
          <Style.Img src={heroImg} />
        </Style.ImgContainer>
      </Style.Hero>
      <Section>
        <H2>Our Best Sellers This Month</H2>
        <CardsContainer>
          {data
            .filter((item) => item.isBestSeller)
            .map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })}
        </CardsContainer>
      </Section>

      <Section id='products'>
        <H2>Products</H2>
        <CardsContainer>
          {data.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </CardsContainer>
      </Section>
    </>
  );
};
export default Home;
