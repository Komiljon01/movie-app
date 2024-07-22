import "./detailed-movie.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useMovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";
import PropTypes from "prop-types";

function DetailedMovie() {
  const { movieID } = useParams();
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
    <>
      {initialContent}
      {loadingContent}
      {errorContent}
      {content}
    </>
  );
}

export default DetailedMovie;

const Content = ({ movie }) => (
  <div className="detailedmovie">
    <div className="detailedmovie__img">
      <img src={movie.poster_path} alt={movie.name} />
    </div>
    <div className="detailedmovie__descr">
      <h1>{movie.name}</h1>
      <p>{movie.describtion}</p>

      <div className="detailedmovie__descr-info">
        <img src="/date.svg" alt="date icon" />
        <p>{movie.release_date}</p>
        <div className="dot" />
        <p>{movie.vote_average}</p>
        <img src="/star.svg" alt="star icon" />
      </div>
    </div>
  </div>
);

Content.propTypes = {
  movie: PropTypes.object,
};
