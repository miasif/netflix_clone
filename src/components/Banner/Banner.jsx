import React, { useEffect } from 'react';
import axios from '../../axios';
import requests from '../../request';
import './Banner.scss';

function Banner() {
  const [movie, setMovie] = React.useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results[]);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <header
      className="banner"
      style={{
        background: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button>My List</button>
        </div>
        <h2 className="banner_description">{truncate(movie?.overview, 150)}</h2>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
