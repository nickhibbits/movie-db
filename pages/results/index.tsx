import React from "react";
import { Result } from "$/types/titleResults";

import Card from "$/components/block/Card";
import Layout from "$/components/composition/Layout";
import ScrollContainer from "$/components/composition/ScrollContainer";

import layoutClasses from "$/styles/composition/Layout.module.scss";
import TitleRow from "$/components/block/TitleRow";

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results);
  console.log("_results", _results);

  return (
    <Layout>
      {Object.entries(_results).map((result) => {
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
          return <TitleRow titleType={titleType} titles={titles} />;
        }
      })}
    </Layout>
  );
}

Results.getInitialProps = ({ query }: any) => {
  return { results: query.results };
};

export default Results;
