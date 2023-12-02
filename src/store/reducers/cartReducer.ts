import { CartAction, CartActionTypes, CartState } from '../../types/cart';

const initialState: CartState = {
  cartProductsList: [],
  loading: false,
  error: null,
};

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.SET_STORAGE_DATA:
      return { ...state, loading: true, cartProductsList: [] };
    case CartActionTypes.CART_PRODUCTS_SUCCESS:
      return { ...state, loading: false, cartProductsList: action.payload };
    case CartActionTypes.CART_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CartActionTypes.ADD_CART_PRODUCT:
      return {
        ...state,
        loading: false,
        cartProductsList: [...state.cartProductsList, action.payload],
      };
    case CartActionTypes.REMOVE_CART_PRODUCT:
      return {
        ...state,
        loading: false,
        cartProductsList: state.cartProductsList.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
