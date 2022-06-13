import styled from 'styled-components';
import { STYLES } from '../../constants/styles';

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  gap: 4rem;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;
export const CheckoutInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3rem 3rem;
  border-radius: 0.5rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${STYLES.colors.colorPrimary};
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
`;

export const FormControl = styled.div`
  margin-top: 2rem;
`;

export const FormFlex = styled.div`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const FormItem = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;
`;

export const Input = styled.input`
  padding: 1.2rem 1.8rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  accent-color: ${STYLES.colors.colorPrimary};

  :focus {
    border: 1px solid ${STYLES.colors.colorPrimary};
  }

  &.error {
    border: 1px solid #fa5252;
  }
`;

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1.3rem 2rem;
  border-radius: 0.5rem;

  &.error {
    border: 1px solid #fa5252;
  }
`;

export const Span = styled.span`
  font-size: 1.4rem;
`;

export const SubLabel = styled.p`
  display: block;
  margin: 2rem 0;
  font-size: 1.6rem;
`;

export const MoneyPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  /* margin-top: 2rem; */
`;

export const Error = styled.span`
  min-height: 1.5rem;
  font-size: 1.3rem;
  padding: 0.2rem 0;
`;

export const FormFooter = styled.div`
  min-height: 10rem;
  margin-top: 2rem;
`;

export const Summary = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3rem;
  border-radius: 0.5rem;
  width: 60%;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;

export const SummaryImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const SummaryItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const ProductName = styled.h3`
  font-size: 1.6rem;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
export const ProductPrice = styled.span`
  font-size: 1.4rem;
`;

export const SummaryFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const SummaryFlex = styled.div<{ marginTop?: string }>`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.marginTop};
`;

export const SummaryTitle = styled.h3<{
  weight?: string;
  size?: string;
  primary?: boolean;
}>`
  font-size: ${(props) => props.size || '1.5rem'};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.primary && STYLES.colors.colorPrimary};
`;

export const BtnSummary = styled.button`
  border: none;
  background-color: ${STYLES.colors.colorPrimary};
  cursor: pointer;
  padding: 1.6rem 2rem;
  margin-top: 1.6rem;
  width: 100%;
  color: ${STYLES.colors.colorWhite};
  border-radius: 0.5rem;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.9;
  }
`;
