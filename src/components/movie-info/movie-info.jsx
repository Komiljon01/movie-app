import "./movie-info.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import Loader from "../loader/loader";
import Error from "../error/error";
import useMovieService from "../../services/movie-service";
import { useNavigate } from "react-router-dom";

const MovieInfo = ({ movieID }) => {
  const [movie, setMovie] = useState(null);

  const { getDetailedMovie, loading, error } = useMovieService();

  useEffect(() => {
    updateMovie();
  }, [movieID]);

  const updateMovie = () => {
    if (!movieID) return;

    getDetailedMovie(movieID).then((res) => setMovie(res));
  };

  const initialContent = movie || loading || error ? null : <Loader />;
  const loadingContent = loading ? <Loader /> : null;
  const errorContent = error ? <Error /> : null;
  const content = !(loading || error || !movie) ? (
    <Content movie={movie} />
  ) : null;

  return (
    <div className="movieinfo">
      {initialContent}
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

const Content = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src={movie.poster_path} alt={movie.name} />
      <div className="movieinfo__descr">
        <h1>{movie.name}</h1>
        <p>{movie.describtion}</p>
        <button
          className="btn btn__dark"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          Details
        </button>
      </div>
    </>
  );
};

Content.propTypes = {
  movie: PropTypes.object,
};
