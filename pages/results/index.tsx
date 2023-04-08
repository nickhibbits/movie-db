import React from "react";
import { Result } from "$/types/movieResults";

import Card from "$/components/block/Card";
import Layout from "$/components/composition/Layout";

import classes from "$/styles/Layout.module.scss";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results).results as Result[];

  console.log("_results", _results);

  return (
    <ul className={classes.cardLayout}>
      {_results.map((_, index) => {
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
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
