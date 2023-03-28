import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import InstagramFeed from "../components/InstagramFeed";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

const INSTAGRAM_API_KEY = process.env.NEXT_PUBLIC_INSTAGRAM_API_KEY;


function MyApp({ Component, pageProps }: AppProps) {
  const [instagramMedia, setInstagramMedia] = useState([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${INSTAGRAM_API_KEY}`
      );

      if (!response.ok) {
        console.error("Error fetching Instagram media");
        return;
      }

      const data = await response.json();
      setInstagramMedia(data.data);
    };

    fetchInstagramMedia();
  }, []);

  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={INSTAGRAM_API_KEY}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <InstagramFeed instagramMedia={instagramMedia} />
      </GoogleReCaptchaProvider>
    </>
  );
}

export default MyApp;
