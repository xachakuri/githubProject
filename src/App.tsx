import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
};

export default App;
