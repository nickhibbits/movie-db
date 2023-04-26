import { TitleInfo } from "$/types/titleInfo";
import React from "react";

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
    <>
      <img src={primaryImage.url} alt="" />
      <section className="title-info-wrapper">
        <h1>
          {titleText.text} ({releaseYear.year})
        </h1>
        <div className="main-info">
          <div className="rating"></div>
          <p className="release-date">
            {releaseDate.month}/{releaseDate.day}/{releaseDate.year}
          </p>
          {genres &&
            genres.length > 0 &&
            genres.map((genre) => {
              return <p className="genre">{genre.text}</p>;
            })}
          <p className="runtime">{runtime.seconds}</p>
        </div>
      </section>
      <section className="extended-info-wrapper">
        <h2>Overview</h2>
        <p className="plot">{plot.plotText.plainText}</p>
      </section>
    </>
  );
}

export default TitleIdInfo;
