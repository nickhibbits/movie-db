import React from "react";
import { Result } from "$/types/movieResults";

import Card from "$/components/block/Card";

import classes from "$/styles/Layout.module.scss";
import ScrollContainer from "$/components/utility/ScrollContainer";
import Layout from "$/components/composition/Layout";
import TitleRow from "$/components/composition/TitleRow";

function Results({ results }: { results: any }) {
  const _results = JSON.parse(results);
  console.log("_results", _results);

  return (
    <Layout>
      {Object.entries(_results).map((result, i) => {
        const titleType = result[0];
        const titles = result[1] as Result[];

        return (
          <TitleRow key={titleType}>
            <h2>{titleType}</h2>
            <ScrollContainer>
              <ul className={classes.cardLayout}>
                {titles.map((title) => {
                  const { id, primaryImage, releaseYear, titleText } = title;

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
            </ScrollContainer>
          </TitleRow>
        );
      })}
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
