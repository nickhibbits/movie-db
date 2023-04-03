import React, { useState, useRef, useEffect } from "react";
import classes from "$/styles/Search.module.scss";
import SearchResults from "$/components/block/SearchResults";

function Search() {
  const value = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<string[]>([]);

  function updateResults() {
    // feed input value into movie db call
    // filter results from movie db
    // display filtered results by passing them as prop to SearchResults

    value.current && setResults([value.current.value]);
  }

  async function handleSelect(result: string) {
    console.log("selected result", result);

    const res = await fetch(`./api/movies/getAllMovies?movie=${result}`).then(
      (res) => res.json()
    );

    console.log("res", res);
  }

  return (
    <>
      <input
        className={classes.input}
        type="text"
        placeholder="Search movies and actors"
        ref={value}
        onInput={() => updateResults()}
      />
      {results.length > 0 && results[0] !== "" && (
        <SearchResults results={results} handleSelect={handleSelect} />
      )}
    </>
  );
}

export default Search;
