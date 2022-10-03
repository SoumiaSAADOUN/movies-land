import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./Pages/home";
import MovieDetail from "./Pages/movieDetail";
import { PUBLIC_URL } from "./constants/global";
function App() {
  return (
    <div className="xl:px-[150px] px-4 bg-DARK_GREY h-screen w-full pt-[24px]">
      <Router>
        <Link to="/">
          <img
            src={`${PUBLIC_URL}/assets/Logos/logo.svg`}
            className="h-[32px] w-[111px] mb-4 "
            alt="logo"
          />
        </Link>
        <Routes>
          <Route element={<Home />} exact path={`/`} />
          <Route element={<MovieDetail />} exact path={`/:movieID`} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
