import type { AppProps } from "next/app";
import { AppContextWrapper } from "$/state/AppContextWrapper";
import { Raleway, Overpass } from "next/font/google";

import Navbar from "$/components/block/Navbar";

import "$/styles/globals.scss";

const raleway = Raleway({ subsets: ["latin"], style: ["normal"] });
const overpass = Overpass({ subsets: ["latin"] });
// const josefin_sans = Josefin_Sans({ subsets: ["latin"], style: ["italic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${raleway.style.fontFamily};
          }
          .text {
            font-family: ${overpass.style.fontFamily};
          }
        `}
      </style>
      <AppContextWrapper>
        <Navbar />
        <Component {...pageProps} />
      </AppContextWrapper>
    </>
  );
}
