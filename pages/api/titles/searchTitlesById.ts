import { getResponse } from "$/pages/api/titles/searchTitles";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParams = req.query;
  const { titleId } = queryParams;
  console.log("titleId", titleId);

  const options = ["base_info", "extendedCast"];

  const getTitleInfo = options.map(async (option) => {
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${titleId}?info=${option}`;
    const response = await getResponse(url);
    return { option, data: response.body.results };
  });

  return Promise.all(getTitleInfo)
    .then((values) => {
      const errors = values.filter((value, i) => {
        return value.data.ok === false;
      });

      if (errors.length > 0) {
        throw new Error(`❌ ${errors[0].data.body.message}`);
      }

      const _values = values.reduce((acc, cur) => {
        acc[cur.option] = cur.data;
        return acc;
      }, {} as any);

      res.send({ ok: true, body: _values });
    })
    .catch((err: any) => {
      res.send({ ok: false, body: err });
    });
}
