import "./hero.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import Loader from "../loader/loader";
import Error from "../error/error";
import useMovieService from "../../services/movie-service";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [movie, setMovie] = useState(null);

  const { getRandomMovie, loading, error, clearError } = useMovieService();

  useEffect(() => updateMovie(), []);

  const updateMovie = () => {
    clearError();
    getRandomMovie().then((res) => setMovie(res));
  };

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
          sapiente sit placeat minus dolorum, magnam, tempora quas neque quasi,
          sequi odit doloremque velit saepe autem facilis! Laudantium
          consequatur accusantium mollitia.
        </p>

        <div className="hero__info-buttons">
          <button className="btn btn__secondary" onClick={updateMovie}>
            Random Movie
          </button>
        </div>
      </div>
      <div className="hero__movie">
        {loadingContent}
        {errorContent}
        {content}
      </div>
    </section>
  );
};

export default Hero;

const Content = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src={movie.backdrop_path} alt={movie.name} />

      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>
          {movie.describtion && movie.describtion.length > 200
            ? `${movie.describtion.slice(0, 200)}...`
            : movie.describtion}
        </p>

        <button
          className="btn btn__primary"
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
