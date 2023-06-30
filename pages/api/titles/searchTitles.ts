import { handleMultipleResponses } from "$/utils/fetchData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;
  const { title } = queryParams;

  const titleTypes = ["movie", "tvSeries", "tvMovie", "podcastSeries"];
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?titleType=`;

  const data = await handleMultipleResponses(url, titleTypes);
  console.log("data", data);

  res.send(data);
}
