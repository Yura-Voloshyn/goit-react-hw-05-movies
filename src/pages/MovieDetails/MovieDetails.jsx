import { getMovieById } from '../../services/apiGetMovies';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Main, Img, Wrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();

  const [movieById, setMovieById] = useState({});

  useEffect(() => {
    const getApiMovieById = async id => {
      try {
        const apiMovieById = await getMovieById(id);
        setMovieById(apiMovieById);
      } catch (error) {
        console.log(error);
      }
    };
    getApiMovieById(id);
  }, [id]);

  const { original_title, genres, overview, poster_path, vote_average } =
    movieById;
  const genresForRender = genres
    ? genres.map(genre => genre.name).join(', ')
    : null;
  console.log(genresForRender);
  let src =
    poster_path === null
      ? 'https://stringfixer.com/files/951711496.jpg'
      : `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const vote = (vote_average * 100) / 10;

  return (
    <Main>
      <Wrapper>
        <Img src={src} alt={original_title} />
        <div>
          <h1>{original_title}</h1>
          <p>User Score: {vote.toFixed()} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresForRender !== null && genresForRender}</p>
        </div>
      </Wrapper>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </Main>
  );
};

export default MovieDetails;
