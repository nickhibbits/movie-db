import { getResponse } from "$/pages/api/titles/searchTitles";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;
  const { titleId } = queryParams;
  console.log("titleId", titleId);

  const url = `'https://moviesdatabase.p.rapidapi.com/titles/${titleId}`;

  const response = await getResponse(url).then((data) => res.send(data));

  console.log("💥response", response);

  return response;
}
