import { ExtendedCast } from "$/types/titleInfo";

import React from "react";

import ScrollContainer from "$/components/composition/ScrollContainer";
import Card from "$/components/block/Card";

import layoutClasses from "$/styles/composition/Layout.module.scss";
import { alternateActorSvg } from "$/constants";

function Actors({ extendedCast }: { extendedCast: ExtendedCast }) {
  return (
    <ScrollContainer>
      <h2 className="subheader">Cast</h2>
      <ul className={layoutClasses.cardLayout}>
        {extendedCast.map((cast) => {
          return (
            <li key={cast.name.id}>
              <Card
                baseUrl="/actors"
                alternateSvg={alternateActorSvg}
                id={cast.name.id}
                primaryImage={cast.name.primaryImage}
                secondaryText={
                  cast.characters
                    ? cast.characters[0].name
                    : "Character name Unavailable"
                }
                mainText={cast.name.nameText.text}
              />
            </li>
          );
        })}
      </ul>
    </ScrollContainer>
  );
}

export default Actors;
