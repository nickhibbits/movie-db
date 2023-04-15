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

function makeUpperCase(word: string) {
  const splitLetters = word.split("");
  splitLetters[0] = splitLetters[0].toUpperCase();

  return splitLetters.join("");
}
