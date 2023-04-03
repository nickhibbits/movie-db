import React from "react";
import classes from "$/styles/Search.module.scss";

type SearchResultProps = {
  results: string[];
  handleSelect: any;
};

function SearchResults({ results, handleSelect }: SearchResultProps) {
  return (
    <ul className={classes.searchResults}>
      {results.map((result) => {
        return (
          <li
            className={classes.searchResult}
            onClick={() => handleSelect(result)}
          >
            {result}
          </li>
        );
      })}
    </ul>
  );
}

export default SearchResults;
