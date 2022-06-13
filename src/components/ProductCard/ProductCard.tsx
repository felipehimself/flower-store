import * as Style from './styles';
import IData from '../../interfaces/DataInterface';
import Badge from '../Badge/Badge';
import StarIcon from '../SVGs/StarIcon';

const ProductCard: React.FC<IData> = ({
  id,
  name,
  price,
  rate,
  reviewsAmount,
  included,
  isBestSeller,
  img,
}) => {
  return (
    <Style.Card>
      {isBestSeller && <Badge />}
      <Style.ImgContainer>
        <Style.CardImg src={img} />
      </Style.ImgContainer>
      <Style.CardFooter>
        <Style.CardFlex>
          <Style.CardTitle>{name}</Style.CardTitle>
          <Style.AddCartBtn to={`/product/${id}`}>Shop</Style.AddCartBtn>
        </Style.CardFlex>
        <Style.CardPrice>$ {price}</Style.CardPrice>
      </Style.CardFooter>
    </Style.Card>
  );
};
export default ProductCard;
