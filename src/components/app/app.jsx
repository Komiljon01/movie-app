// Components
import HomePage from "../../pages/home-page";
import TrendingPage from "../../pages/trending-page";
import PopularPage from "../../pages/popular-page";
import DetailedPage from "../../pages/detailed-page";
import NotFoundPage from "../../pages/not-found-page";
import Navbar from "../navbar/navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/movie/:movieID" element={<DetailedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
