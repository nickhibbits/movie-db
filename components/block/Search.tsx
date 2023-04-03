import React, { FormEvent, useState, useRef } from "react";
import classes from "$/styles/Search.module.scss";
import SearchResults from "$/components/block/SearchResults";

function Search() {
  const value = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<string[]>([]);

  function updateValues() {
    // filter results from movie db

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
      <SearchResults results={results} />
    </>
  );
}

export default Search;
