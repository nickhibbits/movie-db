import { useRouter } from "next/router";

import Link from "next/link";
import React from "react";

function MovieId() {
  const router = useRouter();
  const movieId = router.query.movieId;

  console.log("movieId", movieId);
  // console.log("🔴 TODO", "fetch movie");
  // console.log("🔴 TODO", "develop UI");

  return (
    <div>
      MovieId
      <Link href="/actor/test-actor-id"> Fetch Movie</Link>
    </div>
  );
}

export default MovieId;
