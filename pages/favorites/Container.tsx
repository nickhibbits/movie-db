import Layout from "$/components/composition/Layout";
import { AppContext } from "$/state/AppContextWrapper";
import React, { useContext } from "react";

function Container() {
  const { favorites, setFavorites } = useContext(AppContext);

  if (favorites) {
    console.log("favorites", favorites);

    console.log("favorites", favorites);
    return <Layout>{/* <ResultsByTitleType results={favorites} /> */}</Layout>;
  }

  return <div className="loading"> loading</div>;
}

export default Container;
