import React from "react";
import Layout from "$/components/composition/Layout";
import Card from "$/components/block/Card";
import { Result } from "$/types/movieResults";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results).results as Result[];

  console.log("_results", _results);

  return (
    <>
      <Layout>
        <ul>
          {_results.map((result, index) => {
            console.log("🔴 TODO", "develop Ui with relevant result data");

            const { id, primaryImage, releaseYear, titleText } =
              _results[index];
            console.log("primaryImage", primaryImage);
            return (
              <li key={id}>
                <Card
                  primaryImage={primaryImage}
                  releaseYear={releaseYear}
                  titleText={titleText}
                />
              </li>
            );
          })}
        </ul>
      </Layout>
    </>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
