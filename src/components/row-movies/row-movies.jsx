import RowMoviesItem from "../row-movies-item/row-movies-item";
import "./row-movies.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MovieInfo from "../movie-info/movie-info";
import React from "react";
import MovieService from "../../services/movie-service";

class RowMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      movies: [],
    };
    this.movieService = new MovieService();
  }

  componentDidMount() {
    this.getTrandingMovies();
  }

  getTrandingMovies = () =>
    this.movieService
      .getTrandingMovies()
      .then((res) => this.setState({ movies: res }));

  onToggleOpen = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { open, movies } = this.state;

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
        <div className="rowmovies__lists">
          {movies.map((movie) => (
            <RowMoviesItem
              key={movie.id}
              movie={movie}
              onToggleOpen={this.onToggleOpen}
            />
          ))}
        </div>

        <Modal open={open} onClose={this.onToggleOpen}>
          <MovieInfo />
        </Modal>
      </div>
    );
  }
}

export default RowMovies;
