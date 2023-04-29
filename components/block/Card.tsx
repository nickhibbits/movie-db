import Link from "next/link";
import React from "react";

import { PrimaryImage } from "$/types/titleResults";

import classes from "$/styles/block/Card.module.scss";

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
      <div
        className={`${classes.cardBlock} ${
          primaryImage ? classes.cardBlockImage : classes.cardBlockSvg
        }`}
      >
        <div
          className={primaryImage ? classes.imageWrapper : classes.svgWrapper}
        >
          <img
            src={primaryImage ? primaryImage.url : alternateSvg}
            alt={`${mainText} cover`}
            className={classes.primaryImage}
          />
        </div>
        <div className={classes.cardInfoWrapper}>
          <p className={classes.cardText}>{mainText}</p>
          <p className={classes.cardText}>{secondaryText}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
