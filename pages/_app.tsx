import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import InstagramFeed from "../components/InstagramFeed";
import Navbar from "../components/Navbar"
import "../styles/globals.css";
import { AppProps } from "next/app";
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const RECAPTCHA_SITE_KEY = publicRuntimeConfig.RECAPTCHA_SITE_KEY;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={RECAPTCHA_SITE_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <InstagramFeed />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default MyApp;
