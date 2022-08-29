import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAdditionalInfo } from 'services/apiGetMovies';
import PropTypes from 'prop-types';

const Reviews = () => {
  const { id } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    const getApiMovieReviewsById = async id => {
      try {
        const keyword = 'reviews';
        const apiMovieById = await getMovieAdditionalInfo(id, keyword);
        setMovieReview(apiMovieById.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiMovieReviewsById(id);
  }, [id]);
  const element = movieReview.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));
  return (
    <section>
      <div>
        <ul>
          {element.length ? (
            element
          ) : (
            <p>No one has left a review for this movie yet</p>
          )}
        </ul>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Reviews;
