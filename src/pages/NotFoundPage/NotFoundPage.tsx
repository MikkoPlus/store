import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className='not-found-page'>
      <h1 className='not-found-page__title'>
        404 <br />
        Страница не найдена
      </h1>
      <button
        onClick={() => navigate(-1)}
        className='btn btn_purple not-found-page__btn'
      >
        назад
      </button>
    </section>
  );
};
