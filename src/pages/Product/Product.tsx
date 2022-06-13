import { useEffect, useState } from 'react';
import { Section, P } from '../../components/shared/shared';
import * as Style from './styles';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import IData from '../../interfaces/DataInterface';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import GoBack from '../../components/GoBack/GoBack';
import BestSeller from '../../components/BestSeller/BestSeller';

const Product = () => {
  const [product, setProduct] = useState<IData | null>();
  const { id } = useParams();
  const { data } = useSelector((state: RootState) => state.data);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const productToFind = data.find((prod) => prod.id === Number(id));
    setProduct(productToFind);
  }, [id, data]);

  return (
    <Section>
      <GoBack/>
      <Style.ProductContainer>
        <Style.ProductImg src={product?.img} />
        <Style.TextContainer>
          <Style.ProductTitle>{product?.name}</Style.ProductTitle>
          <P>{product?.desc}</P>
          <Style.ProuctSubTitleContainer>
            <Style.ProductSubTitle>Includes</Style.ProductSubTitle>
            <Style.ProductList>
              {product?.included.map((item) => {
                return (
                  <Style.ProductListItem key={item}>
                    {item}
                  </Style.ProductListItem>
                );
              })}
            </Style.ProductList>
          </Style.ProuctSubTitleContainer>
          <Style.Price>$ {product?.price}</Style.Price>
          <Style.Button onClick={() => dispatch(addToCart(product))}>
            ADD TO CART
          </Style.Button>
        </Style.TextContainer>
      </Style.ProductContainer>
    </Section>
  );
};
export default Product;
