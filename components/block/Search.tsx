import React, { useRef } from "react";
import classes from "$/styles/Search.module.scss";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();

  const title = useRef<HTMLInputElement>(null);

  async function handleSelect(e: any) {
    if (e.key === "Enter") {
      console.log("Enter key pressed");

      const res = await fetch(
        `./api/movies/searchTitles?title=${
          title.current && title.current.value
        }`
      ).then((res) => res.json());

      console.log("res", res);

      router.push({
        pathname: "/results",
        query: { results: JSON.stringify(res) },
      });
    }
  }

  return (
    <>
      <input
        className={classes.input}
        type="text"
        placeholder="Search movies by title"
        ref={title}
        onKeyDown={(e) => handleSelect(e)}
      />
    </>
  );
}

export default Search;
