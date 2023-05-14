import { Result } from "$/types/titleResults";

import Card from "$/components/block/Card";
import ScrollContainer from "$/components/composition/ScrollContainer";
import React from "react";

import layoutClasses from "$/styles/composition/Layout.module.scss";
import { alternateMovieSvg } from "$/constants";

function TitleRow({
  titleType,
  titles,
}: {
  titleType: string;
  titles: Result[];
}) {
  return (
    <>
      <ScrollContainer>
        <h2 className="subheader">{titleType}</h2>
        <ul className={layoutClasses.cardLayout}>
          {titles.map((title) => {
            console.log("title", title);
            const { id, primaryImage, releaseYear, titleText } = title;

            return (
              <li key={id}>
                <Card
                  baseUrl="/title"
                  alternateSvg={alternateMovieSvg}
                  id={id}
                  primaryImage={primaryImage}
                  mainText={titleText.text}
                  secondaryText={releaseYear ? releaseYear.year : ""}
                />
              </li>
            );
          })}
        </ul>
      </ScrollContainer>
    </>
  );
}

export default TitleRow;
