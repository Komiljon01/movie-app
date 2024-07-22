import { useHttp } from "../hooks/use-http";

const useMovieService = () => {
  const _apiBase = "https://api.themoviedb.org/3";
  const _apiLang = "language=en-US";
  const _apiKey = "api_key=56d00439cb5428bc974329f5344df83d";
  const _apiImg = "https://image.tmdb.org/t/p/original";
  const _apiPage = 1;

  const { request, loading, error, clearError } = useHttp();

  const getPopularMovies = async () => {
    return await request(`${_apiBase}/movie/popular?${_apiLang}&${_apiKey}`);
  };

  const getTrandingMovies = async (page = _apiPage) => {
    const response = await request(
      `${_apiBase}/movie/top_rated?${_apiLang}&page=${page}=1&${_apiKey}`
    );
    const movies = response.results;
    return movies && movies.map((movie) => _transferMovie(movie));
  };

  const getDetailedMovie = async (id) => {
    const movie = await request(
      `${_apiBase}/movie/${id}?${_apiLang}&${_apiKey}`
    );
    return _transferMovie(movie);
  };

  const getRandomMovie = async () => {
    const res = await getPopularMovies();
    const movie = res.results[Math.floor(Math.random() * res.results.length)];
    return _transferMovie(movie);
  };

  const _transferMovie = (movie) => {
    return {
      id: movie.id,
      name: movie.original_title,
      describtion: movie.overview,
      poster_path: `${_apiImg}${movie.poster_path}`,
      backdrop_path: `${_apiImg}${movie.backdrop_path}`,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  };

  return {
    getTrandingMovies,
    getDetailedMovie,
    getRandomMovie,
    loading,
    error,
    clearError,
  };
};

export default useMovieService;
