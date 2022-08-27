import { getTrendingMovies } from '../../services/apiGetMovies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //   console.log(trendingMovies);
  useEffect(() => {
    const getApiTrendingMovies = async () => {
      try {
        const apiTrendingMovies = await getTrendingMovies();
        setTrendingMovies(apiTrendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getApiTrendingMovies();
  }, []);
  const elements = trendingMovies.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title ?? name}</Link>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default MovieList;
