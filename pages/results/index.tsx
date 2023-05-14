import React from "react";
import { _ResultsByTitleType } from "$/types/titleResults";

import Layout from "$/components/composition/Layout";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results) as _ResultsByTitleType;

  const noResults = Object.values(_results).flat().length === 0;

  return (
    <Layout>
      {noResults ? (
        <div> No results for this search</div>
      ) : (
        <ResultsByTitleType results={_results} />
      )}
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
