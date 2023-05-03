import React from "react";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";
import Layout from "$/components/composition/Layout";

import { _ResultsByTitleType } from "$/types/titleResults";
import { useFavoritesContext } from "$/components/context/state";

// function Favorites({ results }: { results: _ResultsByTitleType }) {
function Favorites() {
  const context = useFavoritesContext();

  const [favorites = [], setFavorites] = context || [];

  console.log("favorites", favorites);

  return <Layout>{/* <ResultsByTitleType results={favorites} /> */}</Layout>;
}

export default Favorites;
