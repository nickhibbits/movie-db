import React from "react";
import { PrimaryImage } from "$/types/titleResults";
import Link from "next/link";

import classes from "$/styles/Card.module.scss";

function Card({
  baseUrl,
  alternateSvg,
  id,
  primaryImage,
  secondaryText,
  mainText,
}: {
  baseUrl: string;
  alternateSvg: string;
  id: string;
  primaryImage: PrimaryImage | null;
  mainText: string;
  secondaryText: string | number;
}) {
  return (
    <Link href={`${baseUrl}/${id}`}>
      <div className={classes.cardBlock}>
        <img
          src={primaryImage ? primaryImage.url : alternateSvg}
          alt={`${mainText} cover`}
          className={primaryImage ? classes.image : classes.svg}
        />

        <p className={classes.cardText}>{mainText}</p>
        <p className={classes.cardText}>{secondaryText}</p>
      </div>
    </Link>
  );
}

export default Card;
