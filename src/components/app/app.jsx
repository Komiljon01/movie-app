import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Navbar from "../navbar/navbar";
import Loader from "../loader/loader";

const NotFoundPage = lazy(() => import("../../pages/not-found-page"));
const HomePage = lazy(() => import("../../pages/home-page"));
const TrendingPage = lazy(() => import("../../pages/trending-page"));
const PopularPage = lazy(() => import("../../pages/popular-page"));
const DetailedPage = lazy(() => import("../../pages/detailed-page"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/movie/:movieID" element={<DetailedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
