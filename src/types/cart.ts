export interface CartState {
  cartProductsList: ICartProduct[];
  loading: boolean;
  error: null | string;
}

export interface ICartProduct {
  id: number;
  name: string;
  price: number;
}

export enum CartActionTypes {
  CART_PRODUCTS_SUCCESS = 'CART_PRODUCTS_SUCCESS',
  CART_PRODUCTS_ERROR = 'CART_PRODUCTS_ERROR',
  SET_STORAGE_DATA = 'SET_STORAGE_DATA',
  ADD_CART_PRODUCT = 'ADD_CART_PRODUCT',
  REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT',
}

interface FetchCartProductsAction {
  type: CartActionTypes.SET_STORAGE_DATA;
}

interface cartProductsSuccessAction {
  type: CartActionTypes.CART_PRODUCTS_SUCCESS;
  payload: ICartProduct[];
}

interface cartProductsErrorAction {
  type: CartActionTypes.CART_PRODUCTS_ERROR;
  payload: string;
}

interface addCardProduct {
  type: CartActionTypes.ADD_CART_PRODUCT;
  payload: ICartProduct;
}

interface removeCardProduct {
  type: CartActionTypes.REMOVE_CART_PRODUCT;
  payload: number;
}

export type CartAction =
  | FetchCartProductsAction
  | cartProductsSuccessAction
  | cartProductsErrorAction
  | addCardProduct
  | removeCardProduct;
