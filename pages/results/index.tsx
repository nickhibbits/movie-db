import React from "react";
import Layout from "$/components/composition/Layout";
import Card from "$/components/block/Card";
import { Result } from "$/types/movieResults";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results).results as Result[];

  console.log("_results", _results);

  return (
    <Layout>
      <ul>
        {_results.map((_, index) => {
          console.log("🔴 TODO", "develop Ui");
          console.log("🔴 TODO", "fix width/layout issue");
          const { id, primaryImage, releaseYear, titleText } = _results[index];

          return (
            <li key={id}>
              <Card
                id={id}
                primaryImage={primaryImage}
                releaseYear={releaseYear}
                titleText={titleText}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
