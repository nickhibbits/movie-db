import { TitleInfo } from "$/types/titleInfo";
import React from "react";

import layout from "$/styles/composition/Layout.module.scss";

function TitleIdInfo({ titleInfo }: { titleInfo: TitleInfo }) {
  const {
    genres,
    plot,
    primaryImage,
    releaseDate,
    releaseYear,
    runtime,
    titleText,
  } = titleInfo;

  return (
    <div className={layout.titleIdInfoContainer}>
      <div className={layout.imageWrapper}>
        <img src={primaryImage.url} alt="" />
      </div>
      <div className={layout.infoContainer}>
        <section className="main-info-wrapper">
          <h1 className="header">
            {titleText.text} {releaseYear && `(${releaseYear.year})`}
          </h1>
          <div className={layout.mainInfo}>
            {/* <div className="rating"></div> */}
            <p className="release-date">
              {releaseDate &&
                `${releaseDate.month}/${releaseDate.day}/${releaseDate.year}`}
            </p>
            {genres &&
              genres.length > 0 &&
              genres.map((genre) => {
                return <p className="genre">{genre.text}</p>;
              })}
            <p className="runtime">{runtime && runtime.seconds}</p>
          </div>
        </section>
        <section className={layout.extendedInfo}>
          <h2 className="subheader">Overview</h2>
          <p className="plot">{plot.plotText.plainText}</p>
        </section>
      </div>
    </div>
  );
}

export default TitleIdInfo;
