import { PrimaryImage, Result } from "$/types/titleResults";

export interface TitleInfo extends Result {
  id: string;
  genres: { text: string; id: string }[];
  plot: { plotText: { plainText: string } };
  ratingsSummary: { aggregateRating: number };
  runtime: { seconds: number };
  extendedCast: ExtendedCast;
}

export type ExtendedCast = CastMember[];

type CastMember = {
  characters: { name: string }[];
  episodeCredits: { total: number };
  name: { id: string; nameText: { text: string }; primaryImage: PrimaryImage };
};
