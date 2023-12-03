import React from 'react';
import { useCartActions } from '../../hooks/useActions';
import './CartItem.css';

type CartItemProps = {
  name: string;
  price: number;
  id: number;
};

export const CartItem: React.FC<CartItemProps> = ({ name, price, id }) => {
  const { deleteCartProduct } = useCartActions();
  const handleDeleteBtnClick = () => {
    deleteCartProduct(id);
  };

  return (
    <li className='cart-item'>
      <p className='cart-item__name'>{name}</p>
      <p className='cart-item__price'>{price}&nbsp;р</p>
      <button onClick={handleDeleteBtnClick} className='cart-item__delete' />
    </li>
  );
};
