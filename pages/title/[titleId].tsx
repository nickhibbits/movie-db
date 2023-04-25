import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Link from "next/link";
import { fetchData } from "$/utils/fetchData";
import Layout from "$/components/composition/Layout";

function TitleId() {
  const [titleInfo, setTitleInfo] = useState();
  const router = useRouter();
  const titleId = router.query.titleId;

  useEffect(() => {
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
    <Layout>
      <Link href="/actor/test-actor-id">{titleInfo}</Link>
    </Layout>
  );
}

export default TitleId;
