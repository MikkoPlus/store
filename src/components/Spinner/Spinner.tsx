import React from 'react';
import spinner from '../../icons/spinner.gif';
import './Spinner.css';

type SpinnerProps = {
  isLoading: boolean;
};

export const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return (
    <img
      className={`spinner spinner_${isLoading ? 'visible' : 'hidden'}`}
      src={spinner}
      alt='spinner'
    />
  );
};
