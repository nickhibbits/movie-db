import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "$/state/AppContextWrapper";

import Head from "next/head";
import Layout from "$/components/composition/Layout";
import Search from "$/components/block/Search";

export default function Home() {
  const router = useRouter();
  const { loggedIn } = useAuth();

  useEffect(() => {
    !loggedIn && router.push("/login");
  }, [loggedIn]);
  return (
    <>
      <Head>
        <title>Movie Database</title>
        <meta
          name="description"
          content="Search and save your favorite movies and actors"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Search />
      </Layout>
    </>
  );
}
