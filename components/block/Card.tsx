import React from "react";
import classes from "$/styles/Card.module.scss";
import { PrimaryImage, ReleaseYear } from "$/types/movieResults";

function Card({
  primaryImage,
  releaseYear,
  titleText,
}: {
  primaryImage: PrimaryImage | null;
  releaseYear: ReleaseYear;
  titleText: { text: string };
}) {
  console.log("primaryImage", primaryImage);
  return (
    <div className={classes.cardBlock}>
      <div>{primaryImage && primaryImage.url}</div>
      <div>{releaseYear.year}</div>
      <div>{titleText.text}</div>
    </div>
  );
}

export default Card;
