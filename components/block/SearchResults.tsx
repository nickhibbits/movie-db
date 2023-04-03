import React from "react";
import classes from "$/styles/Search.module.scss";

type SearchResultProps = {
  results: string[];
};

function SearchResults({ results }: SearchResultProps) {
  return (
    <div className={classes.searchResults}>
      {results.map((result) => {
        return result;
      })}
    </div>
  );
}

export default SearchResults;
