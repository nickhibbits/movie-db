import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchData } from "$/utils/fetchData";

import Link from "next/link";
import Layout from "$/components/composition/Layout";
import { TitleInfo } from "$/types/titleInfo";

function TitleId() {
  const [titleInfo, setTitleInfo] = useState<TitleInfo>();
  const router = useRouter();
  const titleId = router.query.titleId;

  const formatTitleInfo = (data: any) => {
    const {
      genres,
      id,
      plot,
      primaryImage,
      ratingsSummary,
      releaseDate,
      releaseYear,
      runtime,
      titleText,
      titleType,
    } = data.base_info;

    const extendedCast = data.extendedCast.cast.edges.map((castMember: any) => {
      const { characters, episodeCredits, name } = castMember;

      return { characters, episodeCredits, name };
    });
    let titleInfo: TitleInfo = {
      extendedCast,
      genres,
      id,
      plot,
      primaryImage,
      ratingsSummary,
      releaseDate,
      releaseYear,
      runtime,
      titleText,
      titleType,
    };

    return titleInfo;
  };

  useEffect(() => {
    if (titleId) {
      const getTitleInfo = async () => {
        const url = `/api/titles/searchTitlesById?titleId=${titleId}`;
        const data = await fetchData(url).then((data) => formatTitleInfo(data));

        console.log("data", data);
        console.log("🟢 titleInfo set");
        return data;
      };

      getTitleInfo();
    }
  }, [titleId]);

  console.log("titleInfo", titleInfo);

  return (
    <Layout>
      <img src={titleInfo?.primaryImage.url} alt="" />

      <Link href="/actor/test-actor-id">Ello</Link>
    </Layout>
  );
}

export default TitleId;
