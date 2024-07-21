import "./movie-info.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import MovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";

const MovieInfo = ({ movieID }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const movieService = new MovieService();

  useEffect(() => {
    updateMovie();
  }, [movieID]);

  const updateMovie = () => {
    if (!movieID) return;

    setLoading(true);

    movieService
      .getDetailedMovie(movieID)
      .then((res) => setMovie(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  const loadingContent = loading ? <Loader /> : null;
  const errorContent = error ? <Error /> : null;
  const content = !(loadingContent || errorContent) ? (
    <Content movie={movie} />
  ) : null;

  return (
    <div className="movieinfo">
      {loadingContent}
      {errorContent}
      {content}
    </div>
  );
};

MovieInfo.propTypes = {
  movieID: PropTypes.number,
};

export default MovieInfo;

const Content = ({ movie }) => (
  <>
    <img src={movie.poster_path} alt={movie.name} />
    <div className="movieinfo__descr">
      <h1>{movie.name}</h1>
      <p>{movie.describtion}</p>
    </div>
  </>
);

Content.propTypes = {
  movie: PropTypes.object,
};
