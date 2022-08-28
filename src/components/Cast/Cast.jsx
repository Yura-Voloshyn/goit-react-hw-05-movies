import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/apiGetMovies';
import { Img } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);
  console.log(movieCredits);
  useEffect(() => {
    const getApiMovieCreditsById = async id => {
      try {
        const apiMovieById = await getMovieCredits(id);
        setMovieCredits(apiMovieById);
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

export default Cast;
