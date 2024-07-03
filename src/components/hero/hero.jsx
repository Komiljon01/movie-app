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
    this.getMovie();
  }

  getMovie = () => {
    this.movieService
      .getRandomMovie()
      .then((res) => this.setState({ movie: res }))
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movie, loading, error } = this.state;

    const loadingContent = loading && <Loader />;
    const errorContent = error && <Error />;
    const content = !(loading || error) && <Content movie={movie} />;

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
          <button className="btn btn__primary">Details</button>
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

      <div>
        <button className="btn btn__secondary">Random movie</button>
        <button className="btn btn__primary">Details</button>
      </div>
    </div>
  </>
);
