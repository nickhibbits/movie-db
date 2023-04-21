import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;
  const { title } = queryParams;

  const titleTypes = ["movie", "tvSeries", "tvMovie", "podcastSeries"];

  const baseUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=true&titleType=`;

  const getTitlesByType = titleTypes.map(async (titleType, i) => {
    const url = `${baseUrl}${titleType}`;
    titleType;
    const response = await getResponse(url);
    return { titleType, data: response };
  });

  return Promise.all(getTitlesByType)
    .then((values) => {
      const errors = values.filter((value, i) => {
        return value.data.ok === false;
      });

      if (errors.length > 0) {
        throw new Error(`❌ ${errors[0].data.body.message}`);
      }

      const _values = values.reduce((acc, cur) => {
        acc[cur.titleType] = cur.data.body.results;
        return acc;
      }, {} as any);

      res.send({ ok: true, body: _values });
    })
    .catch((err: any) => {
      res.send({ ok: false, body: err });
    });
}

export async function getResponse(url: string) {
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
      console.log("🔻 res", res);
      if (!(res.status >= 200 && res.status < 400)) {
        const body = await res.json();
        console.log("body", body);
        throw new Error(`❌ ${body.message}`);
      }
      return res.json();
    })
    .then((json: any) => json)
    .catch((err: any) => {
      return { ok: false, body: err };
    });

  console.log("🟣 response ", response);

  return { ok: true, body: response };
}
