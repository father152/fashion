import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Golovna } from "./components/golovna/Golovna.jsx";
import { Catalogue } from "./components/header/catalogue/Catalogue.jsx";
import { Fashion } from "./components/header/fashion/Fashion.jsx";
import { Favorite } from "./components/header/favorite/Favorite.jsx";
import { Lifestyle } from "./components/header/lifestyle/Lifestyle.jsx";
import { Signup } from "./components/header/signup/Signup.jsx";
import { Hoodiessweatshirt } from "./components/golovna/Hoodiessweatshirt";
import { Coatsparkas } from "./components/golovna/Coatsparkas";
import { Teesshirt } from "./components/golovna/Teesshirt.jsx";
import { Hm } from "./components/golovna/H&M/Hm.jsx";
import { Obey } from "./components/golovna/Obey/Obey.jsx";
import { Shopify } from "./components/golovna/Shopify/Shopify.jsx";

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

        <Route path="/" element={<Layout />}>
          <Route path="h&m" element={<Hm />} />
          <Route path="obey" element={<Obey />} />
          <Route path="shopify" element={<Shopify />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
