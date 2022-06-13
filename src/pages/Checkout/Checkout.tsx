import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ICart } from '../../interfaces/DataInterface';
import { useForm, SubmitHandler } from 'react-hook-form';
import { P, Section } from '../../components/shared/shared';
import GoBack from '../../components/GoBack/GoBack';
import * as Style from './styles';
import PaymentIcon from '../../components/SVGs/PaymentIcon';
import { groupItems } from '../../utils/functions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleCheckoutModal } from '../../slices/modalCheckoutSlice';
import { clearCart } from '../../slices/cartSlice';

type Inputs = {
  name: string;
  email: string;
  address: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  paymentType: string;
  pin: string;
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      eMoneyNumber: '',
      paymentType: 'money',
      pin: '',
    },
  });

  const [checkoutItems, setCheckOutItems] = useState<ICart[] | null>(null);
  const { cartState } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch<AppDispatch>()

  const total = cartState.reduce((acc, curr) => acc + curr.price, 0);
  const shipping = (total * 0.3).toFixed(2);
  const vat = (total * 0.2).toFixed(2);
  const grandTotal = (Number(total) + Number(shipping) + Number(vat)).toFixed(
    2
  );

  useEffect(() => {
    setCheckOutItems(groupItems(cartState));
  }, [cartState]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    dispatch(toggleCheckoutModal(true))
    dispatch(clearCart(null))
    
  }

  return (
    <Section>
      <GoBack />
      <Style.Form onSubmit={handleSubmit(onSubmit)}>
        <Style.CheckoutInfo>
          <Style.Title>CHECKOUT</Style.Title>
          <Style.FormControl className='form-control'>
            <Style.SubTitle>BILLING DETAILS</Style.SubTitle>
            <Style.FormFlex>
              <Style.FormItem width='100%'>
                <Style.Label htmlFor='name'>Name</Style.Label>
                <Style.Input
                  {...register('name', { required: true })}
                  id='name'
                  type='text'
                  className={errors.name ? 'error' : undefined}
                />
                <Style.Error>{errors.name && 'Required'}</Style.Error>
              </Style.FormItem>
              <Style.FormItem width='100%'>
                <Style.Label htmlFor='email'>E-mail Address</Style.Label>
                <Style.Input
                  {...register('email', { required: true })}
                  id='email'
                  type='text'
                  className={errors.email ? 'error' : undefined}
                />
                <Style.Error>{errors.email && 'Required'}</Style.Error>
              </Style.FormItem>
            </Style.FormFlex>
          </Style.FormControl>

          <Style.FormControl className='form-control'>
            <Style.SubTitle>SHIPPING INFO</Style.SubTitle>

            <Style.FormFlex>
              <Style.FormItem width='100%'>
                <Style.Label htmlFor='address'>Address</Style.Label>
                <Style.Input
                  {...register('address', { required: true })}
                  id='address'
                  type='text'
                  className={errors.address ? 'error' : undefined}
                />
                <Style.Error>{errors.address && 'Required'}</Style.Error>
              </Style.FormItem>
            </Style.FormFlex>

            <Style.FormFlex>
              <Style.FormItem width='100%'>
                <Style.Label htmlFor='city'>City</Style.Label>
                <Style.Input
                  {...register('city', { required: true })}
                  id='city'
                  type='text'
                  className={errors.city ? 'error' : undefined}
                />
                <Style.Error>{errors.city && 'Required'}</Style.Error>
              </Style.FormItem>
              <Style.FormItem width='100%'>
                <Style.Label htmlFor='country'>Country</Style.Label>
                <Style.Input
                  {...register('country', { required: true })}
                  id='country'
                  type='text'
                  className={errors.country ? 'error' : undefined}
                />
                <Style.Error>{errors.country && 'Required'}</Style.Error>
              </Style.FormItem>
            </Style.FormFlex>
          </Style.FormControl>

          <Style.FormControl className='form-control'>
            <Style.SubTitle>PAYMENT DETAILS</Style.SubTitle>
            <Style.SubLabel>Payment Method</Style.SubLabel>

            <Style.FormFlex>
              <Style.FormItem width='100%'>
                <Style.InputRadioContainer
                  className={errors.paymentType ? 'error' : undefined}
                >
                  <Style.Input
                    {...register('paymentType', { required: true })}
                    type='radio'
                    value='money'
                  />
                  <Style.Span>e-Money</Style.Span>
                </Style.InputRadioContainer>
              </Style.FormItem>
              <Style.FormItem width='100%'>
                <Style.InputRadioContainer
                  className={errors.paymentType ? 'error' : undefined}
                >
                  <Style.Input
                    {...register('paymentType', { required: true })}
                    type='radio'
                    value='cash'
                  />
                  <Style.Span>Cash on Delivery</Style.Span>
                </Style.InputRadioContainer>
              </Style.FormItem>
            </Style.FormFlex>

            <Style.FormFooter>
              {watch('paymentType') !== 'cash' && (
                <Style.FormFlex>
                  <Style.FormItem width='100%'>
                    <Style.Label htmlFor='number'>e-Money Number</Style.Label>
                    <Style.Input
                      min={0}
                      id='number'
                      type='number'
                      {...register('eMoneyNumber', { required: true })}
                      className={errors.eMoneyNumber ? 'error' : undefined}
                    />
                    <Style.Error>
                      {errors.eMoneyNumber && 'Required'}
                    </Style.Error>
                  </Style.FormItem>
                  <Style.FormItem width='100%'>
                    <Style.Label htmlFor='pin'>e-Money Pin</Style.Label>
                    <Style.Input
                      min={0}
                      id='pin'
                      type='number'
                      {...register('pin', { required: true })}
                      className={errors.pin ? 'error' : undefined}
                    />
                    <Style.Error>{errors.pin && 'Required'}</Style.Error>
                  </Style.FormItem>
                </Style.FormFlex>
              )}
              {watch('paymentType') === 'cash' && (
                <Style.MoneyPayment>
                  <PaymentIcon />
                  <P>
                    The Cash on Delivery method enables you to pay in cash when
                    our delivery courier arrives at your residence. please make
                    sure your address is correct so that your order will not be
                    cancelled.
                  </P>
                </Style.MoneyPayment>
              )}
            </Style.FormFooter>
          </Style.FormControl>
        </Style.CheckoutInfo>

        <Style.Summary>
          <Style.Title>SUMMARY</Style.Title>

          {checkoutItems?.map((cartItem) => {
            return (
              <Style.SummaryItem key={cartItem.id}>
                <Style.SummaryImage src={cartItem.img} />
                <Style.SummaryItemDetails>
                  <Style.ProductName>{cartItem.name} </Style.ProductName>
                  <Style.ProductPriceContainer>
                    <Style.ProductPrice>$ {cartItem.price}</Style.ProductPrice>
                    <Style.ProductPrice>x {cartItem.total}</Style.ProductPrice>
                  </Style.ProductPriceContainer>
                </Style.SummaryItemDetails>
              </Style.SummaryItem>
            );
          })}

          <Style.SummaryFooter>
            <Style.SummaryFlex>
              <Style.SummaryTitle weight='normal'>TOTAL</Style.SummaryTitle>
              <Style.SummaryTitle size='1.8rem'>$ {total}</Style.SummaryTitle>
            </Style.SummaryFlex>
            <Style.SummaryFlex>
              <Style.SummaryTitle weight='normal'>SHIPPING</Style.SummaryTitle>
              <Style.SummaryTitle size='1.8rem'>
                $ {shipping}
              </Style.SummaryTitle>
            </Style.SummaryFlex>
            <Style.SummaryFlex>
              <Style.SummaryTitle weight='normal'>
                VAT (INCLUDED)
              </Style.SummaryTitle>
              <Style.SummaryTitle size='1.8rem'>$ {vat}</Style.SummaryTitle>
            </Style.SummaryFlex>
            <Style.SummaryFlex marginTop='1rem'>
              <Style.SummaryTitle weight='normal'>
                GRAND TOTAL
              </Style.SummaryTitle>
              <Style.SummaryTitle primary={true} size='1.8rem'>
                $ {grandTotal}
              </Style.SummaryTitle>
            </Style.SummaryFlex>
          </Style.SummaryFooter>

          <Style.BtnSummary>CONTINUE & PAY</Style.BtnSummary>
        </Style.Summary>
      </Style.Form>
    </Section>
  );
};
export default Checkout;
