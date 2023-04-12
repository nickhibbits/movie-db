import React, { useRef } from "react";
import classes from "$/styles/Search.module.scss";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();

  const title = useRef<HTMLInputElement>(null);

  async function handleSelect(e: any) {
    e.preventDefault();
    if (e.type === "submit") {
      try {
        const res = await fetch(
          `./api/movies/searchTitles?title=${
            title.current && title.current.value
          }`
        ).then((res) => res.json());

        if (!res.ok) {
          console.log("badResponse", res);
          throw new Error("Bad Response", { cause: res });
        }

        console.log("🔴 TODO", "extract this flow into dedicated function");

        router.push({
          pathname: "/results",
          query: { results: JSON.stringify(res.body) },
        });
      } catch (error) {
        console.log("🔴 TODO", "create 404 page");
      }
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
