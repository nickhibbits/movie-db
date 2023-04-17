import React from "react";
import { Result } from "$/types/movieResults";

import Card from "$/components/block/Card";

import ScrollContainer from "$/components/utility/ScrollContainer";
import Layout from "$/components/composition/Layout";
import TitleRow from "$/components/composition/TitleRow";

import layoutClasses from "$/styles/Layout.module.scss";

function Results({ results }: { results: any }) {
  const _results = JSON.parse(results);
  console.log("_results", _results);

  return (
    <Layout>
      {Object.entries(_results).map((result, i) => {
        let titleType = "Other";

        switch (result[0]) {
          case "movie":
            titleType = "Movies";
            break;

          case "tvMovie":
            titleType = "TV Movies";
            break;
          case "podcastSeries":
            titleType = "Podcasts";
            break;
          case "tvSeries":
            titleType = "TV Series";
            break;
        }

        result[0];

        const titles = result[1] as Result[];

        if (titles.length > 0) {
          return (
            <TitleRow key={titleType}>
              <h2 className={layoutClasses.titleRowHeader}>{titleType}</h2>
              <ScrollContainer>
                <ul className={layoutClasses.cardLayout}>
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
        }
      })}
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
