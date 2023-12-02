import React from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
type ProductItemProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  inCart: boolean;
};

import { useCartActions } from '../../hooks/useActions';

export const ProductItem: React.FC<ProductItemProps> = ({
  img,
  title,
  price,
  id,
  inCart,
}) => {
  const { addCartProduct } = useCartActions();
  const { cartProductsList } = useTypedSelector((state) => state.cartProducts);

  const handleAddCartBtnClick = () => {
    addCartProduct({ id: id, name: title, price: price });
    localStorage.setItem('cart', JSON.stringify(cartProductsList));
  };

  return (
    <li className='product-item'>
      <img className='product-item__img' src={img} alt={title} />
      <div>
        <h3 className='product-item__title'>{title}</h3>
        <p className='product-item__price'>{price} р</p>
      </div>

      {!inCart && (
        <button onClick={handleAddCartBtnClick} className='btn btn_red'>
          Добавить в корзину
        </button>
      )}
      {inCart && (
        <Link to='/cart'>
          <button className='btn btn_purple'>Перейти к оплате</button>
        </Link>
      )}
    </li>
  );
};
