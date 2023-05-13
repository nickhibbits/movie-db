import Navbar from "$/components/block/Navbar";
import { AppContextWrapper } from "$/state/AppContextWrapper";
import "$/styles/globals.scss";
import type { AppProps } from "next/app";
import { Raleway, Josefin_Sans, Overpass } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"], style: ["normal"] });
const overpass = Overpass({ subsets: ["latin"] });
// const josefin_sans = Josefin_Sans({ subsets: ["latin"], style: ["italic"] });

export default function App({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState(false);

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
