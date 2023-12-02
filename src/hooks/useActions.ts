import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActionCreators from '../store/action-creators/products';
import * as CartActionCreators from '../store/action-creators/cart';

export const useProductActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductActionCreators, dispatch);
};
export const useCartActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CartActionCreators, dispatch);
};
