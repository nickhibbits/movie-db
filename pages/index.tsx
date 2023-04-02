import Head from "next/head";
import Layout from "$/components/composition/Layout";
import Search from "$/components/block/Search";

export default function Home() {
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
        <div className="center">
          <Search />
        </div>
      </Layout>
    </>
  );
}
