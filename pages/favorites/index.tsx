import React from "react";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";
import Layout from "$/components/composition/Layout";

import { _ResultsByTitleType } from "$/types/titleResults";
import { AppWrapper, useFavoritesContext } from "$/components/context/state";
import Container from "$/pages/favorites/Container";

// function Favorites({ results }: { results: _ResultsByTitleType }) {
function Favorites() {
  return (
    <AppWrapper>
      <Container />
    </AppWrapper>
  );
}

export default Favorites;
