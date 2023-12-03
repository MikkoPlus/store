import React from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Cart.css';

export const Cart: React.FC = () => {
  const { cartProductsList } = useTypedSelector((state) => state.cartProducts);

  const isCartEmpty = cartProductsList.length === 0 ?? false;
  const finalCost = cartProductsList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const handleCartBtnClick = () => {
    console.log(
      'products: ',
      cartProductsList,
      'products count: ',
      cartProductsList.length,
      'products final price:',
      finalCost
    );
  };

  return (
    <section className='cart'>
      <div className='cart__container'>
        <h2 className='title'>Корзина</h2>
        {isCartEmpty && <h2 className='cart__title'>Корзина пуста</h2>}
        {!isCartEmpty && (
          <div className='cart__content'>
            <ul className='cart__list'>
              {cartProductsList.map((cartItem) => {
                return (
                  <CartItem
                    name={cartItem.name}
                    price={cartItem.price}
                    key={cartItem.id}
                    id={cartItem.id}
                  />
                );
              })}
            </ul>
            <div className='cart__total'>
              <p className='cart__result'>Итого</p>
              <p className='cart__price'>{finalCost} р</p>
              <button
                onClick={handleCartBtnClick}
                className='btn btn_purple cart__redirect'
              >
                Оплатить
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
