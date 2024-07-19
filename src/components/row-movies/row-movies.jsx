import RowMoviesItem from "../row-movies-item/row-movies-item";
import "./row-movies.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MovieInfo from "../movie-info/movie-info";
import React from "react";
import MovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";

class RowMovies extends React.Component {
  state = {
    open: false,
    movies: [],
    movieID: null,
    loading: true,
    error: false,
    page: 2,
    newItemLoading: false,
  };

  movieService = new MovieService();

  componentDidMount() {
    this.getTrandingMovies();
  }

  getTrandingMovies = (page) =>
    this.movieService
      .getTrandingMovies(page)
      .then((res) => {
        this.setState(({ movies }) => ({ movies: [...movies, ...res] }));
      })
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false, newItemLoading: false }));

  getMoreMovies = () => {
    this.setState(({ page }) => ({ page: page + 1, newItemLoading: true }));
    this.getTrandingMovies(this.state.page);
  };

  onOpen = (id) => {
    this.setState({ open: true, movieID: id });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, movies, movieID, loading, error, newItemLoading } =
      this.state;

    const loadingContent = loading ? <Loader /> : null;
    const errorContent = error ? <Error /> : null;
    const content = !(loading || error) ? (
      <Content movies={movies} onOpen={this.onOpen} />
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
            onClick={this.getMoreMovies}
            disabled={newItemLoading}
          >
            Load more
          </button>
        </div>

        <Modal open={open} onClose={this.onClose}>
          <MovieInfo movieID={movieID} />
        </Modal>
      </div>
    );
  }
}

export default RowMovies;

const Content = ({ movies, onOpen }) => (
  <div className="rowmovies__lists">
    {movies.map((movie) => (
      <RowMoviesItem key={movie.id} movie={movie} onOpen={onOpen} />
    ))}
  </div>
);
