import { NextApiRequest, NextApiResponse } from "next";

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
    .then(async (res: any) => {
      if (!(res.status >= 200 && res.status < 400)) {
        const body = await res.json();
        throw new Error(`❌ ${body.message}`);
      }

      return res.json();
    })
    .then((json: any) => json)
    .catch((err: any) => {
      res.send({ ok: false, body: err });
    });

  res.send({ ok: true, body: response });
}
