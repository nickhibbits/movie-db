import React, { useState, useRef, useEffect } from "react";
import classes from "$/styles/Search.module.scss";
import SearchResults from "$/components/block/SearchResults";

function Search() {
  const value = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<string[]>([]);

  function updateValues() {
    // implement logic to tap movie db
    // filter results from movie db
    // display filtered results by passing them as prop to SearchResults

    value.current && setResults([value.current.value]);

    // value.current && console.log(value.current.value);
  }

  return (
    <>
      <input
        className={classes.input}
        type="text"
        placeholder="Search movies and actors"
        ref={value}
        onInput={() => updateValues()}
      />
      {results.length > 0 && results[0] !== "" && (
        <SearchResults results={results} />
      )}
    </>
  );
}

export default Search;
