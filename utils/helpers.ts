import { TitleInfo } from "$/types/titleInfo";

export function formatTitle(title: string) {
  const splitTitle = title.split(" ");

  if (splitTitle.length > 1) {
    const final = splitTitle
      .map((word, i) => {
        return makeUpperCase(word);
      })
      .join(" ");

    return final;
  }

  return makeUpperCase(title);
}

export function formatTitleInfo(data: any) {
  const {
    genres,
    id,
    plot,
    primaryImage,
    ratingsSummary,
    releaseDate,
    releaseYear,
    runtime,
    titleText,
    titleType,
  } = data.base_info;

  const extendedCast = data.extendedCast.cast.edges.map((castMember: any) => {
    const { characters, episodeCredits, name } = castMember.node;

    return { characters, episodeCredits, name };
  });
  let titleInfo: TitleInfo = {
    extendedCast,
    genres,
    id,
    plot,
    primaryImage,
    ratingsSummary,
    releaseDate,
    releaseYear,
    runtime,
    titleText,
    titleType,
  };

  return titleInfo;
}

function makeUpperCase(word: string) {
  const splitLetters = word.split("");
  splitLetters[0] = splitLetters[0].toUpperCase();

  return splitLetters.join("");
}
