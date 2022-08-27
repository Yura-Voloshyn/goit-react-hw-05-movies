// https://api.themoviedb.org/3/movie/550?api_key=b28dcafbfbdc99f3059a27aaeb93fed6
//
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

import axios from 'axios';
// https://api.themoviedb.org/3/trending/all/day?api_key=b28dcafbfbdc99f3059a27aaeb93fed6
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b28dcafbfbdc99f3059a27aaeb93fed6';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );

  return response.data.results;
};
