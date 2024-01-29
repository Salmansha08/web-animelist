import React from 'react';
import { CaretDoubleUp } from '@phosphor-icons/react';

const ScrollUp = ({ onClick }) => {
  return (
    <button className="floating-button hover:bg-color-primary bg-color-accent" onClick={onClick}>
      <CaretDoubleUp size={24} className="text-color-dark" />
    </button>
  );
};

export default ScrollUp;
