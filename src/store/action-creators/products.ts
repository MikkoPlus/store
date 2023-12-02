import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ProductActionTypes,
  ProductAction,
  IProduct,
} from '../../types/products';

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
      const response = await axios.get('https://appevent.ru/dev/task1/catalog');
      const data: IProduct[] = response.data.items;

      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке товаров',
      });
    }
  };
};
