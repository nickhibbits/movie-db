import { _ResultsByTitleType } from "$/types/titleResults";
import { useAuth } from "$/state/AppContextWrapper";
import { useEffect, useState } from "react";

import { TitleInfo } from "$/types/titleInfo";
import { fetchData } from "$/utils/fetchData";
import { formatTitleInfo } from "$/utils/helpers";

import TitleRow from "$/components/block/TitleRow";

import layout from "$/styles/composition/Layout.module.scss";

// function Favorites({ results }: { results: _ResultsByTitleType }) {
function Favorites() {
  const { user } = useAuth();
  const [results, setResults] = useState<TitleInfo[]>();

  useEffect(() => {
    if (user && user.favorites) {
      const urls = user.favorites.map((favoriteId) => {
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

  if (results && results.length !== 0)
    return (
      <main className={layout.layout_base}>
        <TitleRow titleType="Favorites" titles={results} />
      </main>
    );

  if (user && user.favorites.length === 0) {
    <div className="">No Favorites</div>;
  }

  return <div>Loading</div>;
}

export default Favorites;
