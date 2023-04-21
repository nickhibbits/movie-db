import React, { useRef } from "react";
import { formatTitle } from "$/utils/helpers";
import { fetchData } from "$/utils/fetchData";

import classes from "$/styles/Search.module.scss";

function Search() {
  const title = useRef<HTMLInputElement>(null);

  async function handleSelect(e: any) {
    e.preventDefault();
    if (e.type === "submit") {
      const url = `./api/titles/searchTitles?title=${
        title.current && formatTitle(title.current.value)
      }`;

      const redirectPage = "/results";

      fetchData(url, redirectPage);
    }
  }

  return (
    <form className="center column" onSubmit={(e) => handleSelect(e)}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search movies by title"
        ref={title}
      />
      <button className={classes.button} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
