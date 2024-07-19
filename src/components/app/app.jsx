// Components
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import RowMovies from "../row-movies/row-movies";
import ErrorBoundary from "../error-boundary/error-boundary";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <RowMovies />
      </ErrorBoundary>
    </div>
  );
}

export default App;
