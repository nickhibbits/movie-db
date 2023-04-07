import React, { useRef } from "react";
import classes from "$/styles/Search.module.scss";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();

  const title = useRef<HTMLInputElement>(null);

  async function handleSelect(e: any) {
    if (e.key === "Enter") {
      const res = await fetch(
        `./api/movies/searchTitles?title=${
          title.current && title.current.value
        }`
      ).then((res) => res.json());

      console.log("🔴 TODO", "revisit best practices for error handling");

      router.push({
        pathname: "/results",
        query: { results: JSON.stringify(res) },
      });
    }
  }

  return (
    <div className="center column">
      <input
        className={classes.input}
        type="text"
        placeholder="Search movies by title"
        ref={title}
        onKeyDown={(e) => handleSelect(e)}
      />
    </div>
  );
}

export default Search;
