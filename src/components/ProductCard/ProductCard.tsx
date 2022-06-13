import * as Style from './styles';
import IData from '../../interfaces/DataInterface';

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
      <Style.ImgContainer>
        <Style.CardImg src={img} />
      </Style.ImgContainer>
      <Style.CardFooter>
        <Style.CardTextContainer>
          <Style.CardTitle>{name}</Style.CardTitle>
          <Style.CardPrice>$ {price}</Style.CardPrice>
        </Style.CardTextContainer>
        <Style.AddCartBtn to={`/product/${id}`}>Shop</Style.AddCartBtn>
      </Style.CardFooter>
      {isBestSeller && <Style.Badge>Best Seller</Style.Badge>}
    </Style.Card>
  );
};
export default ProductCard;
