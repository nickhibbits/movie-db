import React from "react";
import { PrimaryImage, ReleaseYear } from "$/types/movieResults";
import Link from "next/link";

import classes from "$/styles/Card.module.scss";
import Image from "next/image";

function Card({
  id,
  primaryImage,
  releaseYear,
  titleText,
}: {
  id: string;
  primaryImage: PrimaryImage | null;
  releaseYear: ReleaseYear | null;
  titleText: { text: string };
}) {
  console.log("🔴 TODO", "add titleType");
  console.log("🔴 TODO", "sort results with movies at the top");
  return (
    <Link href={`/movie/${id}`}>
      <div className={classes.cardBlock}>
        <img
          src={
            primaryImage
              ? `${primaryImage.url}`
              : `./motion-picture-film-svgrepo-com.svg`
          }
          alt={`${titleText.text} cover`}
          className={primaryImage ? classes.image : classes.svg}
        />

        <p className={classes.cardText}>{titleText.text}</p>
        <p className={classes.cardText}>
          {releaseYear ? releaseYear.year : ""}
        </p>
      </div>
    </Link>
  );
}

export default Card;
