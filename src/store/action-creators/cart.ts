import { Dispatch } from 'redux';
import { CartAction, CartActionTypes, ICartProduct } from '../../types/cart';

export const fetchCartProducts = (storageData: ICartProduct[]) => {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({ type: CartActionTypes.SET_STORAGE_DATA });

      dispatch({
        type: CartActionTypes.CART_PRODUCTS_SUCCESS,
        payload: storageData,
      });
    } catch (error) {
      dispatch({
        type: CartActionTypes.CART_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке корзины',
      });
    }
  };
};

export const addCartProduct = (product: ICartProduct) => {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({ type: CartActionTypes.ADD_CART_PRODUCT, payload: product });
    } catch (error) {
      dispatch({
        type: CartActionTypes.CART_PRODUCTS_ERROR,
        payload: `${error}`,
      });
    }
  };
};

export const deleteCartProduct = (productId: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    try {
      dispatch({
        type: CartActionTypes.REMOVE_CART_PRODUCT,
        payload: productId,
      });
    } catch (error) {
      dispatch({
        type: CartActionTypes.CART_PRODUCTS_ERROR,
        payload: `${error}`,
      });
    }
  };
};
