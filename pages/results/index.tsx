import { _ResultsByTitleType } from "$/types/titleResults";

import ResultsByTitleType from "$/pages/results/ResultsByTitleType";

import layout from "$/styles/composition/Layout.module.scss";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results) as _ResultsByTitleType;

  const noResults = Object.values(_results).flat().length === 0;

  return (
    <>
      {noResults ? (
        <div> No results for this search</div>
      ) : (
        <main className={layout.layout_base}>
          <ResultsByTitleType results={_results} />
        </main>
      )}
    </>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
