import { handleMultipleResponses } from "$/utils/fetchData";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;
  const { titleId } = queryParams;
  console.log("titleId", titleId);

  const options = ["base_info", "extendedCast"];
  const url = `https://moviesdatabase.p.rapidapi.com/titles/${titleId}?info=`;

  const data = await handleMultipleResponses(url, options);

  res.send(data);
}
