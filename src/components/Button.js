import React from 'react';
import '../styles/global.css';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`popx-button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
