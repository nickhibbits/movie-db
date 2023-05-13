import Layout from "$/components/composition/Layout";
import { useFavorites } from "$/state/AppContextWrapper";
import React from "react";

function Container() {
  const { favorites, setFavorites } = useFavorites();

  if (favorites) {
    console.log("favorites", favorites);

    console.log("favorites", favorites);
    return <Layout>{/* <ResultsByTitleType results={favorites} /> */}</Layout>;
  }

  return <div className="loading"> loading</div>;
}

export default Container;
