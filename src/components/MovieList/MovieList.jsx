import { getTrendingMovies } from '../../services/apiGetMovies';
import { useState, useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import ListForRender from 'components/ListForRender/ListForRender';

const MovieList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  //   console.log(trendingMovies);
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

  return (
    <>
      {' '}
      {loading && <Loader />}
      <ListForRender items={trendingMovies} />
    </>
  );
};
export default MovieList;
