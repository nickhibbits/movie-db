import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("getAllMovies");

  const queryParams = req.query;
  console.log("queryParams", queryParams);

  res.send(JSON.stringify("success"));
}
