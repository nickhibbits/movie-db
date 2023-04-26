import { fetchData } from "$/utils/fetchData";
import { TitleInfo } from "$/types/titleInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Actors from "$/components/block/Actors";
import Layout from "$/components/composition/Layout";
import TitleIdInfo from "$/components/block/TitleIdInfo";

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
      const { characters, episodeCredits, name } = castMember.node;

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

        setTitleInfo(data);
      };

      getTitleInfo();
    }
  }, [titleId]);

  return (
    <Layout>
      {titleInfo && <TitleIdInfo titleInfo={titleInfo} />}

      {titleInfo?.extendedCast && titleInfo.extendedCast.length > 0 && (
        <Actors extendedCast={titleInfo.extendedCast} />
      )}
    </Layout>
  );
}

export default TitleId;
