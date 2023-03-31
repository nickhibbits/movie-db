import Head from "next/head";
import { Raleway, Josefin_Sans, Overpass } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], style: ["normal"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"], style: ["italic"] });
const overpass = Overpass({ subsets: ["latin"] });

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
      <main className="center container">
        <h1 className={`header ${raleway.className}`}>Movie DB Title</h1>
        <h2 className={`subheader ${josefin_sans.className}`}>Subheader</h2>
        <p className={`text ${overpass.className}`}>description</p>
      </main>
    </>
  );
}
