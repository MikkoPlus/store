import React from 'react';
import { ProductList } from '../../components/ProductList/ProductList';
import './Catalog.css';

export const Catalog: React.FC = () => {
  return (
    <section className='catalog'>
      <h1 className='title'>Каталог товаров</h1>
      <ProductList />
    </section>
  );
};
