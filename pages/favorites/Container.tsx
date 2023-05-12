import Layout from "$/components/composition/Layout";
import {
  FavoritesContextWrapper,
  useFavoritesContext,
} from "$/components/context/state";
import React from "react";

function Container() {
  const context = useFavoritesContext();

  console.log("container", context);

  if (!!context) {
    const { favorites } = context;

    console.log("favorites", favorites);
    return <Layout>{/* <ResultsByTitleType results={favorites} /> */}</Layout>;
  }

  return <div className="loading"> loading</div>;
}

export default Container;
