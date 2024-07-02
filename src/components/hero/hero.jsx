import "./hero.scss";
import "../../styles/button.scss";
import React from "react";
import MovieService from "../../services/movie-service";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      describtion: null,
      poster_path: null,
      backdrop_path: null,
    };
    this.movieService = new MovieService();
    this.getMovie();
  }

  getMovie = () => {
    this.movieService.getRandomMovie().then((res) => this.setState(res));
  };

  render() {
    const { name, describtion, backdrop_path } = this.state;
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
          <img src={backdrop_path} alt={name} />

          <div className="hero__movie-descr">
            <h2>{name}</h2>
            <p>
              {describtion && describtion.length > 200
                ? `${describtion.slice(0, 200)}...`
                : describtion}
            </p>

            <div>
              <button className="btn btn__secondary" onClick={this.getMovie}>
                Random movie
              </button>
              <button className="btn btn__primary">Details</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
