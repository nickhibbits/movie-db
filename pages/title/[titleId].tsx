import { useRouter } from "next/router";

import Link from "next/link";
import React from "react";

function TitleId() {
  const router = useRouter();
  const titleId = router.query.titleId;

  console.log("titleId", titleId);
  // console.log("🔴 TODO", "fetch movie");
  // console.log("🔴 TODO", "develop UI");

  return (
    <div>
      MovieId
      <Link href="/actor/test-actor-id"> Fetch Movie</Link>
    </div>
  );
}

export default TitleId;
