import { useReducer } from 'react';

import { FilterActionType } from './actionTypes';

type Rating = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
type SortByPrice = "HIGH" | "LOW" | "NONE";

interface FilterValues {
  highestPriceAmount: number;
  categoryDbms: boolean;
  categoryAi: boolean;
  categoryDiscreteMaths: boolean;
  categorySystemDesign: boolean;
  categoryDSA: boolean;
  categoryWebDev: boolean;
  rating: Rating;
  sortByPrice: SortByPrice;
}

const initialFiltervalues: FilterValues = {
  highestPriceAmount: 1000,
  categoryDbms: false,
  categoryAi: false,
  categoryDiscreteMaths: false,
  categorySystemDesign: false,
  categoryDSA: false,
  categoryWebDev: false,
  rating: 5,
  sortByPrice: "NONE",
};
const reduceFilterValues = (
  filterState: FilterValues,
  action:
    | { type: FilterActionType.PRICE; payload: number }
    | {
        type:
          | FilterActionType.CATEGORYAI
          | FilterActionType.CATEGORYDISCRETEMATHS
          | FilterActionType.CATEGORYDSA
          | FilterActionType.CATEGORYDBMS
          | FilterActionType.CATEGORYWEBDEV
          | FilterActionType.CATEGORYSYSTEMDESIGN;
        payload: boolean;
      }
    | { type: FilterActionType.RATING; payload: Rating }
    | { type: FilterActionType.SORTBYPRICE; payload: SortByPrice }
    | { type: FilterActionType.CLEAR }
): FilterValues => {
  switch (action.type) {
    case FilterActionType.CATEGORYAI:
      return { ...filterState, categoryAi: action.payload };
    case FilterActionType.CATEGORYDISCRETEMATHS:
      return { ...filterState, categoryDiscreteMaths: action.payload };
    case FilterActionType.CATEGORYSYSTEMDESIGN:
      return { ...filterState, categorySystemDesign: action.payload };
    case FilterActionType.CATEGORYWEBDEV:
      return { ...filterState, categoryWebDev: action.payload };
    case FilterActionType.CATEGORYDSA:
      return { ...filterState, categoryDSA: action.payload };
    case FilterActionType.CATEGORYDBMS:
      return { ...filterState, categoryDbms: action.payload };
    case FilterActionType.PRICE:
      return { ...filterState, highestPriceAmount: action.payload };
    case FilterActionType.RATING:
      return { ...filterState, rating: action.payload };
    case FilterActionType.SORTBYPRICE:
      return { ...filterState, sortByPrice: action.payload };
    case FilterActionType.CLEAR:
      return initialFiltervalues;
    default:
      return filterState;
  }
};
export const useFilterReducer = () =>
  useReducer(reduceFilterValues, {
    highestPriceAmount: 1000,
    categoryDbms: false,
    categoryAi: false,
    categoryDiscreteMaths: false,
    categorySystemDesign: false,
    categoryDSA: false,
    categoryWebDev: false,
    rating: 0,
    sortByPrice: "NONE",
  });
