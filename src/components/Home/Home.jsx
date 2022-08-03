import React from 'react';
import './Home.scss';
import Row from '../Row/Row';

// const Card = ({ img }) => {
//   console.log(img);
//   <img className="card" src="{img}" alt="cover" />;
// };

function Home() {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={'Popular on Netflix'} />
      <Row title={'Movies'} />
      <Row title={'TV Shows'} />
      <Row title={'Recently Viewed'} />
      <Row title={'My List'} />
    </section>
  );
}

export default Home;
