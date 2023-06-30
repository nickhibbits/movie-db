import TitleRow from "$/components/block/TitleRow";
import { Result, _ResultsByTitleType } from "$/types/titleResults";
import React from "react";

// import classes from "$/styles/composition/Layout.module.scss";

function ResultsByTitleType({ results }: { results: _ResultsByTitleType }) {
  console.log("results", results);
  return (
    <>
      {Object.entries(results).map((result) => {
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

        console.log("titles 💥", titles);

        if (titles.length > 0) {
          return <TitleRow titleType={titleType} titles={titles} />;
        }
      })}
    </>
  );
}

export default ResultsByTitleType;
