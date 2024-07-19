import "./movie-info.scss";
import React from "react";
import PropTypes from "prop-types";

// Components
import MovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";

class MovieInfo extends React.Component {
  state = {
    movie: null,
    loading: true,
    error: false,
  };

  movieService = new MovieService();

  componentDidMount() {
    this.updateMovie();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movieID !== this.props.movieID) {
      this.updateMovie();
    }
  }

  updateMovie = () => {
    const { movieID } = this.props;

    if (!movieID) return;

    this.setState({ loading: true });

    this.movieService
      .getDetailedMovie(movieID)
      .then((res) => this.setState({ movie: res }))
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movie, loading, error } = this.state;

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
  }
}

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
