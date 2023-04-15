import React, { useRef } from "react";
import classes from "$/styles/Search.module.scss";
import { useRouter } from "next/router";
import { formatTitle } from "$/utils/helpers";

function Search() {
  const router = useRouter();

  const title = useRef<HTMLInputElement>(null);

  async function handleSelect(e: any) {
    e.preventDefault();
    if (e.type === "submit") {
      console.log("🔴 TODO", "extract this flow into dedicated function");

      try {
        const res = await fetch(
          `./api/movies/searchTitles?title=${
            title.current && formatTitle(title.current.value)
          }`
        ).then((res) => res.json());
        console.log("res", res);

        if (!res.ok) {
          throw new Error("Bad Response", { cause: res });
        }

        // router.push({
        //   pathname: "/results",
        //   query: { results: JSON.stringify(res.body) },
        // });
      } catch (error) {
        console.log("🔴 TODO create 404 page, redirect", error);
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
