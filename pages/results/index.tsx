import React from "react";
import { _ResultsByTitleType } from "$/types/titleResults";

import Layout from "$/components/composition/Layout";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results) as _ResultsByTitleType;
  console.log("_results", _results);

  return (
    <Layout>
      <ResultsByTitleType results={_results} />
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
