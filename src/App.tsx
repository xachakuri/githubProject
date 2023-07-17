import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import Layout from "@/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
