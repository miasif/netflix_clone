import React, { useEffect } from 'react';
import './Home.scss';
import Row from '../Row/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import requests from '../../request';

const apiKey = '351ec7e0469bc090984be23f0d785874';
const url = 'https://api.themoviedb.org/3';

function Home() {
  // const [upcomingMovie, setUpcomingMovie] = React.useState([]);
  // const [popularMovie, setPopularMovie] = React.useState([]);
  // const [topRatedMovie, setTopRatedMovie] = React.useState([]);
  // const [nowPlayingMovie, setNowPlayingMovie] = React.useState([]);
  const [genre, setGenre] = React.useState([]);

  useEffect(() => {
    const fetchgenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      // console.log(genres);
    };
    fetchgenre();
  }, []);
  return (
    <section className="home">
      {/* <div
        className="banner"
        style={{
          backgroundImage: popularMovie[0]
            ? `url(${`${imgUrl}/${popularMovie[0].poster_path}`})`
            : 'rgb(16, 16, 16)',
        }}
      >
        {popularMovie[0] && <h1>{popularMovie[0].original_title}</h1>}
        {popularMovie[0] && <p>{popularMovie[0].overview}</p>}
        <div>
          <button>
            <BiPlay /> Play
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div> */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
