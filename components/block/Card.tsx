import React from "react";
import classes from "$/styles/Card.module.scss";
import { PrimaryImage, ReleaseYear } from "$/types/movieResults";
import Link from "next/link";

function Card({
  id,
  primaryImage,
  releaseYear,
  titleText,
}: {
  id: string;
  primaryImage: PrimaryImage | null;
  releaseYear: ReleaseYear;
  titleText: { text: string };
}) {
  return (
    <Link href={`/movie/${id}`}>
      <div className={classes.cardBlock}>
        <div>{primaryImage && primaryImage.url}</div>
        <div>{releaseYear.year}</div>
        <div>{titleText.text}</div>
      </div>
    </Link>
  );
}

export default Card;
