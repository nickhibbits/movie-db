import { fetchData } from "$/utils/fetchData";
import { TitleInfo } from "$/types/titleInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Link from "next/link";
import Layout from "$/components/composition/Layout";
import Card from "$/components/block/Card";

import layoutClasses from "$/styles/Layout.module.scss";
import ScrollContainer from "$/components/composition/ScrollContainer";

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
      <img src={titleInfo?.primaryImage.url} alt="" />
      <section className="title-info-wrapper">
        <h1>
          {titleInfo?.titleText.text} ({titleInfo?.releaseYear.year})
        </h1>
        <div className="main-info">
          <div className="rating"></div>
          <p className="release-date">
            {titleInfo?.releaseDate.month}/{titleInfo?.releaseDate.day}/
            {titleInfo?.releaseDate.year}
          </p>
          {titleInfo?.genres &&
            titleInfo.genres.length > 0 &&
            titleInfo?.genres.map((genre) => {
              return <p className="genre">{genre.text}</p>;
            })}
          {/* convert seconds to hours and minutes */}
          <p className="runtime">{titleInfo?.runtime.seconds}</p>
        </div>
      </section>
      <section className="extended-info-wrapper">
        <h2>Overview</h2>
        <p className="plot">{titleInfo?.plot.plotText.plainText}</p>
      </section>
      <ScrollContainer>
        <h2>Cast</h2>
        <ul className={layoutClasses.cardLayout}>
          {titleInfo?.extendedCast &&
            titleInfo.extendedCast.length > 0 &&
            titleInfo.extendedCast.map((cast) => {
              return (
                <Card
                  baseUrl="/actors/"
                  alternateSvg="./motion-picture-film-svgrepo-com.svg"
                  id={cast.name.id}
                  primaryImage={cast.name.primaryImage}
                  secondaryText={cast.characters[0].name}
                  mainText={cast.name.nameText.text}
                />
              );
            })}
        </ul>
      </ScrollContainer>
      <Link href="/actor/test-actor-id"></Link>
    </Layout>
  );
}

export default TitleId;
