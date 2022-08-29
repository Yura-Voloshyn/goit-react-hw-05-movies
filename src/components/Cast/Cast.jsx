import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAdditionalInfo } from 'services/apiGetMovies';
import { Img } from './Cast.styled';
import PropTypes from 'prop-types';

const Cast = () => {
  const { id } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const getApiMovieCreditsById = async id => {
      try {
        const keyword = 'credits';
        const apiMovieById = await getMovieAdditionalInfo(id, keyword);
        setMovieCredits(apiMovieById.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getApiMovieCreditsById(id);
  }, [id]);
  //   const { name, character, profile_path } = movieCredits;

  const element = movieCredits.map(({ name, character, profile_path, id }) => (
    <li key={id}>
      <Img
        src={
          profile_path === null
            ? 'https://stringfixer.com/files/951711496.jpg'
            : `https://image.tmdb.org/t/p/w342/${profile_path}`
        }
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return (
    <section>
      <div>
        <ul>{element}</ul>
      </div>
    </section>
  );
};

Cast.propTypes = {
  elements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
  }),
};

export default Cast;
