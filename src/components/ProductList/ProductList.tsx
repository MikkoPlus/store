import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Spinner } from '../Spinner/Spinner';
import { ProductItem } from '../ProductItem/ProductItem';
import { useProductActions } from '../../hooks/useActions';
import './ProductList.css';

export const ProductList: React.FC = () => {
  const { products, error, loading } = useTypedSelector(
    (state) => state.products
  );

  const { cartProductsList } = useTypedSelector((state) => state.cartProducts);

  const { fetchProducts } = useProductActions();

  const handleReloadBtnClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    fetchProducts();
  };

  if (error) {
    return (
      <div className='error'>
        <h1 className='error__text'>{error}</h1>
        <button
          className='btn btn_red error__btn'
          onClick={handleReloadBtnClick}
        >
          Попробовать загрузить товары снова
        </button>
      </div>
    );
  }

  return (
    <>
      {loading && <Spinner isLoading={loading} />}
      <ul className='product-list'>
        {products.length > 0 &&
          products.map((product) => {
            const { id, image, name, price } = product;
            return (
              <ProductItem
                id={id}
                key={id}
                title={name}
                price={price}
                img={image}
                inCart={cartProductsList.some((cartItem) => cartItem.id === id)}
              />
            );
          })}
      </ul>
    </>
  );
};
