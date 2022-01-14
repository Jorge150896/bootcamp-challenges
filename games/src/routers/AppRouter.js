import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GifGenerator from "../pages/GifGnerator";
import Emoji from "../pages/Emoji";
import HomePage from "../pages/HomePage";
import NavBar from "../components/Navbar/Navbar";
import PaintPage from "../pages/Paint";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/gif" exact={true} element={<GifGenerator />} />
        <Route path="/emoji" exact={true} element={<Emoji />} />
        <Route path="/paint" exact={true} element={<PaintPage />} />

        <Route path="*" exact={true} element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};
