import { Result } from "$/types/titleResults";

export interface TitleInfo extends Result {
  genres: { text: string; id: string }[];
  plot: { plotText: { plainText: string } };
  ratingsSummary: { aggregateRating: number };
  runtime: { seconds: number };
}
