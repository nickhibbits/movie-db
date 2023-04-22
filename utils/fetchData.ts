import Router from "next/router";

// Client side
export async function fetchData(
  url: string,
  redirectPage: string | null = null
) {
  try {
    const res = await fetch(url).then((res) => res.json());

    if (!res.ok) {
      throw new Error("Bad Response", { cause: res });
    }

    if (!!redirectPage) {
      Router.push({
        pathname: "/results",
        query: { results: JSON.stringify(res.body) },
      });
    }

    return res.body;
  } catch (error) {
    console.log("🔴 TODO create 404 page, redirect", error);
  }
}

// Server side
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

export async function handleMultipleResponses(
  baseUrl: string,
  options: string[]
) {
  const responseArray = options.map(async (option) => {
    const url = `${baseUrl}${option}`;
    const response = await getResponse(url);
    return { option, data: response.body.results };
  });

  return Promise.all(responseArray)
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

      return { ok: true, body: _values };
    })
    .catch((err: any) => {
      return { ok: false, body: err };
    });
}
