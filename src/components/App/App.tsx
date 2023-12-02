import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cart } from '../../pages/Cart/Cart';
import Header from '../Header/Header';
import { Catalog } from '../../pages/Catalog/Catalog';
import { useCartActions, useProductActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './App.css';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const App: React.FC = () => {
  const { fetchCartProducts } = useCartActions();
  const { fetchProducts } = useProductActions();
  const { cartProductsList } = useTypedSelector((state) => state.cartProducts);

  useEffect(() => {
    fetchProducts();
    const localStorageData = localStorage.getItem('cart');
    if (localStorageData) {
      fetchCartProducts(JSON.parse(localStorageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProductsList));
  }, [cartProductsList]);

  return (
    <div className='app'>
      <Header />
      <main className='app__content'>
        <Routes>
          <Route path='/store' element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};
