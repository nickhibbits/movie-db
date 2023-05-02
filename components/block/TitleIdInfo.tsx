import { TitleInfo } from "$/types/titleInfo";
import React from "react";

import classes from "$/styles/block/TitleIdInfo.module.scss";

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

  function saveToFavorites() {
    console.log("save to favorites");
  }

  return (
    <div className={classes.titleIdInfoContainer}>
      <div className={classes.imageWrapper}>
        <img src={primaryImage.url} alt="movie cover" />
      </div>
      <div className={classes.infoContainer}>
        <section className="main-info-wrapper">
          <h1 className="header">
            {titleText.text} {releaseYear && `(${releaseYear.year})`}
          </h1>
          <div className={classes.mainInfo}>
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
        <section className={classes.iconsWrapper}>
          {/* <div className="rating"></div> */}
          <div
            className={classes.iconWrapper}
            onClick={() => saveToFavorites()}
          >
            <img src="/heart-circle-svgrepo-com.svg" alt="favorite icon" />
          </div>
        </section>
        <section className={classes.extendedInfoWrapper}>
          <h2 className="subheader">Overview</h2>
          <p className="plot">{plot.plotText.plainText}</p>
        </section>
      </div>
    </div>
  );
}

export default TitleIdInfo;
