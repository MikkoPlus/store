import React from 'react';
import { Link } from 'react-router-dom';
import cartIco from '../../icons/cart.svg';
import folderIco from '../../icons/folder.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Menu.css';

export const Menu: React.FC = () => {
  const { cartProductsList } = useTypedSelector((state) => state.cartProducts);

  return (
    <nav className='menu'>
      <Link className='menu__link' to='/'>
        <div className='menu__ico-container'>
          <img className='menu__ico' src={folderIco} alt='Каталог' />
        </div>
        <span className='menu__txt'>Каталог</span>
      </Link>
      <Link className='menu__link' to='/cart'>
        <div className='menu__ico-container'>
          <p className='menu__counter'>{cartProductsList.length}</p>
          <img className='menu__ico' src={cartIco} alt='Корзина' />
        </div>
        <span className='menu__txt'>Корзина</span>
      </Link>
    </nav>
  );
};
