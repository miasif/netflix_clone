import React from 'react';
import Card from '../Card/Card';
import './Row.scss';

function Row({
  title,
  arr = [
    {
      img: 'https://i.pinimg.com/236x/5e/fa/63/5efa63b54ff96796a20db50004fddd86.jpg',
    },
  ],
}) {
  return (
    <div className="row">
      <h1>{title}</h1>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default Row;
