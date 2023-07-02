import { fetchData } from "$/utils/fetchData";
import { formatTitleInfo } from "$/utils/helpers";
import { TitleInfo } from "$/types/titleInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Actors from "$/components/block/Actors";
import TitleIdInfo from "$/components/block/TitleIdInfo";

import layout from "$/styles/composition/Layout.module.scss";

function TitleId() {
  const [titleInfo, setTitleInfo] = useState<TitleInfo>();
  const router = useRouter();
  const titleId = router.query.titleId;

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
    <main className={layout.title_id}>
      <div className="image_wrapper">
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${titleInfo && titleInfo.primaryImage.url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "120rem",
            opacity: "0.2",
            height: "100vh",
            width: "110vw",
            filter: "blur(8px)",
          }}
        />
      </div>
      <section className={layout.layout_base}>
        {titleInfo && <TitleIdInfo titleInfo={titleInfo} />}

        {titleInfo?.extendedCast && titleInfo.extendedCast.length > 0 && (
          <Actors extendedCast={titleInfo.extendedCast} />
        )}
      </section>
    </main>
  );
}

export default TitleId;
