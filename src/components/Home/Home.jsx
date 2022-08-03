import React, { useEffect } from 'react';
import './Home.scss';
import Row from '../Row/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiKey = '351ec7e0469bc090984be23f0d785874';
const url = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/original';

const upcoming = 'upcoming';
const popular = 'popular';
const topRated = 'top_rated';
const nowPlaying = 'now_playing';

function Home() {
  const [upcomingMovie, setUpcomingMovie] = React.useState([]);
  const [popularMovie, setPopularMovie] = React.useState([]);
  const [topRatedMovie, setTopRatedMovie] = React.useState([]);
  const [nowPlayingMovie, setNowPlayingMovie] = React.useState([]);
  const [genre, setGenre] = React.useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovie(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovie(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovie(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovie(results);
    };
    const fetchgenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      // console.log(genres);
    };
    fetchgenre();
    fetchUpcoming();
    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovie[0]
            ? `url(${`${imgUrl}/${popularMovie[0].poster_path}`})`
            : 'rgb(16, 16, 16)',
        }}
      >
        {/* <img src={`${imageUrl}/${popularMovie[0]?.poster_path}`} alt="banner" /> */}
      </div>
      <Row title={'Upcoming'} arr={upcomingMovie} />
      <Row title={'Now Playing'} arr={nowPlayingMovie} />
      <Row title={'Popular'} arr={popularMovie} />
      <Row title={'Top Rated'} arr={topRatedMovie} />

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
