import React from "react";
import { Result } from "$/types/movieResults";

import Card from "$/components/block/Card";

import classes from "$/styles/Layout.module.scss";

function Results({ results }: { results: any }) {
  const _results = JSON.parse(results);

  console.log("🔴 TODO", "build out filter feature for different titleTypes");
  console.log("🔴 TODO", "revisit styles on cards");

  const movies = Object.values(_results)[0] as Result[];

  return (
    <ul className={classes.cardLayout}>
      {movies.map((_, index) => {
        const { id, primaryImage, releaseYear, titleText } = _;

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
