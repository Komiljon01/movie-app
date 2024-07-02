import "./hero.scss";
import "../../styles/button.scss";

const Hero = () => {
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
        <button className="btn btn__primary">Details</button>
      </div>
      <div className="hero__movie">
        <img src="./image1.svg" alt="img" />

        <div className="hero__movie-descr">
          <h2>Madellin</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            laboriosam id aperiam tempore dolorem fuga, qui iure veniam,
            repellat in, labore distinctio numquam excepturi? Quam aspernatur
            sint fuga debitis earum?
          </p>

          <div>
            <button className="btn btn__secondary">Random movie</button>
            <button className="btn btn__primary">Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
