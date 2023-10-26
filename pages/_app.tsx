import type { AppProps } from "next/app";
import { AppContextWrapper } from "$/state/AppContextWrapper";
import { Raleway, Overpass, Ultra, Average_Sans } from "next/font/google";

import Navbar from "$/components/block/Navbar";

import "$/styles/globals.scss";

const ultra = Ultra({ subsets: ["latin"], weight: "400" });
const averageSans = Average_Sans({ subsets: ["latin"], weight: "400" });
// const josefin_sans = Josefin_Sans({ subsets: ["latin"], style: ["italic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          h1,
          h2,
          h3 {
            font-family: ${ultra.style.fontFamily};
          }

          p,
          li,
          label,
          input,
          .text {
            font-family: ${averageSans.style.fontFamily};
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
