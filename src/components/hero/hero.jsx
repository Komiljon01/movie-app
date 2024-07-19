import "./hero.scss";
import "../../styles/button.scss";

import React from "react";
import MovieService from "../../services/movie-service";
import Loader from "../loader/loader";
import Error from "../error/error";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      error: false,
    };
    this.movieService = new MovieService();
  }

  componentDidMount() {
    this.updateMovie();
  }

  updateMovie = () => {
    this.setState({ loading: true });
    this.movieService
      .getRandomMovie()
      .then((res) => this.setState({ movie: res }))
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movie, loading, error } = this.state;

    const loadingContent = loading ? <Loader /> : null;
    const errorContent = error ? <Error /> : null;
    const content = !(loading || error) ? <Content movie={movie} /> : null;

    return (
      <section className="hero">
        <div className="hero__info">
          <h2>FIND MOVIES</h2>
          <h1>TV shows and more</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            sapiente sit placeat minus dolorum, magnam, tempora quas neque
            quasi, sequi odit doloremque velit saepe autem facilis! Laudantium
            consequatur accusantium mollitia.
          </p>

          <div className="hero__info-buttons">
            <button className="btn btn__secondary" onClick={this.updateMovie}>
              Random Movie
            </button>
            <button className="btn btn__primary">Details</button>
          </div>
        </div>
        <div className="hero__movie">
          {loadingContent}
          {errorContent}
          {content}
        </div>
      </section>
    );
  }
}

export default Hero;

const Content = ({ movie }) => (
  <>
    <img src={movie.backdrop_path} alt={movie.name} />

    <div className="hero__movie-descr">
      <h2>{movie.name}</h2>
      <p>
        {movie.describtion && movie.describtion.length > 200
          ? `${movie.describtion.slice(0, 200)}...`
          : movie.describtion}
      </p>

      <button className="btn btn__primary">Details</button>
    </div>
  </>
);
