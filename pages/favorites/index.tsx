import Layout from "$/components/composition/Layout";
import ResultsByTitleType from "$/pages/results/ResultsByTitleType";
import { _ResultsByTitleType } from "$/types/titleResults";
import React from "react";

function Favorites({ results }: { results: _ResultsByTitleType }) {
  return (
    <Layout>
      <ResultsByTitleType results={results} />
    </Layout>
  );
}

export default Favorites;
