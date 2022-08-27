import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<div>home</div>}></Route>
        <Route path="movies" element={<div>movies</div>}></Route>
      </Route>
    </Routes>
  );
};
