export type Result = {
  id: string;
  primaryImage: PrimaryImage;
  releaseDate: {
    day: number;
    month: number;
    year: number;
  };
  releaseYear: ReleaseYear;
  titleText: { text: string };
  titleType: {
    canHaveEpisodes: boolean;
    categories: any[];
    id: string;
    isEpisode: boolean;
    isSeries: boolean;
    text: string;
  };
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
