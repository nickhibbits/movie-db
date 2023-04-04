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
    .then((res: any) => res.json())
    .then((json: any) => json)
    .catch((err: any) => console.error("error:" + err));

  console.log("response", response);

  res.send(response);
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log("getAllMovies");

//   const response = await fetch("https://moviesdatabase.p.rapidapi.com/titles", {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "bdb7b83c24mshf8804a003e89a94p17aee2jsn6362771be13e",
//       "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//     },
//   }).then((res) => {
//     console.log("res", res);
//     res.json();
//   });

//   console.log("response", response);

//   res.send(JSON.stringify("success"));
// }
