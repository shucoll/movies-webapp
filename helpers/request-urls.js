const API_KEY = process.env.NEXT_PUBLIC_TMD_API_KEY;

const request_urls = {
  trendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  thrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  animatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  scienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}

export default request_urls;