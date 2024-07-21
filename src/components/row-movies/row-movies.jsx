import "./row-movies.scss";
import "react-responsive-modal/styles.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import { Modal } from "react-responsive-modal";
import RowMoviesItem from "../row-movies-item/row-movies-item";
import MovieInfo from "../movie-info/movie-info";
import MovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";

const RowMovies = () => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieID, setMovieID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(2);
  const [newItemLoading, setNewItemLoading] = useState(false);

  const movieService = new MovieService();

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const onOpen = (id) => {
    setMovieID(id);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const getTrandingMovies = (page) =>
    movieService
      .getTrandingMovies(page)
      .then((res) => setMovies((movies) => [...movies, ...res]))
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
        setNewItemLoading(false);
      });

  const getMoreMovies = () => {
    setNewItemLoading(true);
    setPage((page) => page + 1);
    getTrandingMovies(page);
  };

  const loadingContent = loading ? <Loader /> : null;
  const errorContent = error ? <Error /> : null;
  const content = !(loading || error) ? (
    <Content movies={movies} onOpen={onOpen} />
  ) : null;

  return (
    <div className="rowmovies">
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="./tranding.svg" alt="rowmovies__top-title" />
          <h1>Tranding</h1>
        </div>

        <div className="hr"></div>
        <a href="#">See more</a>
      </div>

      {loadingContent}
      {errorContent}
      {content}

      <div className="rowmovies__loadmore">
        <button
          className="btn btn__secondary"
          onClick={getMoreMovies}
          disabled={newItemLoading}
        >
          Load more
        </button>
      </div>

      <Modal open={open} onClose={onClose}>
        <MovieInfo movieID={movieID} />
      </Modal>
    </div>
  );
};

export default RowMovies;

const Content = ({ movies, onOpen }) => (
  <div className="rowmovies__lists">
    {movies.map((movie) => (
      <RowMoviesItem key={movie.id} movie={movie} onOpen={onOpen} />
    ))}
  </div>
);

Content.propTypes = {
  movies: PropTypes.array,
  onOpen: PropTypes.func,
};
