import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">To main page</Link>
    </main>
  );
};
export default PageNotFound;
