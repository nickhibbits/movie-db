import { _ResultsByTitleType } from "$/types/titleResults";
import { useFavorites } from "$/state/AppContextWrapper";
import React, { useEffect, useState } from "react";

import Container from "$/pages/favorites/Container";
import { TitleInfo } from "$/types/titleInfo";
import { fetchData } from "$/utils/fetchData";
import { formatTitleInfo } from "$/utils/helpers";
import Layout from "$/components/composition/Layout";
import TitleRow from "$/components/block/TitleRow";

// function Favorites({ results }: { results: _ResultsByTitleType }) {
function Favorites() {
  const { favorites } = useFavorites();
  const [results, setResults] = useState<TitleInfo[]>();

  useEffect(() => {
    if (favorites) {
      const urls = favorites.map((favoriteId) => {
        return `/api/titles/searchTitlesById?titleId=${favoriteId}`;
      });

      const getTitles = async (urls: string[]) => {
        const responses = urls.map(async (url) => {
          return await fetchData(url).then((data) => formatTitleInfo(data));
        });

        const _results = await Promise.all(responses);

        console.log("_results", _results);

        setResults(_results);
      };

      getTitles(urls);
    }
  }, []);

  if (results) {
    return (
      <Layout>
        <TitleRow titleType="Favorites" titles={results} />
      </Layout>
    );
  }

  return <div>Loading</div>;
}

export default Favorites;
