import React from 'react';
import './Card.scss';

function Card({ img }) {
  return (
    <div>
      <img className="card" src={img} alt="cover" />
    </div>
  );
}

export default Card;
