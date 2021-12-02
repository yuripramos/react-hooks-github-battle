import "./index.css";
import React from "react";
import { ThemeProvider } from "../contexts/theme";
import Head from "next/head";
import useAppHandler from "./useAppHandler";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useAppHandler();

  return (
    <>
      <Head>
        <title>🥷🏾GitHub Battle🥷🏾</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme={toggleTheme} />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
