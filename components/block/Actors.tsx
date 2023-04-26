import { ExtendedCast } from "$/types/titleInfo";

import React from "react";

import ScrollContainer from "$/components/composition/ScrollContainer";
import Card from "$/components/utility/Card";

import layoutClasses from "$/styles/Layout.module.scss";

function Actors({ extendedCast }: { extendedCast: ExtendedCast }) {
  return (
    <ScrollContainer>
      <h2>Cast</h2>
      <ul className={layoutClasses.cardLayout}>
        {extendedCast.map((cast) => {
          return (
            <li key={cast.name.id}>
              <Card
                baseUrl="/actors"
                alternateSvg="./motion-picture-film-svgrepo-com.svg"
                id={cast.name.id}
                primaryImage={cast.name.primaryImage}
                secondaryText={cast.characters[0].name}
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
