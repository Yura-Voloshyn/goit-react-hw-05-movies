import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b28dcafbfbdc99f3059a27aaeb93fed6';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieAdditionalInfo = async (id, keyword) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/${keyword}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMoviesBySearchQuery = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  return response.data.results;
};
