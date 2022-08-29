import { getMoviesBySearchQuery } from '../../services/apiGetMovies';
import { useState, useEffect } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import ListForRender from '../../components/ListForRender/ListForRender';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  useEffect(() => {
    const getApiSearchMovies = async () => {
      try {
        setLoading(true);
        const apiSearchMovies = await getMoviesBySearchQuery(search);

        setMovieList(apiSearchMovies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      getApiSearchMovies();
    }
  }, [search]);
  const changeSearch = search => {
    setSearchParams({ search });
  };
  return (
    <main>
      <Searchbar onSubmit={changeSearch} />
      {loading && <Loader />}
      {movieList.length > 0 && <ListForRender items={movieList} />}
    </main>
  );
};

export default Movies;
