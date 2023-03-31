import { useRouter } from "next/router";

import Link from "next/link";
import React from "react";

function MovieId() {
  const router = useRouter();
  const movieId = router.query.movieId;

  console.log("movieId", movieId);

  return (
    <div>
      MovieId
      <Link href="/actor/test-actor-id"> Actor Link</Link>
    </div>
  );
}

export default MovieId;
