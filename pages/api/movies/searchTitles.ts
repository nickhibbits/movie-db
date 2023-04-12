import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("getAllMovies");

  const queryParams = req.query;
  console.log("queryParams", queryParams);
  const { title } = queryParams;

  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=true`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bdb7b83c24mshf8804a003e89a94p17aee2jsn6362771be13e",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options)
    // .then((res: any) => {
    //   throw new Error({ statusCode: 501, title: "testError" });
    // })
    .then((res: any) => res.json())
    .then((json: any) => json)
    .catch((err: any) => {
      console.error("error:" + err);
      res.send({ ok: false, body: err });
    });

  // console.log("response", response);

  res.send({ ok: true, body: response });
}
