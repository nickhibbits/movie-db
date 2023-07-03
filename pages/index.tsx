import Head from "next/head";
import Search from "$/components/block/Search";
import TitlePage from "$/components/block/TitlePage";

import layout from "$/styles/composition/Layout.module.scss";

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

      <main className={layout.layout_base}>
        <TitlePage>
          <Search />
        </TitlePage>
      </main>
    </>
  );
}
