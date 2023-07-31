import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import {Golovna} from './components/golovna/Golovna.jsx'
import { Catalogue } from "./components/header/catalogue/Catalogue.jsx";
import { Fashion } from "./components/header/fashion/Fashion.jsx";
import { Favorite } from "./components/header/favorite/Favorite.jsx";
import { Lifestyle } from "./components/header/lifestyle/Lifestyle.jsx";
import { Signup } from "./components/header/signup/Signup.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Golovna />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="signup" element={<Signup />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
