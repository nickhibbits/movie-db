export type Result = {
  id: string;
  primaryImage: PrimaryImage;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  titleText: titleText;
  titleType: TitleType;
};

export type ReleaseDate = {
  day: number;
  month: number;
  year: number;
};

export type PrimaryImage = {
  caption: any;
  height: number;
  id: string;
  url: string;
  width: number;
};

export type ReleaseYear = {
  endYear: null;
  year: number;
};

export type TitleType = {
  canHaveEpisodes?: boolean;
  categories?: any[];
  id: string;
  isEpisode: boolean;
  isSeries: boolean;
  text: string;
};

export type titleText = {
  text: string;
};
