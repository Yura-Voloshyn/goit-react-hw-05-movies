import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import Home from '../../pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
// import MovieDetails from '../../pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div>
      <Layout />;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
export default App;
