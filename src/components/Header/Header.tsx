import React from 'react';
import logo from '../../icons/logo.svg';
import { Menu } from '../Menu/Menu';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          <Menu />
        </div>
      </header>
      <div className='header-area' />
    </>
  );
};

export default React.memo(Header);
