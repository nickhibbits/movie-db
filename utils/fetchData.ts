import Router from "next/router";

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
