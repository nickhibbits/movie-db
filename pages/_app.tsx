import "$/styles/globals.scss";
import type { AppProps } from "next/app";
import { Raleway, Josefin_Sans, Overpass } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], style: ["normal"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"], style: ["italic"] });
const overpass = Overpass({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${raleway.style.fontFamily};
          }
          .subheader {
            font-family: ${josefin_sans.style.fontFamily};
          }
          .text {
            font-family: ${overpass.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
