import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "@/components/Header";

import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
};

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
