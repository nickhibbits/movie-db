import React, { useRef } from "react";
import { formatTitle } from "$/utils/helpers";
import { fetchData } from "$/utils/fetchData";

import classes from "$/styles/block/Search.module.scss";
import { useRouter } from "next/router";

function Search() {
  const title = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleSelect(e: any) {
    e.preventDefault();
    if (e.type === "submit") {
      const url = `./api/titles/searchTitles?title=${
        title.current && formatTitle(title.current.value)
      }`;

      const res = await fetchData(url);

      router.push({
        pathname: "/results",
        query: { results: JSON.stringify(res) },
      });
    }
  }

  return (
    <form className="center column" onSubmit={(e) => handleSelect(e)}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search titles"
        ref={title}
      />
      <button className={classes.button} type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
