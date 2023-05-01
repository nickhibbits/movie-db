import TitleRow from "$/components/block/TitleRow";
import { Result, _ResultsByTitleType } from "$/types/titleResults";
import React from "react";

function ResultsByTitleType({ results }: { results: _ResultsByTitleType }) {
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

        if (titles.length > 0) {
          return <TitleRow titleType={titleType} titles={titles} />;
        }
      })}
    </>
  );
}

export default ResultsByTitleType;
