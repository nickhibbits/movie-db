import React from "react";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";
import Layout from "$/components/composition/Layout";

import { _ResultsByTitleType } from "$/types/titleResults";

function Favorites({ results }: { results: _ResultsByTitleType }) {
  return (
    <Layout>
      <ResultsByTitleType results={results} />
    </Layout>
  );
}

export default Favorites;
