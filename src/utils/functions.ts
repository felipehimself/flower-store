import IData from '../interfaces/DataInterface';
import { ICart } from '../interfaces/DataInterface';

export const groupItems = (array: IData[]): ICart[] => {
  const itemsWithAmount = array.map((cartItem) => ({
    ...cartItem,
    totalItems: 0,
  }));

  const groupedItems: ICart[] = [];
  itemsWithAmount.reduce(function (res: any, value: any) {
    if (!res[value.id]) {
      res[value.id] = { ...value, total: 0 };
      groupedItems.push(res[value.id]);
    }
    res[value.id].total++;
    return res;
  }, {});

  return groupedItems;
};
