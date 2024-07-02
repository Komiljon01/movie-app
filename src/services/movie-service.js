class MovieService {
  _apiBase = "https://api.themoviedb.org/3";
  _apiLang = "language=en-US";
  _apiKey = "api_key=56d00439cb5428bc974329f5344df83d";
  _apiImg = "https://image.tmdb.org/t/p/original";

  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  };

  getPopularMovies = async () => {
    return await this.getResource(
      `${this._apiBase}/movie/popular?${this._apiLang}&${this._apiKey}`
    );
  };

  getTrandingMovies = async () => {
    return await this.getResource(
      `${this._apiBase}/movie/top_rated?${this._apiLang}&${this._apiKey}`
    );
  };

  getDetailedMovie = async (id) => {
    return await this.getResource(
      `${this._apiBase}/movie/${id}?${this._apiLang}&${this._apiKey}`
    );
  };
}

export default MovieService;
