import { getTrendingMovies } from '../../services/apiGetMovies';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoaderWrapper from 'components/Loader/Loader';

const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(trendingMovies);
  useEffect(() => {
    const getApiTrendingMovies = async () => {
      try {
        setLoading(true);
        const apiTrendingMovies = await getTrendingMovies();
        setTrendingMovies(apiTrendingMovies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getApiTrendingMovies();
  }, []);
  const elements = trendingMovies.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title ?? name}</Link>
    </li>
  ));
  return (
    <ul>
      {loading && <LoaderWrapper />}
      {elements}
    </ul>
  );
};
export default MovieList;
