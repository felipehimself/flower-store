interface IData {
  id: number;
  name: string;
  price: number;
  rate: number;
  reviewsAmount: number;
  img: string;
  included: string[];
  isBestSeller: boolean;
  desc: string;
}

export interface ICart extends IData {
  total: number;
}

export default IData;
