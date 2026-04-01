import React from 'react';
import './Card.css';

const Card = ({
  children,
  className = '',
  isClickable = false,
  onClick,
  ...props
}) => {
  const cardClass = `card ${isClickable ? 'card-clickable' : ''} ${className}`;

  return (
    <div
      className={cardClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
