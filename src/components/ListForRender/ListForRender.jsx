import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListForRender = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title ?? name}
      </Link>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ListForRender;

ListForRender.defaultProps = {
  items: [],
};

ListForRender.propTypes = {
  elements: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
