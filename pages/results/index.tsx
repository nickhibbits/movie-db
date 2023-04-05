import React from "react";
import Layout from "$/components/composition/Layout";
import { useRouter } from "next/router";

type Result = {
  id: string;
  primaryImage: {
    caption: any;
    height: number;
    id: string;
    url: string;
    width: number;
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
  };
  releaseYear: { endYear: null; year: number };
  titleText: { text: string };
  titleType: {
    canHaveEpisodes: boolean;
    categories: any[];
    id: string;
    isEpisode: boolean;
    isSeries: boolean;
    text: string;
  };
};

function Results({ results }: { results: string }) {
  const _results = JSON.parse(results).results as Result[];

  console.log("_results", _results);

  return (
    <>
      <Layout>
        <ul>
          {_results.map((result, index) => {
            return <li>{_results[index].id}</li>;
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
