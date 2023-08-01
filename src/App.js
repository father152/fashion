import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Golovna } from "./components/golovna/Golovna.jsx";
import { Catalogue } from "./components/header/catalogue/Catalogue.jsx";
import { Fashion } from "./components/header/fashion/Fashion.jsx";
import { Favorite } from "./components/header/favorite/Favorite.jsx";
import { Lifestyle } from "./components/header/lifestyle/Lifestyle.jsx";
import { Signup } from "./components/header/signup/Signup.jsx";
import {Hoodiessweatshirt} from './components/golovna/Hoodiessweatshirt'
import {Coatsparkas} from './components/golovna/Coatsparkas'
import {Teesshirt} from './components/golovna/Teesshirt.jsx'


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

        <Route path="/" element={<Layout />}>
          <Route path="hoodiessweatshirt" element={<Hoodiessweatshirt />} />
          <Route path="coatsparkas" element={<Coatsparkas />} />
          <Route path="teesshirt" element={<Teesshirt />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
