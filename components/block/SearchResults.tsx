import React from "react";

type SearchResultProps = {
  results: string[];
};

function SearchResults({ results }: SearchResultProps) {
  return (
    <>
      {results.map((result) => {
        return result;
      })}
    </>
  );
}

export default SearchResults;
