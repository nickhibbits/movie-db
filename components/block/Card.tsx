import React from "react";
import { PrimaryImage, ReleaseYear } from "$/types/movieResults";
import Link from "next/link";

import classes from "$/styles/Card.module.scss";

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
  console.log("🔴 TODO", "style Ui");
  return (
    <Link href={`/movie/${id}`}>
      <div className={classes.cardBlock}>
        <img
          src={`${primaryImage && primaryImage.url}`}
          alt={`${titleText.text} cover`}
          className="image"
        />
        <p className={classes.cardText}>{titleText.text}</p>
        <p className={classes.cardText}>{releaseYear.year}</p>
      </div>
    </Link>
  );
}

export default Card;
