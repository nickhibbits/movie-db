export type _ResultsByTitleType = {
  movie: Result[];
  pocastSeries: Result[];
  tvMovie: Result[];
  tvSeries: Result[];
};

export type Result = {
  id: string;
  primaryImage: PrimaryImage;
  releaseDate: ReleaseDate;
  releaseYear: ReleaseYear;
  titleText: TitleText;
  titleType: TitleType;
};

export type PrimaryImage = {
  caption?: any;
  height: number;
  id?: string;
  url: string;
  width: number;
};

type ReleaseDate = {
  day: number;
  month: number;
  year: number;
};

type ReleaseYear = {
  endYear: null;
  year: number;
};

type TitleType = {
  canHaveEpisodes?: boolean;
  categories?: any[];
  id: string;
  isEpisode: boolean;
  isSeries: boolean;
  text: string;
};

type TitleText = {
  text: string;
};
