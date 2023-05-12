import Layout from "$/components/composition/Layout";
import { AppContext } from "$/components/context/state";
import React, { useContext } from "react";

function Container() {
  const { state, dispatch } = useContext(AppContext);

  console.log("state", state);

  if (!!state.favorites) {
    const { favorites } = state;
    console.log("favorites", favorites);

    console.log("favorites", favorites);
    return <Layout>{/* <ResultsByTitleType results={favorites} /> */}</Layout>;
  }

  return <div className="loading"> loading</div>;
}

export default Container;
