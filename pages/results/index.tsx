import React from "react";
import { Result } from "$/types/titleResults";

import Card from "$/components/utility/Card";
import Layout from "$/components/composition/Layout";
import ScrollContainer from "$/components/composition/ScrollContainer";

import layoutClasses from "$/styles/Layout.module.scss";

function Results({ results }: { results: string }) {
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
            <ScrollContainer>
              <h2 className={layoutClasses.titleRowHeader}>{titleType}</h2>
              <ul className={layoutClasses.cardLayout}>
                {titles.map((title) => {
                  console.log("title", title);
                  const { id, primaryImage, releaseYear, titleText } = title;

                  return (
                    <li key={id}>
                      <Card
                        baseUrl="/title"
                        alternateSvg="./motion-picture-film-svgrepo-com.svg"
                        id={id}
                        primaryImage={primaryImage}
                        mainText={titleText.text}
                        secondaryText={releaseYear ? releaseYear.year : ""}
                      />
                    </li>
                  );
                })}
              </ul>
            </ScrollContainer>
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
