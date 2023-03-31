import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function ActorId() {
  const router = useRouter();
  const actorId = router.query.actorId;

  console.log("actorId", actorId);

  return (
    <div>
      ActorId
      <Link href="/movie/test-movie-id">Movie Link</Link>
    </div>
  );
}

export default ActorId;
