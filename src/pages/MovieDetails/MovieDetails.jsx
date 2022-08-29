import { getMovieById } from '../../services/apiGetMovies';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Main, Img, Wrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const [movieById, setMovieById] = useState([]);

  useEffect(() => {
    const getApiMovieById = id => {
      try {
        getMovieById(id).then(res => setMovieById(res));
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

  let src = !poster_path
    ? 'https://stringfixer.com/files/951711496.jpg'
    : `https://image.tmdb.org/t/p/w300/${poster_path}`;
  const vote = (vote_average * 100) / 10;
  const goBack = () => navigate(from);
  return (
    <Main>
      <button onClick={goBack}>Go back</button>
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
          <Link state={{ from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </Main>
  );
};

MovieDetails.propTypes = {
  movieById: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.array,
    genres: PropTypes.array,
  }),
};

export default MovieDetails;
