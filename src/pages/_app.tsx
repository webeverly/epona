import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { loadData } from "../data/produce";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

loadData();
