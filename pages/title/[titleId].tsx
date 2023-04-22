import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Link from "next/link";
import { fetchData } from "$/utils/fetchData";

function TitleId() {
  const [titleInfo, setTitleInfo] = useState();
  const router = useRouter();
  const titleId = router.query.titleId;

  useEffect(() => {
    console.log("titleId", titleId);

    if (titleId) {
      const getTitleInfo = async () => {
        const url = `/api/titles/searchTitlesById?titleId=${titleId}`;
        const data = await fetchData(url);

        console.log("data", data);
        return data;
      };

      getTitleInfo();
    }
  }, [titleId]);

  return (
    <div>
      MovieId
      <Link href="/actor/test-actor-id"> {titleInfo}</Link>
    </div>
  );
}

export default TitleId;
